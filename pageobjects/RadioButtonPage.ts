import {test, Page, Locator, expect} from '@playwright/test';

export class RadioButtonPage{

    readonly page: Page;
    readonly yesRadioButton: Locator;
    readonly impressiveRadioButton: Locator;
    readonly noRadioButton: Locator;
    readonly outputText: Locator;

    constructor(page:Page){
        this.page = page;
        this.yesRadioButton = page.getByRole('radio', { name: 'Yes' });
        this.impressiveRadioButton = page.getByRole('radio', { name: 'Impressive' });
        this.noRadioButton = page.getByRole('radio', { name: 'No' });
        this.outputText = page.locator("//p[@class='mt-3']");
    }

    async selectYes() {
        await expect(this.yesRadioButton).toBeEnabled();
        if(!await this.yesRadioButton.isChecked()){
            await this.yesRadioButton.check();
        }
        await expect(this.outputText).toContainText("Yes");
    }

    async selectImpressive() {
        await expect(this.impressiveRadioButton).toBeEnabled();
        if(!await this.impressiveRadioButton.isChecked()){
            await this.impressiveRadioButton.check();
        }
        await expect(this.outputText).toContainText("Impressive");
    }

    async verifyNoOptionDisabled() {
        await expect(this.noRadioButton).toBeDisabled();
        
    }

}