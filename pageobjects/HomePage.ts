import {test, expect, Locator, Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly elementsCard: Locator;
    readonly formsCard: Locator;
    readonly alertsFramesAndWindowsCard: Locator;
    readonly widgetsCard: Locator;
    readonly interactionsCard: Locator;
    readonly bookStoreApplicationCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.getByText('Elements', { exact: true });
        this.formsCard = page.getByText('Forms', { exact: true });
        this.alertsFramesAndWindowsCard = page.getByText('Alerts, Frame & Windows', { exact: true });
        this.widgetsCard = page.getByText('Widgets', { exact: true });
        this.interactionsCard = page.getByText('Interactions', { exact: true });
        this.bookStoreApplicationCard = page.getByText('Book Store Application', { exact: true });
    }

    async goToHomePage() {
        await this.page.goto('/');
    }

    async navigateToElementsPage() {
        await this.elementsCard.click();
        await expect(this.page).toHaveURL(/.*elements/);
    }

    async navigateToFormsPage() {
        await this.formsCard.click();
        await expect(this.page).toHaveURL(/.*forms/);
    }

    async navigateToAlertsFramesAndWindowsPage() {
        await this.alertsFramesAndWindowsCard.click();
        await expect(this.page).toHaveURL(/.*alertsWindows/);
    }

    async navigateToWidgetsPage() {
        await this.widgetsCard.click();
        await expect(this.page).toHaveURL(/.*widgets/);
    }

    async navigateToInteractionsPage() {
        await this.interactionsCard.click();
        await expect(this.page).toHaveURL(/.*interactions/);
    }

    async navigateToBookStoreApplicationPage() {
        await this.bookStoreApplicationCard.click();
        await expect(this.page).toHaveURL(/.*books/);
    }
}