import { Page } from 'puppeteer';

export class SuccessPage {
    private readonly page: Page;
    private readonly lblSuccessMsg: string = "#successMsg"
    private readonly btnLogout: string = "#logoutBtn"
    public constructor(page: Page) {
        this.page = page;
    }
    //Click on the Log Out Button
    public async clickOnLogoutBtn() {
        await this.page.click(this.btnLogout);
    }
    //Wait for the Log Out Button to be displayed
    public async waitForLogoutBtn(){
        await this.page.waitForSelector(this.btnLogout);
    }
    //Return the text displayed in Success Mesaage
    public async getTextFromSuccessMsg() {
        return await this.page.$eval(this.lblSuccessMsg, (element) => element.textContent);
    }
    //return a boolean value based on whether logout btn is present
    public async isLogoutBtnPresent() {
        return await this.page.$(this.btnLogout) !== null
    }
}
