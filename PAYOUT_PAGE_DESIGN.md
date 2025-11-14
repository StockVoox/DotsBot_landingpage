# DotsBot Payout Page - Design Specification

## Executive Summary

This document provides comprehensive design specifications for the DotsBot Payout Page. This page enables users to manage their earnings, view transaction history, configure payment methods, and request payouts.

**Target Users:** DotsBot partners, affiliates, resellers, and service providers who earn commissions or revenue share.

---

## 1. Page Overview

### Purpose
The Payout Page serves as a comprehensive dashboard for users to:
- View current balance and earnings
- Track payout history and pending transactions
- Manage payment methods (bank accounts, PayPal, etc.)
- Request payouts and configure payout schedules
- View detailed transaction analytics

### User Flow
```
Dashboard Overview → View Balance → Request Payout → Confirm Payment Method → Complete
                   → View History → Export Reports
                   → Manage Payment Methods → Add/Edit/Delete
```

---

## 2. Page Structure & Layout

### 2.1 Page Header
**Components:**
- Page title: "Payouts"
- Breadcrumb navigation: Dashboard / Payouts
- Quick actions: "Request Payout" button (primary CTA)

**Design:**
```css
.payout-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 40px 24px;
  border-bottom: 1px solid #E5E7EB;
  background: #FFFFFF;
}

.payout-header__title {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.payout-header__actions {
  display: flex;
  gap: 12px;
  align-items: center;
}
```

---

### 2.2 Balance Overview Section
**Purpose:** Display current earnings at a glance

**Components:**

#### Available Balance Card
- **Label:** "Available Balance"
- **Amount:** Large, prominent display (e.g., "$2,847.50")
- **Subtext:** "Ready to withdraw"
- **CTA:** "Request Payout" button

#### Pending Balance Card
- **Label:** "Pending Balance"
- **Amount:** "$1,234.00"
- **Subtext:** "Processing (2-3 business days)"
- **Icon:** Clock icon

#### Total Earnings Card
- **Label:** "Total Earnings"
- **Amount:** "$15,482.75"
- **Subtext:** "Lifetime earnings"
- **Growth indicator:** "+12.5% this month" (with up arrow)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Available Balance    │  Pending Balance   │  Total Earnings │
│                       │                    │                 │
│   $2,847.50          │   $1,234.00        │   $15,482.75   │
│   Ready to withdraw   │   Processing       │   Lifetime      │
│   [Request Payout]    │   ⏱ 2-3 days      │   ↑ +12.5%     │
└─────────────────────────────────────────────────────────────┘
```

**Design Specifications:**

```css
.balance-overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 40px;
}

.balance-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.balance-card:hover {
  border-color: #4F46E5;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.12);
  transform: translateY(-2px);
}

.balance-card--primary {
  border-color: #4F46E5;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  color: white;
}

