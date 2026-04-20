# AAM Playwright BDD

Automation test untuk GPOS memakai `Playwright + playwright-bdd + TypeScript` + POM + Allure + cicd github.

## Struktur Repo

```text
AAM/
├─ features/              # file .feature
├─ steps/                 # binding step definition
├─ src/pages/             # page object
├─ src/utils/             # util timeout
├─ playwright.config.ts   # config Playwright + BDD
├─ package.json           # dependency dan script
└─ .github/workflows/     # CI GitHub Actions
```

Yang masih perlu disiapkan setelah `git clone` atau `git pull`:

1. Install dependency Node.js.
2. Install browser Playwright.
3. Pastikan `.env` lokal ada kalau mau override `BASE_URL` atau `HEADLESS`.

Catatan:
- Repo ini tetap punya fallback `baseURL` default di [playwright.config.ts](./playwright.config.ts), jadi tanpa `.env` pun test masih bisa jalan ke `https://mini3.gpos-efarmasi.com`.
- Login credential saat ini ditulis langsung di `features/login/login.feature`.
- Folder `node_modules/`, `.features-gen/`, `allure-results/`, dan `test-results/` memang tidak ikut ke Git, jadi harus dibangun lagi di mesin yang baru.

## Prerequisite

- Node.js 20 atau lebih baru
- npm
- Browser Playwright
- Java, hanya jika ingin buka/generate Allure report lokal

## How To Run

Install dependency:

```bash
npm ci
```

Install browser Playwright:

```bash
npx playwright install --with-deps chromium firefox
```

Run semua test:

```bash
npx bddgen
npx playwright test
```

Run hanya tag `@login`:

```bash
npx bddgen --tags "@login"
npx playwright test
```

Run hanya tag `@e2e`:

```bash
npx bddgen --tags "@e2e"
npx playwright test --project=chromium --workers=1
```

Run satu scenario tertentu:

```bash
npx bddgen --tags "@e2e"
npx playwright test --project=chromium --workers=1 --grep "TC-POS-012"
```

## Environment

Optional `.env` lokal:

```env
BASE_URL=https://mini3.gpos-efarmasi.com
HEADLESS=true
```

Kalau `.env` tidak ada:
- `BASE_URL` fallback ke default dari config
- `HEADLESS` default ke `true`, kecuali diisi `false`

## Allure Report

Generate report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Buka report:

```bash
npx allure open allure-report
```

## GitHub Actions

Workflow CI ada di `.github/workflows/playwright.yml`.

Di GitHub Actions, pipeline:
- install dependency
- install browser Playwright
- generate file BDD
- run Playwright test
- upload dan publish Allure report

Jadi untuk CI GitHub, repo ini memang sudah disiapkan supaya bisa running otomatis saat `push`, `pull_request`, schedule, atau manual dispatch.
