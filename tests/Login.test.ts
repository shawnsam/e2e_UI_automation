import puppeteer from 'puppeteer';
import { Browser, Page } from 'puppeteer';
import { LoginPage } from '../src/Pages/LoginPage';
import { SuccessPage } from '../src/Pages/SuccessPage';
import { CommonFunctions } from '../src/utils/CommonFunctions';
describe('Login', () => {
    let browser: Browser;
    let page: Page;
    let loginPage: LoginPage;
    let successPage: SuccessPage;
    let commonFunctions: CommonFunctions
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        loginPage = new LoginPage(page);
        successPage = new SuccessPage(page);
    });

    afterAll(async () => {
        await browser.close();
    });

    it('Website Title should be Simple Login', async () => {
        expect(await page.title()).toBe('Simple Login')
    })

    it('Login button color is grey upon loading', async () => {
        let bgColorName = await loginPage.getBackgroundColorOfLoginBtn()
        expect(bgColorName).toBe("grey")
    })
    it('Login button color is red upon clicking login Button without any credentials', async () => {
        await loginPage.login('', '');
        let bgColorName = await loginPage.getBackgroundColorOfLoginBtn()
        expect(bgColorName).toBe("red")
    })

    it('Application redirects to Success Page when a valid user logs in', async () => {
        await loginPage.login('test@test.com', 'password');
        let bgColorName = await loginPage.getBackgroundColorOfLoginBtn()
        bgColorName = await loginPage.getBackgroundColorOfLoginBtn()

        expect(bgColorName).toBe("yellow") // checks if Login color changes to yellow while VALIDATING 
        await successPage.waitForLogoutBtn()

        expect(await successPage.isLogoutBtnPresent()).toBe(true)// checks if user is in Success Page
    });
});
