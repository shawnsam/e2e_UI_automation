import { Page } from 'puppeteer';
export class CommonFunctions {
    private readonly page: Page;
    public constructor(page: Page) {
        this.page = page;
    }

    // return Background Color Name of the element with the provided selector
    public async getBackgroundColorName(selector: string) {
        const color = await this.page.evaluate(selector => {
            const element = document.querySelector(selector);
            return window.getComputedStyle(element).backgroundColor;
        }, selector);
        const [r, g, b] = color
            .substring(color.indexOf('(') + 1, color.indexOf(')'))
            .split(',')
            .map(x => parseInt(x.trim()));
        if (r === 255 && g === 0 && b === 0) {
            return 'red';
        } else if (r === 255 && g === 255 && b === 0) {
            return 'yellow';
        }
        else if (r === 128 && g === 128 && b === 128) {
            return 'grey';
        } else if (r === 0 && g === 255 && b === 0) {
            return 'green';
        } else if (r === 0 && g === 0 && b === 255) {
            return 'blue';
        } else {
            return 'other';
        }
    }
}