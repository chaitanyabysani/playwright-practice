/* In this script, we are implementing data-driven tests for the Text Box form using Playwright. We import test data 
from a JSON file and iterate through each set of data to fill out the form and verify the output. The tests 
are structured using `test.describe` to group them by the full name of the user being tested. Each test 
fills out the form with the provided data, submits it, and then checks that the output matches the expected values. */

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
            await poManager.getTextBoxPage().verifyOutput(
                data.fullName,
                data.email,
                data.currentAddress,
                data.permanentAddress
            ); 
            
        });

    });

}
