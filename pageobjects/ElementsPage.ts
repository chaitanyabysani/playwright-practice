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
    
}