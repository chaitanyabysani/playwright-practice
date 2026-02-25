import {test,expect, Locator, Page} from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly elementsHeader: Locator;
    readonly textBox: Locator;
    readonly checkBox: Locator;
    readonly radioButton: Locator;
    readonly webTables: Locator;
    readonly buttons: Locator;
    readonly links: Locator;
    readonly brokenLinksImages: Locator;
    readonly uploadAndDownload: Locator;
    readonly dynamicProperties: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsHeader = page.getByRole('heading', { name: 'Elements' });
        this.textBox = page.getByText('Text Box');
        this.checkBox = page.getByText('Check Box');
        this.radioButton = page.getByText('Radio Button');
        this.webTables = page.getByText('Web Tables');
        this.buttons = page.getByText('Buttons');
        this.links = page.getByText('Links');
        this.brokenLinksImages = page.getByText('Broken Links - Images');
        this.uploadAndDownload = page.getByText('Upload and Download');
        this.dynamicProperties = page.getByText('Dynamic Properties');
    }

    async verifyElementsPage() {
        await expect(this.elementsHeader).toBeVisible();
    }

    async navigateToTextBox() {
        await this.textBox.click();
        await expect(this.page).toHaveURL(/.*text-box/);
    }

    async navigateToCheckBox() {
        await this.checkBox.click();
        await expect(this.page).toHaveURL(/.*check-box/);
    }

    async navigateToRadioButton() {
        await this.radioButton.click();
        await expect(this.page).toHaveURL(/.*radio-button/);
    }  

    async navigateToWebTables() {
        await this.webTables.click();
        await expect(this.page).toHaveURL(/.*webtables/);
    }

    async navigateToButtons() {
        await this.buttons.click();
        await expect(this.page).toHaveURL(/.*buttons/);
    }   

    async navigateToLinks() {
        await this.links.click();
        await expect(this.page).toHaveURL(/.*links/);
    }

    async navigateToBrokenLinksImages() {
        await this.brokenLinksImages.click();
        await expect(this.page).toHaveURL(/.*broken/);
    }

    async navigateToUploadAndDownload() {
        await this.uploadAndDownload.click();
        await expect(this.page).toHaveURL(/.*upload-download/);
    }

    async navigateToDynamicProperties() {
        await this.dynamicProperties.click();
        await expect(this.page).toHaveURL(/.*dynamic-properties/);
    }
}