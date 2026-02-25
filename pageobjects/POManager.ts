import { Page } from "@playwright/test";
import { HomePage } from "./HomePage"; 
import { ElementsPage } from "./ElementsPage";
import { TextBoxPage } from "./TextBoxPage";


export class POManager{

    readonly homePage: HomePage;
    readonly elementsPage: ElementsPage;
    readonly textBoxPage: TextBoxPage;
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.elementsPage = new ElementsPage(page);
        this.textBoxPage = new TextBoxPage(page);
    }

    getHomePage(){
        return this.homePage;
    }

    getElementsPage(){
        return this.elementsPage;   
    }

    getTextBoxPage(){
        return this.textBoxPage;
    }
}