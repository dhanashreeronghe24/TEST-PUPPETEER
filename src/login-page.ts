import puppeteer from "puppeteer";

const URL: string = 'https://gmail.com';
const EMAIL_ID: string = 'Enter your email ID in code';
const PASSWORD: string = 'Enter your password';

export default class LoginPage {

    async basic() {
        const browser = await puppeteer.launch({ headless: false, slowMo: 500 })
        const page = await browser.newPage();
        await page.goto(process.argv[2]);
        await page.$('#about-me');
        await page.click('#about-me');
        await page.screenshot({ path: 'test.png', fullPage: true });
        await browser.close();
    };

    async loginPage() {
        const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
        const page = await browser.newPage();
        await page.goto(URL);
        await page.type('[name ="identifier"]', EMAIL_ID);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);
        await page.type('[name="password"]', PASSWORD);
        await page.keyboard.press('Enter');
        await page.waitForNavigation({ waitUntil: 'load' })
        await page.screenshot({ path: 'login.png', fullPage: true });
        //await page.$('[data="Enter your password"]')
        await browser.close();
    }

}