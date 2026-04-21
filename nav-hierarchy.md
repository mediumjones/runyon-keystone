# Project Keystone — Left Nav Hierarchy

Current sidebar structure (source of truth: `scripts/nav.js`).

**Totals:** 4 sections · 3 groups · 4 top-level items · 23 screens

---

## 1 · Identity Monitoring

- 1.1 **Home** `new user` — `home-new-user.html`
- 1.2 **Home** — `home.html`
- 1.3 **Financial Accounts** — `financial-accounts.html`

---

## 2 · Security Snapshot

- 2.1 **Solo** `new user` — `solo-new-user.html`
- 2.2 **Solo** — `solo.html`
- 2.3 **Family** `new user` — `family-new-user.html`
- 2.4 **Family** — `family.html`
- 2.5 **Mom-in-law** — `mom-in-law.html`
- 2.6 **Kid** `email` — `kid-email.html`

---

## 3 · Activity and Alerts

- 3.1 **Activity Feed** — `activity-feed.html`

### Dark Web Alert (6)

- 3.2 **SSN Alert Auto** `in app` — `ssn-alert-auto-in-app.html`
- 3.3 **SSN Alert Auto** `email` — `ssn-alert-auto-email.html`
- 3.4 **SSN Alert Auto** `lockscreen` — `ssn-alert-auto-lockscreen.html`
- 3.5 **SSN Alert Manual** `in app` — `ssn-alert-manual-in-app.html`
- 3.6 **SSN Alert Manual** `email` — `ssn-alert-manual-email.html`
- 3.7 **SSN Alert Manual** `lockscreen` — `ssn-alert-manual-lockscreen.html`

### Financial Alert (4)

- 3.8 **Financial Alert · 1 of 4** `email` — `financial-alert-1-of-4.html`
- 3.9 **Financial Alert · 2 of 4** — `financial-alert-2-of-4.html`
- 3.10 **Financial Alert · 3 of 4** — `financial-alert-3-of-4.html` *(placeholder)*
- 3.11 **Financial Alert · 4 of 4** — `financial-alert-4-of-4.html` *(placeholder)*

---

## 4 · Masked Identity

- 4.1 **Masked Identity Home** — `masked-identity-home.html`

### Virtual Card (3)

- 4.2 **Payment Dropdown** — `payment-dropdown.html`
- 4.3 **Extension Popover** — `extension-popover.html`
- 4.4 **Card Populated** — `card-populated.html`

---

### Legend

- `new user` — grey pill, marks new-user / empty-state variants
- `email` — light blue pill, marks email-format screens
- `in app` — dark grey filled pill, alert delivery surface
- `lockscreen` — dark blue filled pill, alert delivery surface
- Items may carry multiple pills when relevant
- `1 of N · 2 of N …` — multi-screen flows
- Numbers after a group label = screens in that group
