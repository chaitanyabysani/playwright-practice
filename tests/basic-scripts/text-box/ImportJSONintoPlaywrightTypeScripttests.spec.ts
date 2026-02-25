import {test, expect} from "@playwright/test";
import {POManager} from '../../../pageobjects/POManager';
import testData from '../../../utils/textBoxTestData.json';
import { TextBoxPage } from "../../../pageobjects/TextBoxPage";

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
        await expect(poManager.getTextBoxPage().outputCard).toBeVisible();
        await expect(poManager.getTextBoxPage().outputFullName).toHaveText(`Name:${fullName}`);
        await expect(poManager.getTextBoxPage().outputEmail).toHaveText(`Email:${email}`);
        await expect(poManager.getTextBoxPage().outputCurrentAddress).toHaveText(`Current Address :${currentAddress}`);
        await expect(poManager.getTextBoxPage().outputPermanentAddress).toHaveText(`Permananet Address :${permanentAddress}`);
    });

});
