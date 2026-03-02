import {test, expect, Locator, Page} from '@playwright/test';


export class TextBoxPage {

        readonly page: Page;
        readonly fullNameInput: Locator;
        readonly emailInput: Locator;
        readonly currentAddressInput: Locator;
        readonly permanentAddressInput: Locator;
        readonly submitButton: Locator;
        readonly outputCard: Locator;
        readonly outputFullName: Locator;
        readonly outputEmail: Locator;
        readonly outputCurrentAddress: Locator;
        readonly outputPermanentAddress: Locator;


        constructor(page:Page){

            this.page = page;
            this.fullNameInput = page.getByPlaceholder('Full Name', { exact: true });
            this.emailInput = page.getByPlaceholder('name@example.com', { exact: true });
            this.currentAddressInput = page.getByPlaceholder('Current Address', { exact: true });
            this.permanentAddressInput = page.locator("//textarea[@id='permanentAddress']");
            this.submitButton = page.getByRole('button', { name: 'Submit' });
            this.outputCard = page.locator('#output > div.border.col-md-12.col-sm-12');
            this.outputFullName = page.locator('#output p#name');
            this.outputEmail = page.locator('#output p#email');
            this.outputCurrentAddress = page.locator('#output p#currentAddress');
            this.outputPermanentAddress = page.locator('#output p#permanentAddress');
        }

        async fillTextBoxForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
            await this.fullNameInput.fill(fullName);
            await this.emailInput.fill(email);
            await this.currentAddressInput.fill(currentAddress);
            await this.permanentAddressInput.fill(permanentAddress);
        }

        async submitForm() {
            await this.submitButton.click();
        }

        async verifyOutput(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
            await expect(this.outputCard).toBeVisible();
            await expect(this.outputFullName).toHaveText(`Name:${fullName}`);
            await expect(this.outputEmail).toHaveText(`Email:${email}`);
            await expect(this.outputCurrentAddress).toHaveText(`Current Address :${currentAddress}`);
            await expect(this.outputPermanentAddress).toHaveText(`Permananet Address :${permanentAddress}`);
        }

}