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
│       └── playwright.yml      # CI/CD — runs tests on every push
├── tests/
│   ├── basics/                 # Phase 1: Core Playwright tests
│   ├── intermediate/           # Phase 2: POM & advanced features
│   ├── api/                    # API testing with Playwright
│   ├── ai-powered/             # AI-generated & AI-assisted tests
│   └── mcp/                    # MCP integration experiments
├── pages/                      # Page Object Models
├── fixtures/                   # Custom fixtures & test data
├── utils/                      # Helper functions
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

**📌 Git Commands Used Today:**
```bash
git clone https://github.com/YOUR_USERNAME/playwright-practice.git
git add .
git commit -m "feat: initial Playwright TypeScript setup"
git push origin main
```

**🔗 Resources Used:**
- [Playwright Official Docs](https://playwright.dev/)
- [Playwright VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

---

<!-- 
TEMPLATE — Copy and paste this block for each new day:

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

```

**❓ Doubts / Questions for Next Day:**
- 

-->

---

## 📌 Daily Git Commit Routine

Every day, follow these steps after your practice:

```bash
# Step 1: Pull latest changes (always do this first!)
git pull origin main

# Step 2: Check what you changed
git status

# Step 3: Stage all changes
git add .

# Step 4: Commit with a meaningful message
git commit -m "feat: add login page test with POM"

# Step 5: Push to GitHub
git push origin main
```

### ✍️ Commit Message Guide

| Prefix | When to Use | Example |
|--------|------------|---------|
| `feat:` | New test or feature | `feat: add homepage navigation test` |
| `fix:` | Fix broken test or locator | `fix: update broken login button locator` |
| `refactor:` | Restructure without changing behavior | `refactor: move selectors to page object` |
| `chore:` | Config, dependencies, setup | `chore: update playwright config timeout` |
| `docs:` | README or comments update | `docs: add Day 2 notes to README` |
| `test:` | Add or update test data/fixtures | `test: add test data for checkout flow` |

---

## 🤖 CI/CD Pipeline

Every time you push code to the `main` branch, GitHub Actions automatically:
1. Installs Node.js and dependencies
2. Installs Playwright browsers
3. Runs all tests
4. Uploads HTML report as an artifact

You can see the results under the **Actions** tab in your GitHub repo.

---

## 🧠 Interview Preparation Topics

- [ ] What is Playwright and how does it differ from Selenium/Cypress?
- [ ] What is Page Object Model (POM) and why use it?
- [ ] How do you handle dynamic elements in Playwright?
- [ ] What are fixtures in Playwright?
- [ ] How do you do API testing with Playwright?
- [ ] How does CI/CD work with Playwright and GitHub Actions?
- [ ] What is visual testing and how to do it in Playwright?
- [ ] How to handle authentication in Playwright tests?
- [ ] What is MCP (Model Context Protocol)?
- [ ] How can AI be used to generate or improve test cases?

---

## 📚 Useful Resources

| Resource | Link |
|----------|------|
| Playwright Docs | https://playwright.dev/ |
| Playwright GitHub | https://github.com/microsoft/playwright |
| TypeScript Handbook | https://www.typescriptlang.org/docs/ |
| GitHub Actions Docs | https://docs.github.com/en/actions |
| Playwright MCP | https://github.com/microsoft/playwright-mcp |

---

## 📊 Progress Tracker

| Week | Focus | Tests Written | Commits |
|------|-------|--------------|---------|
| Week 1 | Setup + Basics | 0 | 1 |
| Week 2 | Locators + Assertions | - | - |
| Week 3 | POM + Fixtures | - | - |
| Week 4 | API Testing | - | - |
| Week 5 | CI/CD | - | - |
| Week 6 | MCP + AI | - | - |

---

*Last updated: February 21, 2026*