import puppeteer from 'puppeteer';
import { Browser, Page } from 'puppeteer';
import { LoginPage } from '../src/Pages/LoginPage';
import { SuccessPage } from '../src/Pages/SuccessPage';
describe('Login', () => {
    let browser: Browser;
    let page: Page;
    let loginPage: LoginPage;
    let successPage: SuccessPage;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        loginPage = new LoginPage(page);
        successPage = new SuccessPage(page);
        await loginPage.login("test@test.com", "password")
        await successPage.waitForLogoutBtn()
    });

    afterAll(async () => {
        await browser.close();
    });
    it('Login Success Message is displayed upon login', async () => {
        const msg = await successPage.getTextFromSuccessMsg()
        expect(msg).toBe("Successfully Logged in !")
    });
    it('Application redirects to Login Page upon clicking the log out button', async () => {
        await successPage.clickOnLogoutBtn()
        expect(await loginPage.isLoginBtnPresent()).toBe(true)
    });
});
