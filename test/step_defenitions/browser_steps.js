/* eslint-disable max-len */
/* eslint-disable new-cap */
const {When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai');
setDefaultTimeout(60000);

When(/^I open oz.by$/, () => {
    return browser.get('https://oz.by/');
});

Then(/^Page title should be "OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси."$/, async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
});

When(/^I wait 10 seconds$/, () => {
    return browser.sleep(10000);
})