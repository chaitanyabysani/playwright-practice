import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

/*
  SCRIPT 05 - Allure Parameters
  ===============================
  This script shows how to:
  1. Add parameters to your Allure report
  2. Parameters show WHAT DATA was used during the test
  3. Very useful when running same test with different data (data-driven testing)

  Example:
  Without parameters: Report just shows "Login Test - FAILED"
  With parameters:    Report shows "Login Test - FAILED | Username: admin | Password: wrong123"

  This helps you immediately know WHICH data caused the failure!
*/

// ---- Example 1: Simple parameter usage ----

test('Search for a product', async ({ page }) => {

  await allure.description('This test searches for a product and verifies results appear');
  await allure.severity('normal');

  // Define what data we are using in this test
  const searchKeyword = 'Playwright Automation';
  const expectedResults = true;

  // Add parameters to Allure report
  await allure.parameter('Search Keyword', searchKeyword);
  await allure.parameter('Expected Results to Appear', String(expectedResults));

  await allure.step('Open Google', async () => {
    await page.goto('https://www.google.com');
  });

  await allure.step(`Search for: ${searchKeyword}`, async () => {
    await page.fill('textarea[name="q"]', searchKeyword);
    await page.keyboard.press('Enter');
  });

  await allure.step('Verify search results appear', async () => {
    await page.waitForSelector('#search');
    const results = page.locator('#search');
    await expect(results).toBeVisible();
  });

});


// ---- Example 2: Data driven test with parameters ----
// Run the same test with different username and password combinations

const loginData = [
  { username: 'student',    password: 'Password123', expectedResult: 'success' },
  { username: 'wronguser',  password: 'Password123', expectedResult: 'failure' },
  { username: 'student',    password: 'wrongpass',   expectedResult: 'failure' },
];

for (const data of loginData) {

  test(`Login test - Username: ${data.username} | Expected: ${data.expectedResult}`, async ({ page }) => {

    await allure.description('Data driven login test with different username and password combinations');
    await allure.severity('critical');
    await allure.epic('User Management');
    await allure.feature('Login');

    // ADD PARAMETERS - these will show in Allure report for each test run
    await allure.parameter('Username', data.username);
    await allure.parameter('Password', data.password);
    await allure.parameter('Expected Result', data.expectedResult);

    await allure.step('Open login page', async () => {
      await page.goto('https://practicetestautomation.com/practice-test-login/');
    });

    await allure.step('Enter credentials', async () => {
      await page.fill('#username', data.username);
      await page.fill('#password', data.password);
      await page.click('#submit');
    });

    if (data.expectedResult === 'success') {
      await allure.step('Verify successful login', async () => {
        await expect(page.locator('h1')).toHaveText('Logged In Successfully');
      });
    } else {
      await allure.step('Verify error message is shown', async () => {
        await expect(page.locator('#error')).toBeVisible();
      });
    }

  });

}
