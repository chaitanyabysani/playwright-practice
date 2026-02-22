# 🎭 Playwright + TypeScript — Daily Practice Journal

> A personal learning repository to master **Playwright**, **TypeScript**, **Page Object Model**, **CI/CD**, **MCP**, and **AI integration** — built day by day for interview preparation.

---

## 👤 About This Repo

| Field | Details |
|-------|---------|
| 🎯 Goal | Master Playwright for QA automation interviews |
| 🛠️ Stack | Playwright + TypeScript + GitHub Actions |
| 📅 Start Date | February 2026 |
| 📈 Level | Beginner → Interview Ready |

---

## 📂 Quick Navigation

| Section | Description | Link |
|---------|-------------|------|
| 📅 Daily Practice Log | Day by day learning notes | [Jump to Section](#-daily-practice-log) |
| 🎯 Interview Preparation | All PDF & DOC study files | [Jump to Section](#-interview-preparation-files) |
| ⚙️ Setup Instructions | How to install and run | [Jump to Section](#️-setup-instructions) |
| 🗺️ Roadmap | Learning phases | [Jump to Section](#️-learning-roadmap) |
| 📊 Progress Tracker | Weekly progress | [Jump to Section](#-progress-tracker) |

---

## 🗺️ Learning Roadmap

| Phase | Topics | Status |
|-------|--------|--------|
| Phase 1 | Playwright Basics — locators, clicks, assertions, forms | 🔄 In Progress |
| Phase 2 | Page Object Model (POM), fixtures, API testing | ⏳ Upcoming |
| Phase 3 | CI/CD with GitHub Actions | ⏳ Upcoming |
| Phase 4 | MCP (Model Context Protocol) Integration | ⏳ Upcoming |
| Phase 5 | AI Integration — Claude API for test generation | ⏳ Upcoming |

---

## 📁 Project Structure

```
playwright-practice/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD — runs tests on every push
├── interview-prep/
│   ├── day-01-playwright-basics.pdf
│   ├── day-01-playwright-basics.docx
│   ├── day-02-locators.pdf
│   └── ...                         # Add new files here daily
├── tests/
│   ├── basics/                     # Phase 1: Core Playwright tests
│   ├── intermediate/               # Phase 2: POM & advanced features
│   ├── api/                        # API testing with Playwright
│   ├── ai-powered/                 # AI-generated & AI-assisted tests
│   └── mcp/                        # MCP integration experiments
├── pages/                          # Page Object Models
├── fixtures/                       # Custom fixtures & test data
├── utils/                          # Helper functions
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

### Clone & Install

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/playwright-practice.git

# Navigate into the folder
cd playwright-practice

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Run Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode (visual — great for beginners!)
npx playwright test --ui

# Run a specific file
npx playwright test tests/basics/login.spec.ts

# Show HTML report after test run
npx playwright show-report
```

---

## 📅 Daily Practice Log

---

### ✅ Day 1 — February 21, 2026

**🎯 Topics Covered:**
- What is Playwright and why it is used in automation testing
- Difference between Playwright, Selenium, and Cypress
- Installing Node.js, Git, and VS Code
- Installing VS Code extensions: Playwright Test, GitLens, ESLint

**🛠️ Setup Done:**
- Created GitHub repository `playwright-practice`
- Cloned repo locally using `git clone`
- Initialized Playwright with TypeScript using `npm init playwright@latest`
- Selected TypeScript, `tests/` folder, and GitHub Actions during setup
- Created `.gitignore` file

**📂 Files Created:**
- `playwright.config.ts` — main Playwright configuration
- `tests/example.spec.ts` — auto-generated sample test
- `.github/workflows/playwright.yml` — CI/CD pipeline
- `.gitignore` — ignoring node_modules, reports, .env
- `README.md` — this file!

**💡 Key Learnings:**
- `npx playwright test` runs all tests from terminal
- `npx playwright test --ui` opens a visual test runner — very helpful for beginners
- `npx playwright show-report` shows a detailed HTML report after test run
- Playwright supports Chromium, Firefox, and WebKit out of the box
- Playwright differs from Selenium (no manual waits) and Cypress (supports multiple tabs & all browsers)

**📌 Git Commands Used Today:**
```bash
git clone https://github.com/YOUR_USERNAME/playwright-practice.git
git add .
git commit -m "feat: initial Playwright TypeScript setup"
git push origin main
```

**📖 Interview Questions Studied:**

| # | Question | Difficulty | File |
|---|----------|------------|------|
| 1 | What is Playwright and how does it differ from Selenium/Cypress? | ⭐ Beginner | [📄 PDF](interview-prep/day-01-playwright-basics.pdf) · [📝 DOC](interview-prep/day-01-playwright-basics.docx) |

---

### ✅ Day 2 — February 22, 2026

**🎯 Topics Covered:**
- What is Allure Reports and why we use it in Playwright
- Difference between Playwright default report and Allure report
- Installing and configuring Allure in Playwright + TypeScript project
- Allure test statuses — Passed, Failed, Broken, Skipped, Unknown
- Difference between Failed and Broken status in Allure
- Allure features — Description, Severity, Epic, Feature, Story, Owner, Tags
- Allure Steps — breaking tests into clear readable steps
- Allure Screenshots — attaching screenshots manually to the report
- Allure Parameters — showing test data used in data-driven tests
- Allure Attachments — attaching text, JSON, HTML content
- Allure Links — linking tests to Jira issues and TestRail test cases
- Using Allure inside beforeEach and afterEach hooks
- Common import errors and fixes

**🛠️ What I Did:**
- Installed `allure-playwright`, `allure-commandline`, and `allure-js-commons` packages
- Configured Allure reporter in `playwright.config.ts`
- Created 9 separate practice scripts covering each Allure feature
- Fixed deprecated import error — switched from `allure-playwright` to `allure-js-commons`
- Fixed undefined error — switched from `import { allure }` to `import * as allure`
- Generated and opened Allure HTML report successfully
- Created Allure Reports Interview Q&A document

**📂 Files Created:**
- `tests/allure-report-basics/01_basic_description_severity.spec.ts`
- `tests/allure-report-basics/02_allure_steps.spec.ts`
- `tests/allure-report-basics/03_screenshots_attachment.spec.ts`
- `tests/allure-report-basics/04_epic_feature_story.spec.ts`
- `tests/allure-report-basics/05_allure_parameters.spec.ts`
- `tests/allure-report-basics/06_allure_attachments.spec.ts`
- `tests/allure-report-basics/07_allure_with_hooks.spec.ts`
- `tests/allure-report-basics/08_allure_links.spec.ts`
- `tests/allure-report-basics/09_complete_example.spec.ts`
- `interview-prep/day-02-allure-reports.docx`

**💡 Key Learnings:**
- Allure requires **Java** to be installed on the machine (`java -version` to check)
- `allure-results/` folder is created automatically after running tests (raw data)
- `allure-report/` folder is created after running the generate command (HTML report)
- `--clean` flag in generate command deletes old report before creating new one
- Always use `import * as allure from 'allure-js-commons'` — NOT `import { allure }`
- `allure.step()` makes debugging very easy — shows exactly which step failed
- `allure.parameter()` is very useful in data-driven tests to show what data was used
- Epic → Feature → Story is like a folder structure to organize hundreds of tests

**⚠️ Errors Faced & Fixed:**

| Error | Cause | Fix |
|-------|-------|-----|
| `'allure' is deprecated` | Using old import from `allure-playwright` | `import * as allure from 'allure-js-commons'` |
| `Cannot read properties of undefined (reading 'description')` | Named import `{ allure }` returns undefined | Use `import * as allure from 'allure-js-commons'` |
| `npm error 404 allure-commandLine` | Capital L in package name | Use lowercase: `allure-commandline` |

**📌 Git Commands Used Today:**
```bash
git pull origin main
git add tests/allure-report-basics/
git add interview-prep/
git add README.md
git commit -m "docs: add Day 2 Allure Reports practice scripts and interview prep"
git push origin main
```

**📖 Interview Questions Studied:**

| # | Question | Difficulty | File |
|---|----------|------------|------|
| 1 | What is Allure Report? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 2 | Why do we use Allure Reports in Playwright? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 3 | What are the different status types in Allure? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 4 | What is the difference between Failed and Broken in Allure? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 5 | What commands do you use for Allure Reports? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 6 | What does --clean mean in the allure generate command? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 7 | What prerequisite is needed to use Allure? | ⭐ Beginner | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 8 | How do you configure Allure in playwright.config.ts? | ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 9 | How do you add steps in Allure Report? | ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 10 | What are Allure Severities? | ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 11 | How do you categorize tests using Epic, Feature, Story? | ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) |
| 12 | How do you add Allure to a CI/CD pipeline? | ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) |

---

<!--
╔══════════════════════════════════════════════════════════════╗
║         DAILY LOG TEMPLATE — Copy & paste for each day       ║
╚══════════════════════════════════════════════════════════════╝

### ✅ Day X — DATE

**🎯 Topics Covered:**
-

**🛠️ What I Did:**
-

**📂 Files Created / Modified:**
-

**💡 Key Learnings:**
-

**📌 Git Commands Used:**
```bash
git pull origin main
git add interview-prep/
git add README.md
git commit -m "docs: add Day X topic interview prep"
git push origin main
```

**📖 Interview Questions Studied:**
| # | Question | Difficulty | File |
|---|----------|------------|------|
| 1 | Question here | ⭐ Beginner | [📄 PDF](interview-prep/day-XX-topic.pdf) · [📝 DOC](interview-prep/day-XX-topic.docx) |

**❓ Doubts / Questions for Next Day:**
-

-->

---

## 🎯 Interview Preparation Files

> 📌 All study materials are stored in the `interview-prep/` folder.
> New files are added every day. Click the links below to open them directly.

---

### 📊 Topic Coverage Status

| Topic | Status |
|-------|--------|
| Playwright Basics | ✅ Done |
| Allure Reports | ✅ Done |
| Locators & Selectors | ⏳ Upcoming |
| Assertions | ⏳ Upcoming |
| Page Object Model | ⏳ Upcoming |
| Fixtures | ⏳ Upcoming |
| API Testing | ⏳ Upcoming |
| Network Interception | ⏳ Upcoming |
| CI/CD with GitHub Actions | ⏳ Upcoming |
| Advanced Playwright | ⏳ Upcoming |
| MCP & AI Integration | ⏳ Upcoming |

---

### 📁 All Interview Prep Files

| Day | Topic | Difficulty | Files | Date Added |
|-----|-------|------------|-------|------------|
| Day 1 | Playwright Basics — What is Playwright, vs Selenium vs Cypress | ⭐ Beginner | [📄 PDF](interview-prep/day-01-playwright-basics.pdf) · [📝 DOC](interview-prep/day-01-playwright-basics.docx) | Feb 21, 2026 |
| Day 2 | Allure Reports — Setup, Features, Steps, Screenshots, Parameters, Links | ⭐ Beginner · ⭐⭐ Intermediate | [📝 DOC](interview-prep/day-02-allure-reports.docx) | Feb 22, 2026 |
| Day 3 | | | | |
| Day 4 | | | | |
| Day 5 | | | | |

> 💡 **Difficulty Key:** ⭐ Beginner &nbsp;·&nbsp; ⭐⭐ Intermediate &nbsp;·&nbsp; ⭐⭐⭐ Advanced

---

### 🧠 Master Interview Question List

| # | Question | Topic | Difficulty | Studied |
|---|----------|-------|------------|---------|
| 1 | What is Playwright and how does it differ from Selenium/Cypress? | Basics | ⭐ | ✅ Day 1 |
| 2 | What is Allure Report and why do we use it? | Allure Reports | ⭐ | ✅ Day 2 |
| 3 | What are the different status types in Allure? | Allure Reports | ⭐ | ✅ Day 2 |
| 4 | What is the difference between Failed and Broken in Allure? | Allure Reports | ⭐ | ✅ Day 2 |
| 5 | What commands do you use for Allure Reports? | Allure Reports | ⭐ | ✅ Day 2 |
| 6 | How do you configure Allure in playwright.config.ts? | Allure Reports | ⭐⭐ | ✅ Day 2 |
| 7 | How do you add steps in Allure Report? | Allure Reports | ⭐⭐ | ✅ Day 2 |
| 8 | How do you categorize tests using Epic, Feature, Story? | Allure Reports | ⭐⭐ | ✅ Day 2 |
| 9 | How do you add Allure to a CI/CD pipeline? | Allure Reports | ⭐⭐ | ✅ Day 2 |
| 10 | What are locators in Playwright? What types are available? | Locators | ⭐ | ⏳ |
| 11 | What is auto-waiting in Playwright? | Basics | ⭐ | ⏳ |
| 12 | What is the difference between `getByRole` and `getByText`? | Locators | ⭐ | ⏳ |
| 13 | What are assertions in Playwright? Difference between hard and soft assertions? | Assertions | ⭐⭐ | ⏳ |
| 14 | What is Page Object Model (POM) and why do we use it? | POM | ⭐⭐ | ⏳ |
| 15 | How do you implement POM in Playwright with TypeScript? | POM | ⭐⭐ | ⏳ |
| 16 | What are fixtures in Playwright? How do you create custom fixtures? | Fixtures | ⭐⭐ | ⏳ |
| 17 | How do you do API testing in Playwright? | API Testing | ⭐⭐ | ⏳ |
| 18 | How do you mock API responses in Playwright? | Network | ⭐⭐ | ⏳ |
| 19 | How do you handle multiple tabs and windows in Playwright? | Advanced | ⭐⭐ | ⏳ |
| 20 | How do you handle iFrames in Playwright? | Advanced | ⭐⭐ | ⏳ |
| 21 | What is the difference between `page.waitForSelector` and auto-wait? | Advanced | ⭐⭐ | ⏳ |
| 22 | How do you set up CI/CD for Playwright with GitHub Actions? | CI/CD | ⭐⭐⭐ | ⏳ |
| 23 | How do you run Playwright tests in parallel? | Advanced | ⭐⭐⭐ | ⏳ |
| 24 | What is visual testing in Playwright? | Advanced | ⭐⭐⭐ | ⏳ |
| 25 | How do you handle authentication in Playwright tests? | Advanced | ⭐⭐⭐ | ⏳ |
| 26 | What is MCP (Model Context Protocol)? | MCP & AI | ⭐⭐⭐ | ⏳ |
| 27 | How can AI be used to generate test cases? | MCP & AI | ⭐⭐⭐ | ⏳ |
| 28 | How do you debug failing tests in Playwright? | Advanced | ⭐⭐ | ⏳ |

---

## 📌 Daily Git Commit Routine

Every day after your practice, follow these steps:

```bash
# Step 1: Pull latest (always do this first!)
git pull origin main

# Step 2: Drop your PDF/DOC into interview-prep/ folder, then stage it
git add interview-prep/

# Step 3: Stage README updates
git add README.md

# Step 4: Check what you are committing
git status

# Step 5: Commit with a meaningful message
git commit -m "docs: add Day 2 locators interview prep PDF"

# Step 6: Push to GitHub
git push origin main
```

### ✍️ Commit Message Guide

| Prefix | When to Use | Example |
|--------|------------|---------|
| `feat:` | New test or feature | `feat: add homepage navigation test` |
| `fix:` | Fix broken test or locator | `fix: update broken login button locator` |
| `refactor:` | Restructure without changing behavior | `refactor: move selectors to page object` |
| `chore:` | Config, dependencies, setup | `chore: update playwright config timeout` |
| `docs:` | README or interview prep files | `docs: add Day 2 locators PDF` |
| `test:` | Add or update test data/fixtures | `test: add test data for checkout flow` |

---

## 🤖 CI/CD Pipeline

Every time you push code to the `main` branch, GitHub Actions automatically:
1. Installs Node.js and dependencies
2. Installs Playwright browsers
3. Runs all tests
4. Uploads the HTML report as a downloadable artifact

Check results under the **Actions** tab in your GitHub repo.

---

## 📊 Progress Tracker

| Week | Focus | Tests Written | Interview Files | Commits |
|------|-------|:------------:|:--------------:|:-------:|
| Week 1 | Setup + Basics + Allure Reports | 9 | 2 | 2 |
| Week 2 | Locators + Assertions | - | - | - |
| Week 3 | POM + Fixtures | - | - | - |
| Week 4 | API Testing | - | - | - |
| Week 5 | CI/CD | - | - | - |
| Week 6 | MCP + AI | - | - | - |

---

## 📚 Useful Resources

| Resource | Link |
|----------|------|
| Playwright Official Docs | https://playwright.dev/ |
| Playwright GitHub | https://github.com/microsoft/playwright |
| TypeScript Handbook | https://www.typescriptlang.org/docs/ |
| GitHub Actions Docs | https://docs.github.com/en/actions |
| Playwright MCP | https://github.com/microsoft/playwright-mcp |

---

*Last updated: February 22, 2026*