/* In this script, we are implementing data-driven tests for the Text Box form using Playwright. We have 
a json file and in that only one set of data is present. We import that data and use it to fill out the form and 
verify the output. */

import {test, expect} from "@playwright/test";
import {POManager} from '../../../pageobjects/POManager';
import testData from '../../../utils/textBoxTestData.json';

test.describe('Text Box Tests', () => {

    let poManager: POManager;
    test.beforeEach(async ({page}) => {
        poManager = new POManager(page);
        await poManager.getHomePage().goToHomePage();
        await poManager.getHomePage().navigateToElementsPage();
        await poManager.getElementsPage().navigateToTextBox();
    });

    test('Fill Text Box Form and Verify Output', async () => {
        const {fullName, email, currentAddress, permanentAddress} = testData[0];
        await poManager.getTextBoxPage().fillTextBoxForm(fullName, email, currentAddress, permanentAddress);
        await poManager.getTextBoxPage().submitForm();
        await poManager.getTextBoxPage().verifyOutput(fullName, email, currentAddress, permanentAddress);
    });

});
