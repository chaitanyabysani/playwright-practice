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

### ✅ Day 1 

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

### ✅ Day 2 

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
### ✅ Day 3 

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

### ✅ Day 4 

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

### ✅ Day 5 

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

### ✅ Day 6 — Using Claude Code to Generate, Test, Commit & Raise a PR (End-to-End Workflow)

**🎯 Topics Covered:**
- Using **Claude Code** (AI assistant inside VS Code) to generate a complete Playwright test script from a plain English prompt
- Data-Driven Testing (Parameterized Tests) — running the same test once for each data set in a JSON file
- Full end-to-end workflow: **CLAUDE.md → Prompt → Plan → Script Generation → Test Execution → Git Commit → Push → Pull Request**
- Removed allure-report and allure-results folders from git tracking and updated `.gitignore`

> 💡 **Why this matters:** Instead of writing every line of code manually, you describe what you need in plain English, and Claude Code generates production-ready code that follows your project's existing patterns. This is the future of test automation.

---

#### 📘 Step 1: Giving Claude Code Access to the Project — The `CLAUDE.md` File

Before Claude Code can help you, it needs to **understand your project**. This is done through a special file called `CLAUDE.md` that lives in the root of your repository.

**What is `CLAUDE.md`?**
- It is a plain markdown file that acts as a **project instruction manual** for Claude Code
- Claude Code **automatically reads this file** every time you start a conversation
- It tells Claude Code: what commands to run, how the project is structured, what patterns to follow, and what conventions to use

**On Day 5, we created `CLAUDE.md` with these key sections:**

| Section | What It Tells Claude Code |
|---------|--------------------------|
| **Commands** | How to install dependencies (`npm install`), run tests (`npx playwright test`), run a specific file, show reports, etc. |
| **Architecture** | This is a Playwright + TypeScript project targeting `demoqa.com` with `baseURL` set in `playwright.config.ts` |
| **Page Object Model** | POManager is the single entry point — never import individual page classes directly. Locators are `readonly` fields, actions are `async` methods |
| **Test Data** | JSON files live in `utils/` and are imported directly. Access data by index: `testData[0]` |
| **Test Structure** | Where test files are located: `tests/allure-report-basics/`, `tests/basic-scripts/text-box/`, etc. |
| **Reporters** | Three reporters are active: HTML, Line (terminal), and Allure |
| **Configuration** | Chromium browser, headless mode, screenshots/video/trace all ON, 30s timeout |
| **Allure Convention** | Always use `import * as allure from 'allure-js-commons'` — the old import is deprecated |
| **CI/CD** | GitHub Actions runs on every push/PR to main |

**Example from our `CLAUDE.md`:**
```markdown
### Page Object Model (POM)
- `POManager` is the single entry point — instantiate it with a `page` object
- Tests import only `POManager`, never individual page classes
- Each page class holds locators as `readonly` fields, plus async action methods

### Test Data
- JSON test data lives in `utils/` and is imported directly into test files
- Access data by index: `testData[0]`
```

> ✅ **Key Takeaway:** The better your `CLAUDE.md` is, the better Claude Code understands your project. It's like giving a new team member a complete onboarding document on their first day.

---

#### 📘 Step 2: What Prompt (Instruction) Was Given to Claude Code

Once `CLAUDE.md` is in place, you simply **type a plain English message** to Claude Code in VS Code describing what you need.

**The exact prompt I gave Claude Code:**

> *"In the current project we have `ImportJSONintoPlaywrightTypeScripttests.spec.ts` file. In that we added a script like get the test data from JSON file and while executing the script pass the data to the script. Now we need one new script file that should work like — we have different sets of data in the JSON file. For each set of data the script should run. How many sets of data are there, that many times the script should run."*

**What this means in simple words:**
- We already have a test that reads data from a JSON file — but it only uses the **first data set** (`testData[0]`)
- We want a **new test file** where the test runs **once for each data set** in the JSON array
- If there are 4 data sets → the test runs 4 times. If there are 10 → it runs 10 times
- This is called **Data-Driven Testing** or **Parameterized Testing**

