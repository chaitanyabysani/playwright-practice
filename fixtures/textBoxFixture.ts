/**
 * =====================================================================
 * CUSTOM FIXTURE FILE - textBoxFixture.ts
 * =====================================================================
 *
 * WHAT IS A FIXTURE?
 * ------------------
 * A fixture is a way to provide "ready-made data or objects" to your tests
 * automatically. Instead of importing data manually in every test file,
 * you define it once here, and every test gets it for free.
 *
 * Think of it like a waiter at a restaurant:
 *   - Without fixtures: You go to the kitchen yourself to get your food.
 *   - With fixtures:    The waiter (fixture) brings the food (data) to your table (test).
 *
 * HOW IT WORKS:
 * -------------
 * 1. We import the base `test` from Playwright.
 * 2. We "extend" it to add our own custom data (textBoxData).
 * 3. We export this extended `test` so our spec files can use it.
 * 4. Any test that uses our custom `test` will automatically have
 *    access to `textBoxData` — no extra imports needed!
 *
 * =====================================================================
 */

// Step 1: Import the base test and expect from Playwright
import { test as base } from '@playwright/test';

// Step 2: Import the JSON test data (same data your project already uses)
import testData from '../utils/textBoxTestData.json';

// Step 3: Define a TypeScript type for ONE test data entry.
// This helps your editor give you autocomplete and catch typos!
type TextBoxData = {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
};

// Step 4: Define the shape of our custom fixtures.
// This tells TypeScript: "Our custom test will provide these extra things."
type TextBoxFixtures = {
    // `textBoxData` — provides the FULL array of test data
    textBoxData: TextBoxData[];

    // `singleUser` — provides just the FIRST user (handy for simple tests)
    singleUser: TextBoxData;
};

// Step 5: Create the custom fixture by extending the base test.
//
// `base.extend<TextBoxFixtures>({...})` means:
//   "Take the normal Playwright test and ADD our custom fixtures to it."
//
// Each fixture is defined as an array: [ value, { option: true } ]
//   - The first element is the default value.
//   - `{ option: true }` makes it overridable from playwright.config.ts if needed.
//
// OR as an async function: async ({ ...dependencies }, use) => { await use(value); }
//   - This is the "worker" form — it runs setup, gives the value to the test,
//     and can run cleanup after the test finishes.

export const test = base.extend<TextBoxFixtures>({

    // Fixture 1: textBoxData
    // Provides the entire array of test users.
    // We use the async function form so you can see the pattern clearly.
    textBoxData: async ({}, use) => {
        // This runs BEFORE your test — setup phase
        // We simply pass the imported JSON data to the test
        await use(testData);
        // Anything after `use()` runs AFTER the test — cleanup phase
        // (We don't need cleanup here, but you could do things like
        //  deleting temp files, resetting databases, etc.)
    },

    // Fixture 2: singleUser
    // Provides just the first user from the array.
    // Great for simple tests that only need one set of data.
    singleUser: async ({}, use) => {
        await use(testData[0]);
    },
});

// Step 6: Re-export `expect` from Playwright so test files
// can import both `test` and `expect` from this single fixture file.
export { expect } from '@playwright/test';
