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
| Day 2 | _(Add tomorrow's topic here)_ | | | |
| Day 3 | | | | |
| Day 4 | | | | |
| Day 5 | | | | |

> 💡 **Difficulty Key:** ⭐ Beginner &nbsp;·&nbsp; ⭐⭐ Intermediate &nbsp;·&nbsp; ⭐⭐⭐ Advanced

---

### 🧠 Master Interview Question List

| # | Question | Topic | Difficulty | Studied |
|---|----------|-------|------------|---------|
| 1 | What is Playwright and how does it differ from Selenium/Cypress? | Basics | ⭐ | ✅ Day 1 |
| 2 | What are locators in Playwright? What types are available? | Locators | ⭐ | ⏳ |
| 3 | What is auto-waiting in Playwright? | Basics | ⭐ | ⏳ |
| 4 | What is the difference between `getByRole` and `getByText`? | Locators | ⭐ | ⏳ |
| 5 | What are assertions in Playwright? Difference between hard and soft assertions? | Assertions | ⭐⭐ | ⏳ |
| 6 | What is Page Object Model (POM) and why do we use it? | POM | ⭐⭐ | ⏳ |
| 7 | How do you implement POM in Playwright with TypeScript? | POM | ⭐⭐ | ⏳ |
| 8 | What are fixtures in Playwright? How do you create custom fixtures? | Fixtures | ⭐⭐ | ⏳ |
| 9 | How do you do API testing in Playwright? | API Testing | ⭐⭐ | ⏳ |
| 10 | How do you mock API responses in Playwright? | Network | ⭐⭐ | ⏳ |
| 11 | How do you handle multiple tabs and windows in Playwright? | Advanced | ⭐⭐ | ⏳ |
| 12 | How do you handle iFrames in Playwright? | Advanced | ⭐⭐ | ⏳ |
| 13 | What is the difference between `page.waitForSelector` and auto-wait? | Advanced | ⭐⭐ | ⏳ |
| 14 | How do you set up CI/CD for Playwright with GitHub Actions? | CI/CD | ⭐⭐⭐ | ⏳ |
| 15 | How do you run Playwright tests in parallel? | Advanced | ⭐⭐⭐ | ⏳ |
| 16 | What is visual testing in Playwright? | Advanced | ⭐⭐⭐ | ⏳ |
| 17 | How do you handle authentication in Playwright tests? | Advanced | ⭐⭐⭐ | ⏳ |
| 18 | What is MCP (Model Context Protocol)? | MCP & AI | ⭐⭐⭐ | ⏳ |
| 19 | How can AI be used to generate test cases? | MCP & AI | ⭐⭐⭐ | ⏳ |
| 20 | How do you debug failing tests in Playwright? | Advanced | ⭐⭐ | ⏳ |

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
| Week 1 | Setup + Basics | 0 | 1 | 1 |
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

*Last updated: February 21, 2026*