> ✅ **Key Takeaway:** You don't need to write code. You don't need to know the exact Playwright API. Just describe **what you want** in your own words, and Claude Code figures out how to implement it.

---

#### 📘 Step 3: How Claude Code Planned the Approach (Before Writing Any Code)

Claude Code does **NOT** start writing code immediately. It first:

1. **Explored the codebase** — read the existing test file, JSON data, all page objects (`POManager.ts`, `TextBoxPage.ts`, `HomePage.ts`, `ElementsPage.ts`), and `playwright.config.ts`
2. **Created a plan** and showed it to me for approval:

**Claude Code's Plan:**

| Step | What Claude Code Proposed |
|------|--------------------------|
| 1 | Add 3 more data sets to `textBoxTestData.json` (keep the original at index 0 so existing tests don't break) |
| 2 | Create a new file `DataDrivenTextBoxTests.spec.ts` using Playwright's `for...of` loop pattern |
| 3 | Each data set will appear as a **separate test** in the HTML and Allure reports |
| 4 | Follow the exact same POM pattern, import conventions, and assertion formats already used in the project |

**Claude Code also identified:**
- Playwright does not have `test.each` like Jest — so it proposed using a `for...of` loop at module level
- The original test (`testData[0]`) must not be affected — backward compatibility
- Each test should include the person's name in the title for easy identification in reports

> ✅ **Key Takeaway:** Claude Code plans first, shows you the plan, and only proceeds **after you approve it**. You are always in control.

---

#### 📘 Step 4: How Claude Code Generated the Script

After I approved the plan, Claude Code made two changes:

**Change 1: Expanded the JSON test data file** (`utils/textBoxTestData.json`)

Before (1 data set):
```json
[
    {
        "fullName": "chaitanya",
        "email": "test@test.com",
        "currentAddress": "Flat No. 3B, Sai Residency...",
        "permanentAddress": "House No. 21, Green Meadows..."
    }
]
```

After (4 data sets — Claude Code added 3 new ones):
```json
[
    {
        "fullName": "chaitanya",
        "email": "test@test.com",
        "currentAddress": "Flat No. 3B, Sai Residency, Plot No. 12, Old Alwal Road, Tirumalagiri, Secunderabad, Telangana 500010, India",
        "permanentAddress": "House No. 21, Green Meadows Apartments, Sector 14, Kharghar, Navi Mumbai, Maharashtra 410210, India"
    },
    {
        "fullName": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "currentAddress": "456 Elm Street, Apt 7, Springfield, IL 62704, USA",
        "permanentAddress": "789 Oak Avenue, Suite 200, Chicago, IL 60601, USA"
    },
    {
        "fullName": "Raj Patel",
        "email": "raj.patel@domain.org",
        "currentAddress": "B-12, Sunrise Complex, MG Road, Bengaluru, Karnataka 560001, India",
        "permanentAddress": "A-45, Shanti Nagar, Pune, Maharashtra 411001, India"
    },
    {
        "fullName": "Maria Garcia",
        "email": "maria.garcia@mail.net",
        "currentAddress": "Calle Gran Via 28, Piso 3, Madrid 28013, Spain",
        "permanentAddress": "Avenida de la Constitucion 15, Sevilla 41001, Spain"
    }
]
```

> Notice: The original data at index 0 (`chaitanya`) is **unchanged** — so the existing test `ImportJSONintoPlaywrightTypeScripttests.spec.ts` still works perfectly.

**Change 2: Created the new test file** (`tests/basic-scripts/text-box/DataDrivenTextBoxTests.spec.ts`)

```typescript
import {test, expect} from "@playwright/test";
import {POManager} from '../../../pageobjects/POManager';
import testData from '../../../utils/textBoxTestData.json';

for (const data of testData) {

    test.describe(`Text Box Data-Driven Tests - ${data.fullName}`, () => {

        let poManager: POManager;

        test.beforeEach(async ({page}) => {
            poManager = new POManager(page);
            await poManager.getHomePage().goToHomePage();
            await poManager.getHomePage().navigateToElementsPage();
            await poManager.getElementsPage().navigateToTextBox();
        });

        test(`Fill and verify Text Box form for ${data.fullName}`, async () => {
            await poManager.getTextBoxPage().fillTextBoxForm(
                data.fullName,
                data.email,
                data.currentAddress,
                data.permanentAddress
            );
            await poManager.getTextBoxPage().submitForm();

            await expect(poManager.getTextBoxPage().outputCard).toBeVisible();
            await expect(poManager.getTextBoxPage().outputFullName).toHaveText(`Name:${data.fullName}`);
            await expect(poManager.getTextBoxPage().outputEmail).toHaveText(`Email:${data.email}`);
            await expect(poManager.getTextBoxPage().outputCurrentAddress).toHaveText(`Current Address :${data.currentAddress}`);
            await expect(poManager.getTextBoxPage().outputPermanentAddress).toHaveText(`Permananet Address :${data.permanentAddress}`);
        });

    });

}
```

**How this script works (line by line for beginners):**

| Line(s) | What It Does |
|----------|-------------|
| `import testData from '...textBoxTestData.json'` | Loads all 4 data sets from the JSON file into a variable called `testData` |
| `for (const data of testData)` | Loops through each data set. If there are 4 objects in the JSON → this loop runs 4 times |
| `test.describe(...)` | Creates a **test group** for each data set, with the person's name in the title |
| `test.beforeEach(...)` | Before each test: creates a new POManager, navigates to Home → Elements → Text Box page |
| `test(...)` | The actual test: fills the form using the current data set, clicks Submit, then checks the output |
| `await expect(...).toHaveText(...)` | Verifies the output displayed on the page matches the data we entered |

**Why `for...of` loop and not `test.each`?**
- Playwright does **not** have a built-in `test.each` like Jest
- The `for...of` loop runs at **module load time** (before any test starts)
- Each iteration registers a **separate test** — so Playwright sees 4 independent tests, not 1 test running 4 times
- Each test gets its own screenshots, video recording, and trace file

> ✅ **Key Takeaway:** Claude Code followed the project's existing patterns automatically — POM imports, `beforeEach` navigation, assertion formats — all because it read `CLAUDE.md`.

---

#### 📘 Step 5: How Claude Code Ran and Verified the Tests

Claude Code doesn't just generate code — it **tests its own work** before committing.

**Test Run 1 — New data-driven test file (4 data sets = 4 tests):**
```
npx playwright test tests/basic-scripts/text-box/DataDrivenTextBoxTests.spec.ts

Running 4 tests using 1 worker
  ✅ Text Box Data-Driven Tests - chaitanya › Fill and verify Text Box form for chaitanya
  ✅ Text Box Data-Driven Tests - Alice Johnson › Fill and verify Text Box form for Alice Johnson
  ✅ Text Box Data-Driven Tests - Raj Patel › Fill and verify Text Box form for Raj Patel
  ✅ Text Box Data-Driven Tests - Maria Garcia › Fill and verify Text Box form for Maria Garcia
  4 passed (36.9s)
```

**Test Run 2 — Original test file (to confirm no regression):**
```
npx playwright test tests/basic-scripts/text-box/ImportJSONintoPlaywrightTypeScripttests.spec.ts

Running 1 test using 1 worker
  ✅ Text Box Tests › Fill Text Box Form and Verify Output
  1 passed (11.1s)
```

> ✅ **Key Takeaway:** Claude Code runs the tests itself, verifies everything passes, and also checks that old tests are not broken. Only then does it move to committing.

---

#### 📘 Step 6: How Claude Code Committed to Git

After all tests passed, I asked Claude Code: **"Please commit all of my changes so we can make a PR."**

Claude Code then:

1. **Ran `git status`** — to see what files were changed
2. **Ran `git diff`** — to review the exact changes
3. **Ran `git log`** — to check the project's existing commit message style
4. **Staged only the specific files** (not `git add .` which could include unwanted files):
   ```bash
   git add utils/textBoxTestData.json tests/basic-scripts/text-box/DataDrivenTextBoxTests.spec.ts
   ```
5. **Created a commit with a meaningful message:**
   ```
   feat: add data-driven Text Box tests with multiple test data sets

   Add a new test spec that iterates over all JSON data sets using a for...of
   loop, running the Text Box form fill-and-verify test once per data set.
   Expand test data from 1 to 4 entries to exercise the parameterized tests.

   Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
   ```
6. **Ran `git status` again** — to confirm the working tree is clean

> Notice the `Co-Authored-By` tag — this tells GitHub that the code was written with help from Claude Code. It appears in the commit history for transparency.

> ✅ **Key Takeaway:** Claude Code follows git best practices — it stages specific files, writes descriptive commit messages using the project's naming convention (`feat:`, `docs:`, etc.), and verifies the commit was successful.

---

#### 📘 Step 7: How Claude Code Pushed and Raised a PR

After committing, I told Claude Code to push and create a Pull Request.

**Step 7a: Push to GitHub**
```bash
git push origin claude/funny-mclaren
```
Claude Code pushed the branch to the remote repository on GitHub.

**Step 7b: Create a Pull Request**

Claude Code generated the PR with a structured format:

**PR Title:** `feat: add data-driven Text Box tests`

**PR Body:**
```markdown
## Summary
- Added a new data-driven test file (DataDrivenTextBoxTests.spec.ts) that uses
  Playwright's for...of loop pattern to run the Text Box form test once per data set
- Expanded textBoxTestData.json from 1 to 4 test data sets
- Updated README.md Day 6 with documentation

## How it works
Each data set registers as a separate test in HTML and Allure reports.
Adding more scenarios only requires appending objects to the JSON array.

## Test plan
- [x] Ran DataDrivenTextBoxTests.spec.ts — 4/4 passed
- [x] Ran ImportJSONintoPlaywrightTypeScripttests.spec.ts — 1/1 passed (no regression)
- [ ] Verify tests pass in CI (GitHub Actions)
```

> ✅ **Key Takeaway:** Claude Code creates professional PRs with a summary, explanation, and test plan — just like a real developer would do in a team environment.

---

#### 📘 Complete Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLAUDE CODE WORKFLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. CLAUDE.md          You write project instructions once      │
│       ↓                Claude Code reads it automatically       │
│                                                                 │
│  2. Plain English      "I need a script that runs for           │
│     Prompt              each data set in the JSON file"         │
│       ↓                                                         │
│                                                                 │
│  3. Explore &          Claude Code reads your existing           │
│     Plan               code and creates a plan                  │
│       ↓                                                         │
│                                                                 │
│  4. Your Approval      You review the plan and say "Yes"        │
│       ↓                                                         │
│                                                                 │
│  5. Code Generation    Claude Code writes the test file         │
│       ↓                and expands the JSON data                │
│                                                                 │
│  6. Test Execution     Claude Code runs the tests itself        │
│       ↓                4/4 passed + no regression               │
│                                                                 │
│  7. Git Commit         Claude Code stages, commits with         │
│       ↓                meaningful message + Co-Authored-By      │
│                                                                 │
│  8. Push & PR          Claude Code pushes branch and            │
│                        creates a Pull Request on GitHub         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### 💡 Key Takeaways for Beginners

| # | Takeaway |
|---|----------|
| 1 | **`CLAUDE.md` is the foundation** — it tells Claude Code how your project works, what patterns to follow, and what conventions to use. Write it once, and Claude Code uses it every time. |
| 2 | **You describe, Claude Code builds** — you don't write code. You explain what you need in plain English, and Claude Code generates production-ready code. |
| 3 | **Claude Code plans before coding** — it reads your existing code, creates a plan, and waits for your approval before making any changes. You are always in control. |
| 4 | **Claude Code tests its own work** — it runs the tests, checks for regressions, and only commits after everything passes. |
| 5 | **Claude Code follows your project's style** — because of `CLAUDE.md`, it uses the same POM pattern, same import style, same assertion format, and same commit message convention. |
| 6 | **The entire cycle happens inside VS Code** — prompt → code → test → commit → push → PR — all without leaving your editor. |
| 7 | **To add more data sets in the future** — just add new objects to the JSON array. The test will automatically pick them up. No code changes needed. |

---

#### 📂 Files Created / Modified on Day 6

| File | Action | Description |
|------|--------|-------------|
| `utils/textBoxTestData.json` | Modified | Expanded from 1 to 4 data sets (original kept at index 0) |
| `tests/basic-scripts/text-box/DataDrivenTextBoxTests.spec.ts` | Created | New data-driven test using `for...of` loop — runs once per data set |
| `README.md` | Modified | Added Day 6 documentation with complete Claude Code workflow |
| `.gitignore` | Modified | Added `allure-results/` and `allure-report/` to prevent tracking |

---

#### 📌 Git Commands Claude Code Used on Day 6

```bash
# Stage specific files (not git add .)
git add utils/textBoxTestData.json tests/basic-scripts/text-box/DataDrivenTextBoxTests.spec.ts

# Commit with descriptive message
git commit -m "feat: add data-driven Text Box tests with multiple test data sets

Add a new test spec that iterates over all JSON data sets using a for...of
loop, running the Text Box form fill-and-verify test once per data set.
Expand test data from 1 to 4 entries to exercise the parameterized tests.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

# Push the branch to GitHub
git push origin claude/funny-mclaren

# Create a Pull Request (requires gh CLI)
gh pr create --title "feat: add data-driven Text Box tests" --body "..."
```

## 🙈 Gitignore Configuration

The `allure-results/` and `allure-report/` folders are intentionally **excluded from version control** because:

- They are auto-generated on every test run
- They can be large in size
- They contain environment-specific output

### `.gitignore` entries

Make sure your `.gitignore` file includes:

```
allure-results/
allure-report/
node_modules/
playwright-report/
test-results/
```

### Already committed Allure files? Remove them

If Allure folders were previously committed to the repository, run the following commands to untrack them without deleting them locally:

```bash
git rm -r --cached allure-results/
git rm -r --cached allure-report/
```

Then commit and push the changes:

```bash
git add .gitignore
git commit -m "chore: remove allure reports from tracking and add to gitignore"
git push
```

> ✅ After this, the folders will be ignored in all future commits while still existing on your local machine.

### ✅ Day 7

**🎯 Topics Covered:**
- Fixtures
- Radio Button functionalities

**🛠️ What I Did:**
- Added verifyoutput method in TextBoxPage.ts to verify all output fields in one method instead of separate assertions in the test file. This makes the test cleaner and more maintainable. The method takes the expected values as parameters and performs all assertions inside it.
- updated the test script to use the new verifyoutput method, passing the expected values from the JSON data directly to it. This reduces code duplication and keeps the test focused on the high-level flow rather than individual assertions.
- created a fixture in the test file to load the JSON test data and provide it to the tests. This allows for better organization of test data and makes it easier to manage and reuse across multiple tests. The fixture can be set up to run before all tests or before each test, depending on your needs.
- updated the test to use the fixture data instead of importing the JSON file directly in the test. This abstracts away the data loading logic and keeps the test file cleaner.
- updated the README.md to document the use of fixtures in the project, explaining how they work, how to create them, and how they improve test organization and maintainability.
- added a new test case to verify the functionality of radio buttons on the Elements page. This includes selecting different radio button options and verifying that the correct output is displayed based on the selection. This test helps ensure that the radio button functionality is working as expected and that user interactions are properly handled.

**📂 Files Created:**
- `tests/basic-scripts/text-box/CustomFixtureTextBoxTests.spec.ts`
- `fixtures/textBoxTestDataFixture.ts`
- `tests/basic-scripts/radio-button/RadioButtonTests.spec.ts`
- `pageobjects/RadioButtonPage.ts`

<!--
╔══════════════════════════════════════════════════════════════╗
║         DAILY LOG TEMPLATE — Copy & paste for each day       ║
╚══════════════════════════════════════════════════════════════╝

### ✅ Day X 

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
