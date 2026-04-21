# Project Keystone — Left Nav Hierarchy

Current sidebar structure (source of truth: `scripts/nav.js`).

**Totals:** 5 sections · 3 groups · 5 top-level items · 25 screens

---

## 1 · Identity Monitoring

- 1.1 **Home** `new user` — `home-new-user.html`
- 1.2 **Home** `returning` — `home.html`
- 1.3 **Financial Accounts** `returning` — `financial-accounts.html`

---

## 2 · Security Snapshot

- 2.1 **Solo** `new user` — `solo-new-user.html`
- 2.2 **Solo** `returning` — `solo.html`
- 2.3 **Family** `new user` — `family-new-user.html`
- 2.4 **Family** `returning` — `family.html`
- 2.5 **Mom-in-law** — `mom-in-law.html`
- 2.6 **Kid** `email` — `kid-email.html`

---

## 3 · Activity and Alerts

- 3.1 **Activity Feed** — `activity-feed.html`

### Dark Web Alert (6)

- 3.2 **SSN Alert Manual** `in app` — `ssn-alert-auto-in-app.html`
- 3.3 **SSN Alert Manual** `email` — `ssn-alert-auto-email.html`
- 3.4 **SSN Alert Manual** `lockscreen` — `ssn-alert-auto-lockscreen.html`
- 3.5 **SSN Alert Auto** `in app` — `ssn-alert-manual-in-app.html`
- 3.6 **SSN Alert Auto** `email` — `ssn-alert-manual-email.html`
- 3.7 **SSN Alert Auto** `lockscreen` — `ssn-alert-manual-lockscreen.html`

### Financial Alert (4)

- 3.8 **Financial Alert · 1 of 4** `email` — `financial-alert-1-of-4.html`
- 3.9 **Financial Alert · 2 of 4** — `financial-alert-2-of-4.html`
- 3.10 **Financial Alert · 3 of 4** — `financial-alert-3-of-4.html` *(placeholder)*
- 3.11 **Financial Alert · 4 of 4** — `financial-alert-4-of-4.html` *(placeholder)*

---

## 4 · Keystone Agents

- 4.1 **Onboarding** `new user` — `keystone-agents-onboarding.html`
- 4.2 **Populated** `returning` — `keystone-agents-populated.html`

---

## 5 · Virtual Card

- 5.1 **Virtual Card Explainer** — `masked-identity-home.html`
- 5.2 **Payment Dropdown** — `payment-dropdown.html`
- 5.3 **Extension Popover** — `extension-popover.html`
- 5.4 **Card Populated** — `card-populated.html`

---

### Legend

- `new user` — grey pill, marks new-user / empty-state variants
- `returning` — soft-green pill, marks populated / returning-user variants
- `email` — light blue pill, marks email-format screens
- `in app` — dark grey filled pill, alert delivery surface
- `lockscreen` — dark blue filled pill, alert delivery surface
- Items may carry multiple pills when relevant
- `1 of N · 2 of N …` — multi-screen flows
- Numbers after a group label = screens in that group
