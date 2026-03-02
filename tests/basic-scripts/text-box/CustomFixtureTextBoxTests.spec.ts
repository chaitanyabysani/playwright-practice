/**
 * =====================================================================
 * TEST FILE USING CUSTOM FIXTURE
 * =====================================================================
 *
 * WHAT'S DIFFERENT HERE?
 * ----------------------
 * In the other test files, you imported data like this:
 *     import { test, expect } from '@playwright/test';
 *     import testData from '../../../utils/textBoxTestData.json';
 *
 * But here, we do this instead:
 *     import { test, expect } from '../../../fixtures/textBoxFixture';
 *
 * That's it! The fixture automatically provides the test data.
 * No need to import JSON files manually.
 *
 * WHY IS THIS USEFUL?
 * -------------------
 * 1. CLEANER IMPORTS: One import gives you everything (test + data).
 * 2. REUSABLE: 10 test files can all use the same fixture — no repeated imports.
 * 3. EXTENDABLE: You can add more fixtures later (e.g., logged-in user, API tokens).
 * 4. SETUP/CLEANUP: Fixtures can do setup before and cleanup after tests automatically.
 *
 * =====================================================================
 */

// Notice: We import `test` and `expect` from our CUSTOM fixture file,
// NOT from '@playwright/test'. This gives us the extra `textBoxData`
// and `singleUser` fixtures automatically.
import { test, expect } from '../../../fixtures/textBoxFixture';
import { POManager } from '../../../pageobjects/POManager';

// =====================================================================
// TEST 1: Simple test using the `singleUser` fixture
// =====================================================================
// This test uses `singleUser` which gives us just ONE user's data.
// Perfect for a quick, straightforward test.

test.describe('Text Box - Single User Test (using singleUser fixture)', () => {

    let poManager: POManager;

    // beforeEach runs before every test in this describe block.
    // It navigates to the Text Box page so each test starts fresh.
    test.beforeEach(async ({ page }) => {
        poManager = new POManager(page);
        await poManager.getHomePage().goToHomePage();
        await poManager.getHomePage().navigateToElementsPage();
        await poManager.getElementsPage().navigateToTextBox();
    });

    // Look at the test parameters: { singleUser }
    // This is "destructuring" — Playwright automatically passes the
    // singleUser fixture value into the test function. No manual import needed!
    test('Fill and verify form with single user data', async ({ singleUser }) => {
        // singleUser contains: { fullName, email, currentAddress, permanentAddress }
        // It's the first user from textBoxTestData.json (i.e., "chaitanya")

        // Fill in the form using the fixture data
        await poManager.getTextBoxPage().fillTextBoxForm(
            singleUser.fullName,
            singleUser.email,
            singleUser.currentAddress,
            singleUser.permanentAddress
        );

        // Click submit
        await poManager.getTextBoxPage().submitForm();

        // Verify the output section appears and shows the correct data
        await expect(poManager.getTextBoxPage().outputCard).toBeVisible();
        await expect(poManager.getTextBoxPage().outputFullName).toHaveText(`Name:${singleUser.fullName}`);
        await expect(poManager.getTextBoxPage().outputEmail).toHaveText(`Email:${singleUser.email}`);
        await expect(poManager.getTextBoxPage().outputCurrentAddress).toHaveText(`Current Address :${singleUser.currentAddress}`);
        await expect(poManager.getTextBoxPage().outputPermanentAddress).toHaveText(`Permananet Address :${singleUser.permanentAddress}`);
    });
});

// =====================================================================
// TEST 2: Data-driven tests using the `textBoxData` fixture (full array)
// =====================================================================
// This loops through ALL users and creates a separate test for each one.
// Same idea as DataDrivenTextBoxTests.spec.ts, but powered by the fixture.

// We need the raw data for the loop since `for...of` runs at file-load time,
// before fixtures are available. So we import it here just for the loop structure.
// Inside each test, we use the fixture version to demonstrate the pattern.
import textData from '../../../utils/textBoxTestData.json';

for (const data of textData) {

    test.describe(`Text Box - Data-Driven (${data.fullName}) using fixture`, () => {

        let poManager: POManager;

        test.beforeEach(async ({ page }) => {
            poManager = new POManager(page);
            await poManager.getHomePage().goToHomePage();
            await poManager.getHomePage().navigateToElementsPage();
            await poManager.getElementsPage().navigateToTextBox();
        });

        // Here we request `textBoxData` from the fixture to demonstrate
        // how it provides the full array inside the test.
        test(`Fill and verify form for ${data.fullName}`, async ({ textBoxData }) => {

            // Find this user in the fixture-provided data array
            // (This shows that textBoxData is the full array from the fixture)
            const user = textBoxData.find(u => u.fullName === data.fullName)!;

            // Fill the form
            await poManager.getTextBoxPage().fillTextBoxForm(
                user.fullName,
                user.email,
                user.currentAddress,
                user.permanentAddress
            );

            // Submit
            await poManager.getTextBoxPage().submitForm();

            // Verify output
            await expect(poManager.getTextBoxPage().outputCard).toBeVisible();
            await expect(poManager.getTextBoxPage().outputFullName).toHaveText(`Name:${user.fullName}`);
            await expect(poManager.getTextBoxPage().outputEmail).toHaveText(`Email:${user.email}`);
            await expect(poManager.getTextBoxPage().outputCurrentAddress).toHaveText(`Current Address :${user.currentAddress}`);
            await expect(poManager.getTextBoxPage().outputPermanentAddress).toHaveText(`Permananet Address :${user.permanentAddress}`);
        });
    });
}
