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
