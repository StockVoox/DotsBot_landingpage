/**
 * DotsBot Payout Page Component
 *
 * This is a reference implementation of the Payout Page design.
 * Follow the PAYOUT_PAGE_DESIGN.md specification for complete details.
 *
 * @component PayoutPage
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';

// ============================================================================
// Types & Interfaces
// ============================================================================

interface Balance {
  available: number;
  pending: number;
  total: number;
  currency: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'completed' | 'pending' | 'processing' | 'failed' | 'cancelled';
  paymentMethod: {
    type: string;
    last4: string;
  };
}

interface PaymentMethod {
  id: string;
  type: 'bank' | 'paypal' | 'stripe';
  label: string;
  accountNumber: string;
  isDefault: boolean;
}

// ============================================================================
// Balance Card Component
// ============================================================================

interface BalanceCardProps {
  label: string;
  amount: number;
  subtext: string;
  type: 'primary' | 'secondary' | 'tertiary';
  growth?: string;
  onAction?: () => void;
  actionLabel?: string;
}

function BalanceCard({
  label,
  amount,
  subtext,
  type,
  growth,
  onAction,
  actionLabel,
}: BalanceCardProps) {
  const isPrimary = type === 'primary';

  return (
    <div className={`balance-card ${isPrimary ? 'balance-card--primary' : ''}`}>
      <div className="balance-card__label">{label}</div>
      <div className="balance-card__amount">
        ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </div>
      <div className="balance-card__subtext">{subtext}</div>

      {growth && (
        <div className="balance-card__growth">
          <span className="balance-card__growth-icon">↑</span>
          {growth}
        </div>
      )}

      {onAction && actionLabel && (
        <button
          className="btn-primary"
          onClick={onAction}
          style={{ marginTop: '16px', width: '100%' }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Status Badge Component
// ============================================================================

interface StatusBadgeProps {
  status: Transaction['status'];
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`payout-table__status-badge payout-table__status-badge--${status}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// ============================================================================
// Transaction Table Row Component
// ============================================================================

interface TransactionRowProps {
  transaction: Transaction;
  onViewDetails: (id: string) => void;
}

function TransactionRow({ transaction, onViewDetails }: TransactionRowProps) {
  const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="payout-table__row">
      <div className="payout-table__cell payout-table__date">{formattedDate}</div>
      <div className="payout-table__cell">{transaction.description}</div>
      <div className="payout-table__cell payout-table__amount">
        ${transaction.amount.toFixed(2)}
      </div>
      <div className="payout-table__cell">
        <StatusBadge status={transaction.status} />
      </div>
      <div className="payout-table__cell">
        {transaction.paymentMethod.type} ****{transaction.paymentMethod.last4}
      </div>
      <div className="payout-table__cell payout-table__actions">
        <button
          className="payout-table__action-btn"
          onClick={() => onViewDetails(transaction.id)}
        >
          View
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Payment Method Card Component
// ============================================================================

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

function PaymentMethodCard({
  method,
  onEdit,
  onDelete,
  onSetDefault,
}: PaymentMethodCardProps) {
  const getIcon = () => {
    switch (method.type) {
      case 'bank':
        return '🏦';
      case 'paypal':
        return '💳';
      case 'stripe':
        return '💰';
      default:
        return '💵';
    }
  };

  return (
    <div className={`payment-method-card ${method.isDefault ? 'payment-method-card--default' : ''}`}>
      {method.isDefault && (
        <div className="payment-method-card__default-badge">Default</div>
      )}

      <div className="payment-method-card__header">
        <div className="payment-method-card__icon">{getIcon()}</div>
        <div className="payment-method-card__type">
          {method.type.charAt(0).toUpperCase() + method.type.slice(1)}
        </div>
      </div>

      <div className="payment-method-card__account">
        {method.label}
        <br />
        {method.accountNumber}
      </div>

      <div className="payment-method-card__actions">
        <button
          className="payment-method-card__action"
          onClick={() => onEdit(method.id)}
        >
          Edit
        </button>
        {!method.isDefault && (
          <button
            className="payment-method-card__action"
            onClick={() => onSetDefault(method.id)}
          >
            Set Default
          </button>
        )}
        <button
          className="payment-method-card__action payment-method-card__action--delete"
          onClick={() => onDelete(method.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Request Payout Modal Component
// ============================================================================

interface RequestPayoutModalProps {
  isOpen: boolean;
  availableBalance: number;
  paymentMethods: PaymentMethod[];
  onClose: () => void;
  onSubmit: (amount: number, paymentMethodId: string) => void;
}

function RequestPayoutModal({
  isOpen,
  availableBalance,
  paymentMethods,
  onClose,
  onSubmit,
}: RequestPayoutModalProps) {
  const [amount, setAmount] = useState<string>('');
  const [paymentMethodId, setPaymentMethodId] = useState<string>('');
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numAmount = parseFloat(amount);

    // Validation
    if (numAmount < 10) {
      setError('Minimum payout amount is $10');
      return;
    }
    if (numAmount > availableBalance) {
      setError(`Amount exceeds available balance ($${availableBalance.toFixed(2)})`);
      return;
    }
    if (!paymentMethodId) {
      setError('Please select a payment method');
      return;
    }

    setError('');
    onSubmit(numAmount, paymentMethodId);
    setAmount('');
    setPaymentMethodId('');
  };

  const transactionFee = parseFloat(amount) > 0 ? parseFloat(amount) * 0.02 : 0;
  const netAmount = parseFloat(amount) > 0 ? parseFloat(amount) - transactionFee : 0;

  return (
    <div className="payout-modal" onClick={onClose}>
      <div className="payout-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="payout-modal__header">
          <h2 className="payout-modal__title">Request Payout</h2>
          <button className="payout-modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="payout-modal__body">
            {/* Amount Input */}
            <div className="form-group">
              <label className="form-label">Amount to Withdraw</label>
              <input
                type="number"
                step="0.01"
                min="10"
                max={availableBalance}
                className={`form-input ${error ? 'form-input--error' : ''}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
              <p className="form-helper">
                Available: ${availableBalance.toFixed(2)} • Minimum: $10.00
              </p>
              {error && <p className="form-error">{error}</p>}
            </div>

            {/* Payment Method Selector */}
            <div className="form-group">
              <label className="form-label">Payment Method</label>
              <select
                className="settings-select"
                style={{ width: '100%' }}
                value={paymentMethodId}
                onChange={(e) => setPaymentMethodId(e.target.value)}
              >
                <option value="">Select payment method</option>
                {paymentMethods.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.label} - {method.accountNumber}
                    {method.isDefault ? ' (Default)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Processing Time Info */}
            <div className="form-helper" style={{ marginBottom: '24px' }}>
              ⏱ Payouts typically process in 2-3 business days
            </div>

            {/* Fee Breakdown */}
            {parseFloat(amount) > 0 && (
              <div className="fee-breakdown">
                <div className="fee-breakdown__row">
                  <span>Withdrawal Amount</span>
                  <span>${parseFloat(amount).toFixed(2)}</span>
                </div>
                <div className="fee-breakdown__row">
                  <span>Transaction Fee (2%)</span>
                  <span>-${transactionFee.toFixed(2)}</span>
                </div>
                <div className="fee-breakdown__row fee-breakdown__row--total">
                  <span>Net Amount</span>
                  <span>${netAmount.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          <div className="payout-modal__footer">
            <button type="button" className="modal-btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="modal-btn-submit"
              disabled={!amount || !paymentMethodId}
            >
              Request Payout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================================================
// Empty State Component
// ============================================================================

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">📋</div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
      {onAction && actionLabel && (
        <button className="btn-primary" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Main Payout Page Component
// ============================================================================

export default function PayoutPage() {
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [balance] = useState<Balance>({
    available: 2847.50,
    pending: 1234.00,
    total: 15482.75,
    currency: 'USD',
  });

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '2025-11-10T14:30:00Z',
      description: 'Monthly Commission',
      amount: 847.50,
      status: 'completed',
      paymentMethod: { type: 'Bank', last4: '1234' },
    },
    {
      id: '2',
      date: '2025-11-03T10:15:00Z',
      description: 'Affiliate Revenue',
      amount: 412.00,
      status: 'completed',
      paymentMethod: { type: 'PayPal', last4: '5678' },
    },
    {
      id: '3',
      date: '2025-10-27T16:45:00Z',
      description: 'Service Fee Refund',
      amount: 25.00,
      status: 'pending',
      paymentMethod: { type: 'Bank', last4: '1234' },
    },
    {
      id: '4',
      date: '2025-10-20T09:20:00Z',
      description: 'Monthly Commission',
      amount: 923.75,
      status: 'completed',
      paymentMethod: { type: 'Bank', last4: '1234' },
    },
    {
      id: '5',
      date: '2025-10-15T13:00:00Z',
      description: 'Bonus Payment',
      amount: 200.00,
      status: 'completed',
      paymentMethod: { type: 'PayPal', last4: '5678' },
    },
  ]);

  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'pm1',
      type: 'bank',
      label: 'Chase Checking',
      accountNumber: '****1234',
      isDefault: true,
    },
    {
      id: 'pm2',
      type: 'paypal',
      label: 'PayPal Account',
      accountNumber: 'john@example.com',
      isDefault: false,
    },
  ]);

  // Event handlers
  const handleRequestPayout = (amount: number, paymentMethodId: string) => {
    console.log('Payout requested:', { amount, paymentMethodId });
    // TODO: API call to request payout
    setIsModalOpen(false);
    // Show success toast
    alert(`Payout of $${amount.toFixed(2)} requested successfully!`);
  };

  const handleViewDetails = (id: string) => {
    console.log('View transaction details:', id);
    // TODO: Open transaction details modal or navigate to details page
  };

  const handleEditPaymentMethod = (id: string) => {
    console.log('Edit payment method:', id);
    // TODO: Open edit payment method modal
  };

  const handleDeletePaymentMethod = (id: string) => {
    console.log('Delete payment method:', id);
    // TODO: Confirm and delete payment method
  };

  const handleSetDefaultPaymentMethod = (id: string) => {
    console.log('Set default payment method:', id);
    // TODO: Update default payment method
  };

  // Render
  return (
    <div className="payout-page">
      {/* Page Header */}
      <div className="payout-header">
        <h1 className="payout-header__title">Payouts</h1>
        <div className="payout-header__actions">
          <button
            className="btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Request Payout
          </button>
        </div>
      </div>

      {/* Balance Overview */}
      <div className="balance-overview">
        <BalanceCard
          label="Available Balance"
          amount={balance.available}
          subtext="Ready to withdraw"
          type="primary"
          actionLabel="Request Payout"
          onAction={() => setIsModalOpen(true)}
        />
        <BalanceCard
          label="Pending Balance"
          amount={balance.pending}
          subtext="Processing (2-3 business days)"
          type="secondary"
        />
        <BalanceCard
          label="Total Earnings"
          amount={balance.total}
          subtext="Lifetime earnings"
          type="tertiary"
          growth="+12.5% this month"
        />
      </div>

      {/* Payout History */}
      <div className="payout-history">
        <div className="payout-history__header">
          <h2 className="payout-history__title">Payout History</h2>
          <div className="payout-history__filters">
            <button className="btn-secondary">Export CSV</button>
          </div>
        </div>

        {transactions.length > 0 ? (
          <div className="payout-table">
            <div className="payout-table__header payout-table__row">
              <div className="payout-table__header-cell">Date</div>
              <div className="payout-table__header-cell">Description</div>
              <div className="payout-table__header-cell">Amount</div>
              <div className="payout-table__header-cell">Status</div>
              <div className="payout-table__header-cell">Method</div>
              <div className="payout-table__header-cell">Actions</div>
            </div>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No transactions yet"
            description="Your payout history will appear here once you make your first withdrawal."
          />
        )}
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <div className="payment-methods__header">
          <h2 className="payout-history__title">Payment Methods</h2>
          <button className="btn-primary">+ Add Payment Method</button>
        </div>

        {paymentMethods.length > 0 ? (
          <div className="payment-methods__grid">
            {paymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                onEdit={handleEditPaymentMethod}
                onDelete={handleDeletePaymentMethod}
                onSetDefault={handleSetDefaultPaymentMethod}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No payment methods added"
            description="Add a payment method to start receiving payouts"
            actionLabel="Add Payment Method"
            onAction={() => console.log('Add payment method')}
          />
        )}
      </div>

      {/* Request Payout Modal */}
      <RequestPayoutModal
        isOpen={isModalOpen}
        availableBalance={balance.available}
        paymentMethods={paymentMethods}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleRequestPayout}
      />
    </div>
  );
}
