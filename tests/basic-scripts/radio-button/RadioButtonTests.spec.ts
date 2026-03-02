import {test, expect} from '@playwright/test';
import { POManager } from '../../../pageobjects/POManager';

test.describe('Radio Button Functionality Tests', () => {

    let poManager: POManager;
    test.beforeEach(async ({page}) => {
        poManager = new POManager(page);
        await poManager.getHomePage().goToHomePage();
        await poManager.getHomePage().navigateToElementsPage();
        await poManager.getElementsPage().navigateToRadioButton();
    });

    test('Select Yes Radio Button and Verify Output', async () => {
        await poManager.getRadioButtonPage().selectYes();
    });

    test('Select Impressive Radio Button and Verify Output', async () => {
        await poManager.getRadioButtonPage().selectImpressive();
    });

    test('Verify No Radio Button is Disabled', async () => {
        await poManager.getRadioButtonPage().verifyNoOptionDisabled();
    });

});