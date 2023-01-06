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
    //Set the provided value in Email Field
    public async setEmail(email: string) {
        await this.page.type(this.txtEmail, email);
    }
    //Set the provided value in password Field
    public async setPassword(password: string) {
        await this.page.type(this.txtPassword, password);
    }
    //clicks on the login Button
    public async clickOnLoginBtn() {
        await this.page.click(this.btnSubmit);
    }
    //get the Background color Name of login Button
    public async getBackgroundColorOfLoginBtn() {
        return await this.commonFunctions.getBackgroundColorName(this.btnSubmit)
    }
    // Performs the login action with the provided email & password
    public async login(email: string, password: string): Promise<void> {
        await this.setEmail(email)
        await this.setPassword(password)
        await this.clickOnLoginBtn()
    }
    //get the Text Displayed in Login Btn
    public async getTextFromLoginBtn() {
        return await this.page.$eval(this.btnSubmit, (element) => element.textContent);
    }
    //Returns a boolean value based on whether the login button is present
    public async isLoginBtnPresent() {
        return await this.page.$(this.btnSubmit) !== null
    }
}
