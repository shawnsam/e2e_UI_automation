import { Page } from 'puppeteer';
import { CommonFunctions } from '../utils/CommonFunctions';
export class LoginPage {
    private readonly page: Page;
    private commonFunctions: CommonFunctions;
    private readonly txtEmail: string = "#emailField"
    private readonly txtPassword: string = "#passwordField"
    private readonly btnSubmit: string = "#loginBtn"
    public constructor(page: Page) {
        this.page = page;
        this.commonFunctions = new CommonFunctions(page)
    }
    public async setEmail(username: string) {
        await this.page.type(this.txtEmail, username);
    }
    public async setPassword(password: string) {
        await this.page.type(this.txtPassword, password);
    }
    public async clickOnLoginBtn() {
        await this.page.click(this.btnSubmit);
    }
    public async getBackgroundColorOfLoginBtn() {
        const bgColor = await this.commonFunctions.getBackgroundColorName(this.btnSubmit)
        return bgColor

    }

    public async login(username: string, password: string): Promise<void> {
        await this.setEmail(username)
        await this.setPassword(password)
        await this.clickOnLoginBtn()
    }
    public async getTextFromLoginBtn() {
        return await this.page.$eval(this.btnSubmit, (element) => element.textContent);
    }
    public async isLoginBtnPresent() {
        return await this.page.$(this.btnSubmit) !== null
    }
}
