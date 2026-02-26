# 🎭 Playwright + TypeScript — Daily Practice Journal

> A personal learning repository to master **Playwright**, **TypeScript**, **Page Object Model**, **CI/CD**, **MCP**, and **AI integration** — built day by day for interview preparation.

---

## 👤 About This Repo

| Field | Details |
|-------|---------|
| 🎯 Goal | Master Playwright for QA automation interviews |
| 🛠️ Stack | Playwright + TypeScript + GitHub Actions |
| 📈 Level | Beginner → Interview Ready |

---

## 🗺️ Learning Roadmap

| Phase | Topics |
|-------|--------|
| Phase 1 | Playwright Basics — locators, clicks, assertions, forms 
| Phase 2 | Page Object Model (POM), fixtures, API testing 
| Phase 3 | CI/CD with GitHub Actions 
| Phase 4 | MCP (Model Context Protocol) Integration 
| Phase 5 | AI Integration — Claude API for test generation

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
### ✅ Day 3 — February 23, 2026

**🎯 Topics Covered:**
- Page Objects — creating reusable page classes to encapsulate locators and actions
- Page Object Model (POM) — structuring tests with page objects for better maintainability
- Page Object Manager — centralizing page object instances for easy access in tests

**🛠️ What I Did:**
- Created `pageobjects/` folder and added `HomePage.ts`, `ElementsPage.ts` and `PageObjectManager.ts` as examples
- baseURL is set in `playwright.config.ts` to avoid hardcoding URLs in tests

**📂 Files Created:**
- `pageobjects/HomePage.ts`
- `pageobjects/ElementsPage.ts`
- `pageobjects/PageObjectManager.ts`

### ✅ Day 4 — February 25, 2026

**🎯 Topics Covered:**
- Page Objects — creating reusable page classes to encapsulate locators and actions
- Page Object Model (POM) — structuring tests with page objects for better maintainability
- Page Object Manager — centralizing page object instances for easy access in tests

**🛠️ What I Did:**
- Created `TextBoxPage.ts` in the `pageobjects/` folder
- Updated `PageObjectManager.ts` to include `TextBoxPage` and added a getter method for it
- Created a test script to fill the text box form using data from a JSON file and verify the output
- Fixed the issue of elements not being visible by adding an explicit wait for the output card to be visible before making assertions
- Updated assertions to check the visibility of the output card and the correctness of the output text
- Updated the test to use the page object methods for filling the form and submitting it, instead of directly accessing the page object properties in the test
- Updated the test to navigate to the Text Box page using the page object methods in the `beforeEach` hook, instead of directly accessing the page object properties in the test
- Updated the test to use the `poManager` instance to access the page objects and their methods, instead of creating separate instances for each page object in the test
- Updated the test to use the `poManager` instance to navigate through the pages and perform actions, instead of directly accessing the page object properties in the test
- updated the tsconfig.json file to include "resolveJsonModule": true to allow importing JSON files directly into TypeScript tests
- Created a JSON file with test data for the text box form and imported it into the test script to fill the form dynamically using the data from the JSON file, instead of hardcoding the test data in the test script


**📂 Files Created:**
- `pageobjects/TextBoxPage.ts`
- `tests/basic-scripts/text-box/ImportJSONintoPlaywrightTypeScripttests.spec.ts`
- `utils/textBoxTestData.json`

### ✅ Day 5 — February 26, 2026

**🎯 Topics Covered:**
- claude.ai — what it is and how it can help in test automation
- Using Claude to generate test scripts based on requirements

**🛠️ What I Did:**
- added claude.md file with commands, architecture, and test structure for Claude to understand the project and generate tests based on requirements

**📂 Files Created:**
- `CLAUDE.md`

# Claude Code Integration in VS Code

A step-by-step guide to integrating Claude Code into Visual Studio Code for AI-powered development.

---

## Prerequisites

Before getting started, make sure you have the following:

- **VS Code** version `1.98.0` or newer
- An **Anthropic account** with a Claude Pro, Max, Team, or Enterprise subscription *(or pay-as-you-go API credits)*
- **Node.js** installed on your machine

---

## Step 1: Install the Extension

Open the Extensions view in VS Code:

| Platform | Shortcut |
|----------|----------|
| Windows / Linux | `Ctrl+Shift+X` |
| Mac | `Cmd+Shift+X` |

Search for **"Claude Code"** and install the official extension published by **Anthropic**.

> ⚠️ **Important:** Make sure you install the extension by **Anthropic** — there are unofficial extensions with similar names in the marketplace.

Alternatively, install directly from the VS Code Marketplace:  
🔗 [Claude Code – VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)

