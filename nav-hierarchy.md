# Project Keystone — Left Nav Hierarchy

Current sidebar structure (source of truth: `scripts/nav.js`).

**Totals:** 4 sections · 3 groups · 4 top-level items · 23 screens

---

## 1 · Identity Monitoring

- 1.1 **Home** `empty` — `s1.html`
- 1.2 **Home** — `s1b.html`
- 1.3 **Financial Accounts** — `s8.html`

---

## 2 · Security Snapshot

- 2.1 **Solo** `empty` — `s1ra.html`
- 2.2 **Solo** — `s1rb.html`
- 2.3 **Family** `empty` — `s1ra-family.html`
- 2.4 **Family** — `s1rb-family.html`
- 2.5 **Mom-in-law** — `s1rb-teresa.html`
- 2.6 **Kid** `email` — `s1rb-camila-email.html`

---

## 3 · Activity and Alerts

- 3.1 **Activity Feed** — `s6.html`

### Dark Web Alert (6)

- 3.2 **Dark Web Alert · In-app** `auto` — `s7.html`
- 3.3 **Dark Web Alert · Email** `auto` — `s7-email.html`
- 3.4 **Dark Web Alert · Lock** `auto` — `s7-lock.html`
- 3.5 **Dark Web Alert · In-app** `manual` — `s7b.html`
- 3.6 **Dark Web Alert · Email** `manual` — `s7b-email.html`
- 3.7 **Dark Web Alert · Lock** `manual` — `s7b-lock.html`

### Financial Alert (4)

- 3.8 **Financial Alert · 1 of 4** `email` — `s8-email.html`
- 3.9 **Financial Alert · 2 of 4** — `s8-review.html`
- 3.10 **Financial Alert · 3 of 4** — `s8-action.html` *(placeholder)*
- 3.11 **Financial Alert · 4 of 4** — `s8-resolved.html` *(placeholder)*

---

## 4 · Masked Identity

- 4.1 **Masked Identity Home** — `s9-concept.html`

### Virtual Card (3)

- 4.2 **Payment Dropdown** — `s10-prompt.html`
- 4.3 **Extension Popover** — `s10b-modal.html`
- 4.4 **Card Populated** — `s10c-filled.html`

---

### Legend

- `empty` — grey pill, marks empty-state variants
- `email` — light blue pill, marks email-format screens
- `auto` — grey pill, "automatically handled" alert variant
- `manual` — grey pill, "manually handled" alert variant
- `1 of N · 2 of N …` — multi-screen flows
- Numbers after a group label = screens in that group
