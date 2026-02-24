import { Page } from "@playwright/test";
import { HomePage } from "./HomePage"; 


export class POManager{

    readonly homePage: HomePage;
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
        this.homePage = new HomePage(page);
    }

    getHomePage(){
        return this.homePage;
    }
}