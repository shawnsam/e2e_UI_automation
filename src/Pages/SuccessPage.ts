import { Page } from 'puppeteer';

export class SuccessPage {
    private readonly page: Page;
    private readonly lblSuccessMsg: string = "#successMsg"
    private readonly btnLogout: string = "#logoutBtn"
    public constructor(page: Page) {
        this.page = page;
    }
    public async clickOnLogoutBtn() {
        await this.page.click(this.btnLogout);
    }
    public async waitForLogoutBtn(){
        await this.page.waitForSelector(this.btnLogout);
    }
    public async getTextFromSuccessMsg() {
        return await this.page.$eval(this.lblSuccessMsg, (element) => element.textContent);
    }
    public async isLogoutBtnPresent() {
        return await this.page.$(this.btnLogout) !== null
    }
}