---

## Step 2: Sign In

1. After installation, click the **Spark icon (⚡)** in the VS Code Activity Bar (sidebar)
2. On first launch, you'll be prompted to **sign in with your Anthropic account**
3. Complete authentication in the browser and return to VS Code

---

## Step 3: Start Using Claude Code

Open a new Claude conversation:

| Platform | Shortcut |
|----------|----------|
| Windows / Linux | `Ctrl+N` |
| Mac | `Cmd+N` |

Or use the **integrated terminal** to start a CLI session:

```bash
# Open VS Code integrated terminal
# Windows/Linux: Ctrl+`
# Mac: Cmd+`

claude
```

---

## Step 4: Key Features

### 🔍 Inline Diffs
Claude shows proposed code changes as inline diffs — you can **accept or reject** each change directly in the editor without leaving the file.

### 📋 Plan Mode
Before Claude makes any changes, it presents a **plan for your review**. You can edit or approve the plan before execution begins.

### 📁 @-mention Files
Reference specific files or line ranges directly in your prompts:

```
@src/tests/login.spec.ts#L10-45 refactor this test using the Page Object Model
```

### 🕓 Conversation History
All sessions are saved and accessible from the sidebar — scroll back through previous problem-solving sessions without hunting through terminal logs.

### 💾 Checkpoints
Claude automatically saves your **code state before each change**. You can rewind to any previous state:

- Hover over any message → click the **Rewind** button
- Choose from:
  - **Fork conversation from here** – branch the conversation, keep code changes
  - **Rewind code to here** – revert file changes, keep conversation history
  - **Fork conversation and rewind code** – branch conversation AND revert code

### 🔌 MCP (Model Context Protocol) Support
Connect Claude to external tools, databases, and APIs using MCP servers.

Configure via terminal:
```bash
# Inside VS Code integrated terminal
claude mcp add <server-name>
```

---

## Step 5: CLI Integration (Optional)

For advanced workflows, use Claude Code CLI from the VS Code integrated terminal:

```bash
# Start a new Claude Code session
claude

# Resume a previous conversation interactively
claude --resume

# Connect an external terminal to VS Code
/ide
```

> **Tip:** The extension and CLI share the same conversation history, so you can seamlessly switch between them.

---

## Step 6: Terminal Setup (Optional)

For multi-line prompt support using `Shift+Enter`, run the following inside a Claude Code session:

```bash
/terminal-setup
```

This auto-configures the keybinding — no manual editing required.

---

## Useful Keyboard Shortcuts

| Action | Windows / Linux | Mac |
|--------|----------------|-----|
| Open Extensions view | `Ctrl+Shift+X` | `Cmd+Shift+X` |
| Open integrated terminal | `Ctrl+`` ` | `Cmd+`` ` |
| New Claude conversation | `Ctrl+N` | `Cmd+N` |
| Insert file reference | `Alt+Ctrl+K` | `Cmd+Option+K` |

---

## Playwright & TypeScript Tips

Since Claude Code has full context of your codebase, here are some useful prompts for test automation workflows:

```bash
# Generate a Playwright test for a login flow
"Write a Playwright TypeScript test for the login page at @src/pages/LoginPage.ts"

# Debug a failing test
"Fix the failing test at @src/tests/checkout.spec.ts — here's the error output: @terminal:test-output"

# Refactor to Page Object Model
"Refactor @src/tests/search.spec.ts to use the Page Object Model pattern"

# Generate test data
"Create a data-driven test using @src/fixtures/users.json for the registration form"
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension not appearing | Ensure you installed the **Anthropic** extension, not a third-party one |
| Command not found | Restart VS Code after installation |
| Sidebar disappears on restart | Run command palette → `Claude Code: Open in sidebar` |
| VS Code version too old | Upgrade to version `1.98.0` or newer |

---

## Resources

- 📖 [Official Claude Code Docs](https://code.claude.com/docs/en/vs-code)
- 🛒 [VS Code Marketplace – Claude Code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
- 💬 [Anthropic Support](https://support.claude.com)
- 🔧 [Prompting Best Practices](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)

---

> Made with ❤️ using [Claude Code](https://claude.ai/code) by Anthropic


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

## 📚 Useful Resources

| Resource | Link |
|----------|------|
| Playwright Official Docs | https://playwright.dev/ |
| Playwright GitHub | https://github.com/microsoft/playwright |
| TypeScript Handbook | https://www.typescriptlang.org/docs/ |
| GitHub Actions Docs | https://docs.github.com/en/actions |
| Playwright MCP | https://github.com/microsoft/playwright-mcp |

---
