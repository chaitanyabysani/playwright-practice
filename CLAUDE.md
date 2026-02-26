# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/basic-scripts/text-box/ImportJSONintoPlaywrightTypeScripttests.spec.ts

# Run tests matching a pattern
npx playwright test --grep "Text Box"

# Run with UI mode (visual runner)
npx playwright test --ui

# Show HTML report
npx playwright show-report

# Generate and open Allure report (requires Java installed)
npm run allure:report
```

## Architecture

This is a Playwright + TypeScript test automation project targeting [demoqa.com](https://demoqa.com) (`baseURL` set in `playwright.config.ts`).

### Page Object Model (POM)

All page objects live in `pageobjects/`. The pattern is:

- Each page class holds locators as `readonly` fields initialized in the constructor, plus async action methods.
- `POManager` (`pageobjects/POManager.ts`) is the single entry point — instantiate it with a `page` object and access all page objects via getters (`getHomePage()`, `getElementsPage()`, `getTextBoxPage()`).
- Tests import only `POManager`, never individual page classes.

```
pageobjects/
  POManager.ts       ← central access point, instantiates all pages
  HomePage.ts        ← navigation to top-level sections
  ElementsPage.ts    ← sidebar navigation within Elements section
  TextBoxPage.ts     ← locators + fillTextBoxForm() / submitForm() actions
```

### Test Data

JSON test data lives in `utils/` and is imported directly into test files using TypeScript's `resolveJsonModule`. Access data by index: `testData[0]`.

### Test Structure

```
tests/
  allure-report-basics/   ← Allure reporter feature demos (01–09)
  basic-scripts/
    text-box/             ← POM-based tests using JSON test data
  example.spec.ts         ← auto-generated Playwright sample
```

### Reporters

Three reporters are active simultaneously (`playwright.config.ts`):
- `html` → `playwright-report/` (view with `npx playwright show-report`)
- `line` → terminal output
- `allure-playwright` → `allure-results/` (generate report with `npm run allure:report`)

### Configuration Highlights

- `browserName: 'chromium'`, `headless: true`
- `screenshot: 'on'`, `video: 'on'`, `trace: 'on'` — all captured for every test
- `timeout: 30000ms` per test, `expect timeout: 5000ms`
- `retries: 0`

### Allure Import Convention

Always import Allure as:
```ts
import * as allure from 'allure-js-commons';
```
Do **not** use `import { allure } from 'allure-playwright'` — it is deprecated and returns `undefined`.

### CI/CD

GitHub Actions (`.github/workflows/playwright.yml`) runs on every push/PR to `main`. The `playwright-report/` folder is uploaded as an artifact (30-day retention).