.balance-card__label {
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.balance-card--primary .balance-card__label {
  color: rgba(255, 255, 255, 0.9);
}

.balance-card__amount {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.balance-card--primary .balance-card__amount {
  color: white;
}

.balance-card__subtext {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 16px;
}

.balance-card--primary .balance-card__subtext {
  color: rgba(255, 255, 255, 0.85);
}

.balance-card__growth {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #10B981;
  padding: 4px 12px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
}

.balance-card__growth-icon {
  width: 16px;
  height: 16px;
}
```

**Responsive Behavior:**
```css
/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .balance-overview {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 24px;
  }

  .balance-card:first-child {
    grid-column: 1 / -1;
  }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
  .balance-overview {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 20px;
  }

  .balance-card {
    padding: 24px;
  }

  .balance-card__amount {
    font-size: 28px;
  }
}
```

---

### 2.3 Quick Actions Bar
**Purpose:** Provide quick access to common payout actions

**Components:**
- **Request Payout** - Primary action button
- **View Payment Methods** - Secondary link
- **Download Statement** - Download icon button
- **Date Range Filter** - Dropdown selector

**Design:**
```css
.quick-actions {
  max-width: 1200px;
  margin: 0 auto 32px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quick-actions__primary {
  display: flex;
  gap: 12px;
}

.quick-actions__filters {
  display: flex;
  gap: 12px;
  align-items: center;
}
```

---

### 2.4 Payout History Section
**Purpose:** Display comprehensive transaction history

**Components:**

#### Section Header
- Title: "Payout History"
- Filter controls: Status filter, Date range, Search
- Export button: "Export CSV"

#### Transaction Table
**Columns:**
1. **Date** - Transaction date/time
2. **Description** - Transaction type/description
3. **Amount** - Transaction amount
4. **Status** - Current status (badge)
5. **Payment Method** - Method used
6. **Actions** - View details, Download receipt

**Transaction Statuses:**
- **Completed** - Green badge (#10B981)
- **Pending** - Yellow badge (#F59E0B)
- **Processing** - Blue badge (#3B82F6)
- **Failed** - Red badge (#EF4444)
- **Cancelled** - Gray badge (#6B7280)

**Design Specifications:**

```css
.payout-history {
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 40px;
}

.payout-history__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.payout-history__title {
  font-size: 24px;
  font-weight: 600;
  color: #111827;
}

.payout-history__filters {
  display: flex;
  gap: 12px;
  align-items: center;
}

.payout-table {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
}

.payout-table__header {
  background: #F9FAFB;
  border-bottom: 1px solid #E5E7EB;
}

.payout-table__row {
  display: grid;
  grid-template-columns: 140px 1fr 120px 120px 140px 100px;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E7EB;
  transition: background 0.15s ease;
}

.payout-table__row:hover {
  background: #F9FAFB;
}

.payout-table__header-cell {
  font-size: 12px;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.payout-table__cell {
  font-size: 14px;
  color: #374151;
  display: flex;
  align-items: center;
}

.payout-table__date {
  font-weight: 500;
  color: #111827;
}

.payout-table__amount {
  font-weight: 600;
  color: #111827;
  font-variant-numeric: tabular-nums;
}

.payout-table__status-badge {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}

.payout-table__status-badge--completed {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

.payout-table__status-badge--pending {
  background: rgba(245, 158, 11, 0.1);
  color: #D97706;
}

.payout-table__status-badge--processing {
  background: rgba(59, 130, 246, 0.1);
  color: #2563EB;
}

.payout-table__status-badge--failed {
  background: rgba(239, 68, 68, 0.1);
  color: #DC2626;
}

.payout-table__actions {
  display: flex;
  gap: 8px;
}

.payout-table__action-btn {
  padding: 6px 12px;
  font-size: 13px;
  color: #4F46E5;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.15s;
}

.payout-table__action-btn:hover {
  background: #F9FAFB;
  border-color: #4F46E5;
}
```

**Example Transactions:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│ Date          Description              Amount    Status      Method       │
├────────────────────────────────────────────────────────────────────────────┤
│ Nov 10, 2025  Monthly Commission       $847.50   Completed   Bank ****1234│
│ Nov 3, 2025   Affiliate Revenue        $412.00   Completed   PayPal      │
│ Oct 27, 2025  Service Fee Refund       $25.00    Pending     Bank ****1234│
│ Oct 20, 2025  Monthly Commission       $923.75   Completed   Bank ****1234│
│ Oct 15, 2025  Bonus Payment            $200.00   Completed   PayPal      │
└────────────────────────────────────────────────────────────────────────────┘
```

**Responsive Table (Mobile):**
```css
@media (max-width: 767px) {
  .payout-table__row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 16px;
  }

  .payout-table__header {
    display: none;
  }

  .payout-table__cell {
    display: flex;
    justify-content: space-between;
  }

  .payout-table__cell::before {
    content: attr(data-label);
    font-weight: 600;
    color: #6B7280;
    font-size: 12px;
    text-transform: uppercase;
  }
}
```

---

### 2.5 Payment Methods Section
**Purpose:** Manage saved payment methods

**Components:**

#### Section Header
- Title: "Payment Methods"
- Add button: "+ Add Payment Method"

#### Payment Method Cards
Each card shows:
- Payment method type icon (Bank, PayPal, Stripe, etc.)
- Account name/label
- Masked account number
- Default badge (if applicable)
- Actions: Edit, Delete, Set as Default

**Design Specifications:**

```css
.payment-methods {
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 40px;
}

.payment-methods__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.payment-methods__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.payment-method-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
  position: relative;
}

.payment-method-card--default {
  border-color: #4F46E5;
}

.payment-method-card:hover {
  border-color: #4F46E5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.payment-method-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.payment-method-card__icon {
  width: 48px;
  height: 48px;
  background: #F3F4F6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-method-card__type {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.payment-method-card__default-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #4F46E5;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.payment-method-card__account {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 16px;
  font-family: var(--font-mono);
}

.payment-method-card__actions {
  display: flex;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #E5E7EB;
}

.payment-method-card__action {
  flex: 1;
  padding: 8px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #E5E7EB;
  background: white;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s;
}

.payment-method-card__action:hover {
  background: #F9FAFB;
  border-color: #4F46E5;
  color: #4F46E5;
}

.payment-method-card__action--delete {
  color: #EF4444;
}

.payment-method-card__action--delete:hover {
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.05);
}
```

**Example Payment Method Cards:**

```
┌──────────────────────┐  ┌──────────────────────┐
│ 🏦  Bank Account     │  │ 💳  PayPal          │
│     [DEFAULT]        │  │                      │
│ Chase Checking       │  │ PayPal Account       │
│ ****1234            │  │ john@example.com     │
│                      │  │                      │
│ [Edit] [Delete]      │  │ [Edit] [Set Default] │
└──────────────────────┘  └──────────────────────┘
```

---

### 2.6 Payout Settings Section
**Purpose:** Configure automatic payouts and preferences

**Components:**

#### Automatic Payouts Toggle
- Enable/disable automatic payouts
- Minimum payout threshold selector
- Payout frequency selector (Weekly, Bi-weekly, Monthly)

#### Payout Schedule
- Next scheduled payout date
- Estimated amount
- Payment method to be used

#### Notification Preferences
- Email notifications for completed payouts
- Email notifications for failed payouts
- Weekly balance summary

**Design Specifications:**

```css
.payout-settings {
  max-width: 800px;
  margin: 0 auto 48px;
  padding: 0 40px;
}

.settings-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 24px;
}

.settings-card__title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 20px;
}

.settings-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #E5E7EB;
}

.settings-option:last-child {
  border-bottom: none;
}

.settings-option__label {
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.settings-option__description {
  font-size: 13px;
  color: #6B7280;
}

.settings-option__control {
  flex-shrink: 0;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  width: 48px;
  height: 24px;
  background: #E5E7EB;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.toggle-switch.active {
  background: #4F46E5;
}

.toggle-switch__handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.toggle-switch.active .toggle-switch__handle {
  transform: translateX(24px);
}

/* Dropdown Selector */
.settings-select {
  padding: 8px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  background: white;
  cursor: pointer;
  min-width: 180px;
}

.settings-select:hover {
  border-color: #4F46E5;
}

.settings-select:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
```

---

### 2.7 Request Payout Modal
**Purpose:** Interface for requesting a new payout

**Components:**

#### Modal Header
- Title: "Request Payout"
- Close button

#### Form Fields
1. **Amount to Withdraw**
   - Input field with currency prefix
   - Available balance reminder
   - Validation: Min $10, Max = available balance

2. **Payment Method**
   - Dropdown selector
   - Shows saved payment methods
   - "Add new method" option

3. **Processing Time**
   - Informational text: "Payouts typically process in 2-3 business days"

4. **Fee Breakdown**
   - Transaction fee (if applicable)
   - Net amount to receive

**Design Specifications:**

```css
.payout-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.payout-modal__content {
  background: white;
  border-radius: 16px;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.payout-modal__header {
  padding: 24px 32px;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payout-modal__title {
  font-size: 24px;
  font-weight: 600;
  color: #111827;
}

.payout-modal__close {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: #F3F4F6;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.15s;
}

.payout-modal__close:hover {
  background: #E5E7EB;
  color: #374151;
}

.payout-modal__body {
  padding: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  color: #111827;
  transition: all 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-input--error {
  border-color: #EF4444;
}

.form-helper {
  font-size: 13px;
  color: #6B7280;
  margin-top: 6px;
}

.form-error {
  font-size: 13px;
  color: #EF4444;
  margin-top: 6px;
}

.fee-breakdown {
  background: #F9FAFB;
  border-radius: 8px;
  padding: 16px;
  margin: 24px 0;
}

.fee-breakdown__row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  color: #374151;
}

.fee-breakdown__row--total {
  border-top: 1px solid #E5E7EB;
  padding-top: 12px;
  margin-top: 8px;
  font-weight: 600;
  color: #111827;
  font-size: 16px;
}

.payout-modal__footer {
  padding: 24px 32px;
  border-top: 1px solid #E5E7EB;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.modal-btn-cancel {
  padding: 12px 24px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.modal-btn-cancel:hover {
  background: #F9FAFB;
  border-color: #D1D5DB;
}

.modal-btn-submit {
  padding: 12px 24px;
  border-radius: 8px;
  background: #4F46E5;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-btn-submit:hover {
  background: #4338CA;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

.modal-btn-submit:disabled {
  background: #D1D5DB;
  cursor: not-allowed;
  box-shadow: none;
}
```

---

### 2.8 Empty States

**No Transaction History:**
```css
.empty-state {
  text-align: center;
  padding: 64px 32px;
}

.empty-state__icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  opacity: 0.3;
}

.empty-state__title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.empty-state__description {
  font-size: 15px;
  color: #6B7280;
  margin-bottom: 24px;
}
```

**No Payment Methods:**
- Icon: Credit card with plus sign
- Title: "No payment methods added"
- Description: "Add a payment method to start receiving payouts"
- CTA: "Add Payment Method" button

---

## 3. Component Specifications

### 3.1 Color Usage
Consistent with DotsBot design system:

```css
/* Primary Actions */
--primary-color: #4F46E5;
--primary-hover: #4338CA;

/* Status Colors */
--status-success: #10B981;
--status-warning: #F59E0B;
--status-error: #EF4444;
--status-info: #3B82F6;
--status-neutral: #6B7280;

/* Background Colors */
--bg-primary: #FFFFFF;
--bg-secondary: #F9FAFB;
--bg-tertiary: #F3F4F6;

/* Border Colors */
--border-light: #E5E7EB;
--border-medium: #D1D5DB;
--border-dark: #9CA3AF;

/* Text Colors */
--text-primary: #111827;
--text-secondary: #374151;
--text-tertiary: #6B7280;
--text-disabled: #9CA3AF;
```

---

### 3.2 Typography
Following DotsBot design system:

```css
/* Headings */
.heading-1 { font-size: 30px; font-weight: 700; line-height: 1.25; }
.heading-2 { font-size: 24px; font-weight: 600; line-height: 1.3; }
.heading-3 { font-size: 20px; font-weight: 600; line-height: 1.4; }
.heading-4 { font-size: 18px; font-weight: 600; line-height: 1.4; }

/* Body */
.body-large { font-size: 18px; font-weight: 400; line-height: 1.75; }
.body-regular { font-size: 16px; font-weight: 400; line-height: 1.5; }
.body-small { font-size: 14px; font-weight: 400; line-height: 1.5; }
.body-tiny { font-size: 12px; font-weight: 400; line-height: 1.5; }

/* Special */
.label { font-size: 14px; font-weight: 600; }
.caption { font-size: 12px; font-weight: 500; color: #6B7280; }
```

---

### 3.3 Spacing System
Consistent spacing throughout:

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;
--spacing-3xl: 48px;
--spacing-4xl: 64px;
```

---

### 3.4 Interactive States

**Buttons:**
```css
/* Default state */
background: var(--primary-color);
box-shadow: 0 1px 3px rgba(0,0,0,0.1);

/* Hover */
background: var(--primary-hover);
box-shadow: 0 4px 12px rgba(79,70,229,0.4);
transform: translateY(-1px);

/* Active/Pressed */
transform: translateY(0);
box-shadow: 0 1px 2px rgba(0,0,0,0.1);

/* Disabled */
background: #D1D5DB;
color: #9CA3AF;
cursor: not-allowed;
box-shadow: none;
```

**Cards:**
```css
/* Default */
border: 2px solid #E5E7EB;
box-shadow: none;

/* Hover */
border-color: #4F46E5;
box-shadow: 0 8px 24px rgba(79, 70, 229, 0.12);
transform: translateY(-2px);

/* Active/Selected */
border-color: #4F46E5;
background: rgba(79, 70, 229, 0.02);
```

**Form Inputs:**
```css
/* Default */
border: 2px solid #E5E7EB;

/* Focus */
border-color: #4F46E5;
box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);

/* Error */
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
```

---

## 4. Accessibility Requirements

### 4.1 WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text (18px+): Minimum 3:1 ratio
- UI components: Minimum 3:1 ratio

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Clear focus indicators (2px outline, primary color)
- Modal trapping (Tab cycles within modal)
- Escape key closes modals

**Screen Reader Support:**
```html
<!-- Balance Card -->
<div class="balance-card" role="region" aria-labelledby="available-balance">
  <h3 id="available-balance" class="balance-card__label">Available Balance</h3>
  <p class="balance-card__amount" aria-label="2847 dollars and 50 cents">$2,847.50</p>
</div>

<!-- Status Badge -->
<span class="payout-table__status-badge payout-table__status-badge--completed"
      role="status"
      aria-label="Payment status: Completed">
  Completed
</span>

<!-- Request Payout Button -->
<button class="btn-primary"
        aria-label="Request payout from available balance">
  Request Payout
</button>
```

**Focus Management:**
- Modal opens: Focus moves to modal
- Modal closes: Focus returns to trigger element
- Form errors: Focus moves to first error

---

### 4.2 Semantic HTML

```html
<!-- Page Structure -->
<main class="payout-page">
  <header class="payout-header">
    <h1>Payouts</h1>
  </header>

  <section class="balance-overview" aria-labelledby="balance-title">
    <h2 id="balance-title" class="sr-only">Balance Overview</h2>
    <!-- Balance cards -->
  </section>

  <section class="payout-history" aria-labelledby="history-title">
    <h2 id="history-title">Payout History</h2>
    <table class="payout-table" role="table">
      <!-- Table content -->
    </table>
  </section>
</main>
```

---

## 5. Responsive Design

### 5.1 Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1200px;  /* Desktops */
```

### 5.2 Layout Adaptations

**Desktop (≥1024px):**
- 3-column balance cards
- Full data table with all columns
- Side-by-side payment method cards (2-3 per row)

**Tablet (768px - 1023px):**
- 2-column balance cards (available balance spans full width)
- Scrollable table or simplified columns
- 2 payment method cards per row

**Mobile (<768px):**
- Single column layout
- Stacked balance cards
- Card-based transaction view (no table)
- Single column payment methods
- Full-width buttons

---

## 6. Loading States & Skeletons

### 6.1 Balance Cards Loading
```css
.balance-card--loading {
  background: linear-gradient(
    90deg,
    #F3F4F6 0%,
    #E5E7EB 50%,
    #F3F4F6 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 6.2 Table Row Skeleton
```html
<div class="skeleton-row">
  <div class="skeleton skeleton--text-sm"></div>
  <div class="skeleton skeleton--text-md"></div>
  <div class="skeleton skeleton--text-sm"></div>
  <div class="skeleton skeleton--badge"></div>
</div>
```

---

## 7. Error Handling

### 7.1 Error Messages

**Form Validation Errors:**
```html
<div class="form-group">
  <label class="form-label">Amount</label>
  <input class="form-input form-input--error" type="number" value="5000">
  <p class="form-error">
    Amount exceeds available balance ($2,847.50)
  </p>
</div>
```

**API Error States:**
- **Network Error:** "Unable to connect. Please check your internet connection."
- **Server Error:** "Something went wrong. Please try again later."
- **Validation Error:** Display specific field errors

**User-Friendly Messages:**
- ❌ "Error 500: Internal Server Error"
- ✅ "We're experiencing technical difficulties. Please try again in a few minutes."

---

### 7.2 Toast Notifications

```css
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 320px;
  animation: slideIn 0.3s ease;
}

.toast--success {
  border-left: 4px solid #10B981;
}

.toast--error {
  border-left: 4px solid #EF4444;
}

.toast--warning {
  border-left: 4px solid #F59E0B;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

**Example Messages:**
- **Success:** "Payout request submitted successfully"
- **Error:** "Failed to process payout. Please try again."
- **Info:** "Your payout is being processed"

---

## 8. Data Visualization

### 8.1 Earnings Chart
**Purpose:** Visual representation of earnings over time

**Chart Type:** Line chart or area chart
**Data Points:** Daily/Weekly/Monthly earnings
**Interactions:** Hover to see exact amounts, toggle date ranges

```css
.earnings-chart {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
}

.earnings-chart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.earnings-chart__title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

.earnings-chart__controls {
  display: flex;
  gap: 8px;
}

.chart-period-btn {
  padding: 6px 12px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  background: white;
  font-size: 13px;
  font-weight: 500;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.15s;
}

.chart-period-btn.active {
  background: #4F46E5;
  color: white;
  border-color: #4F46E5;
}
```

---

## 9. Security Considerations

### 9.1 Data Protection
- Mask sensitive account information (show last 4 digits)
- Use HTTPS for all API communications
- Implement CSRF protection on forms
- Session timeout after 30 minutes of inactivity

### 9.2 Transaction Verification
- Two-factor authentication for large payouts (>$1000)
- Email confirmation for all payout requests
- Fraud detection alerts
- Rate limiting on payout requests

### 9.3 Input Validation
```javascript
// Amount validation
const validateAmount = (amount, availableBalance) => {
  if (amount < 10) {
    return "Minimum payout amount is $10";
  }
  if (amount > availableBalance) {
    return "Amount exceeds available balance";
  }
  if (!Number.isFinite(amount)) {
    return "Please enter a valid amount";
  }
  return null;
};
```

---

## 10. Performance Optimization

### 10.1 Page Load Performance
**Target Metrics:**
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s

**Optimization Strategies:**
- Lazy load transaction history (paginated)
- Compress images and use WebP format
- Minimize CSS/JS bundle sizes
- Implement service worker caching
- Use skeleton screens while loading

### 10.2 Data Loading
```javascript
// Pagination for transaction history
const ITEMS_PER_PAGE = 20;

// Load more on scroll
const loadMoreTransactions = (offset) => {
  fetch(`/api/payouts?limit=${ITEMS_PER_PAGE}&offset=${offset}`)
    .then(response => response.json())
    .then(data => appendTransactions(data));
};

// Infinite scroll implementation
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadMoreTransactions(currentOffset);
  }
});
```

---

## 11. Analytics & Tracking

### 11.1 Event Tracking

**Key Events to Track:**
```javascript
// Page view
analytics.track('Payout Page Viewed');

// Actions
analytics.track('Payout Requested', {
  amount: 500,
  paymentMethod: 'bank',
  processingTime: '2-3 days'
});

analytics.track('Payment Method Added', {
  type: 'bank_account'
});

analytics.track('Payout Export Downloaded', {
  format: 'csv',
  dateRange: 'last_30_days'
});

// Errors
analytics.track('Payout Request Failed', {
  error: 'insufficient_balance',
  attemptedAmount: 5000
});
```

### 11.2 User Behavior Metrics
- Average time on page
- Payout request conversion rate
- Most used payment methods
- Common error rates
- Drop-off points in payout flow

---

## 12. Testing Requirements

### 12.1 Functional Testing

**Test Cases:**
1. **Balance Display**
   - Verify correct balance calculations
   - Test real-time balance updates
   - Validate currency formatting

2. **Payout Request Flow**
   - Submit valid payout request
   - Handle insufficient balance
   - Validate minimum/maximum amounts
   - Test payment method selection

3. **Payment Method Management**
   - Add new payment method
   - Set default payment method
   - Delete payment method
   - Edit payment method details

4. **Transaction History**
   - Load transaction data
   - Filter by status
   - Filter by date range
   - Export to CSV
   - Pagination

### 12.2 Cross-Browser Testing
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### 12.3 Device Testing
- iPhone (iOS 15+)
- Android devices (Android 10+)
- iPad/Tablets
- Desktop (1920x1080, 1366x768)

---

## 13. Implementation Notes

### 13.1 Next.js Component Structure

```typescript
// /src/app/dashboard/payouts/page.tsx
export default function PayoutsPage() {
  return (
    <div className="payout-page">
      <PayoutHeader />
      <BalanceOverview />
      <QuickActions />
      <PayoutHistory />
      <PaymentMethods />
      <PayoutSettings />
    </div>
  );
}

// /src/components/payouts/BalanceOverview.tsx
export function BalanceOverview() {
  const { availableBalance, pendingBalance, totalEarnings } = usePayoutData();

  return (
    <div className="balance-overview">
      <BalanceCard
        label="Available Balance"
        amount={availableBalance}
        type="primary"
      />
      <BalanceCard
        label="Pending Balance"
        amount={pendingBalance}
        type="secondary"
      />
      <BalanceCard
        label="Total Earnings"
        amount={totalEarnings}
        type="tertiary"
      />
    </div>
  );
}
```

### 13.2 API Endpoints

```typescript
// GET /api/payouts/balance
{
  "available": 2847.50,
  "pending": 1234.00,
  "total": 15482.75,
  "currency": "USD"
}

// GET /api/payouts/transactions
{
  "transactions": [
    {
      "id": "pyt_123abc",
      "date": "2025-11-10T14:30:00Z",
      "amount": 847.50,
      "status": "completed",
      "description": "Monthly Commission",
      "paymentMethod": {
        "type": "bank_account",
        "last4": "1234"
      }
    }
  ],
  "pagination": {
    "total": 125,
    "page": 1,
    "perPage": 20
  }
}

// POST /api/payouts/request
{
  "amount": 500.00,
  "paymentMethodId": "pm_123abc",
  "currency": "USD"
}
```

---

## 14. Future Enhancements

### Phase 2 Features
- Multi-currency support
- Tax documentation generation (1099 forms)
- Batch payout requests
- Scheduled recurring payouts
- Advanced analytics dashboard
- Mobile app version

### Phase 3 Features
- Cryptocurrency payout options
- International wire transfers
- Payment method verification
- Dispute resolution center
- Custom payout rules and automations

---

## 15. Documentation & Support

### 15.1 User Documentation
Create help articles for:
- How to request a payout
- Adding payment methods
- Understanding payout statuses
- Troubleshooting failed payments
- Tax reporting and documentation

### 15.2 Developer Documentation
- API reference
- Webhook events
- Error code reference
- Integration guide
- Testing sandbox environment

---

## Appendix

### A. Design Assets Needed
- [ ] Bank account icon
- [ ] PayPal logo
- [ ] Stripe logo
- [ ] Credit card icons
- [ ] Status icons (checkmark, clock, warning, error)
- [ ] Empty state illustrations
- [ ] Loading spinners
- [ ] Chart icons

### B. Third-Party Dependencies
```json
{
  "dependencies": {
    "chart.js": "^4.4.0",
    "react-chartjs-2": "^5.2.0",
    "date-fns": "^2.30.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0"
  }
}
```

### C. Accessibility Testing Tools
- WAVE Browser Extension
- axe DevTools
- NVDA Screen Reader
- VoiceOver (macOS/iOS)
- Keyboard Navigation Testing

---

## Changelog

**Version 1.0.0** (2025-11-14)
- Initial payout page design specification
- Complete component library
- Responsive design guidelines
- Accessibility requirements
- Security considerations
- Performance optimization strategies

---

**Document Metadata**
- **Created:** 2025-11-14
- **Last Updated:** 2025-11-14
- **Version:** 1.0.0
- **Status:** Ready for Implementation
- **Design System:** DotsBot Design System v1.0

---

*This design specification should be used in conjunction with the main DESIGN_GUIDELINE.md and follows all established DotsBot design patterns and principles.*
