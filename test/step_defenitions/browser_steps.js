/* eslint-disable new-cap */
const {When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai');
const {Key} = require('protractor');

setDefaultTimeout(60000);

When('I open {string}', (url) => {
    return browser.get(url);
});

When('I input {string} into searching field', async (searchingText) => {
    const searchingField = await $('#findtext');
    return searchingField.sendKeys(searchingText + Key.ENTER);
});

Then('I click on the first item', async () => {
    const item = await $('div.ok-product:nth-child(1) > div:nth-child(1)');
    return await item.click();
});

Then('I click Buy', async () => {
    const buyBtn = await $('.ok-product__add-shcart');
    return await buyBtn.click();
});

Then('I go to the cart', async () => {
    const btn = await $('.ok-shcart__info');
    return await btn.click();
});

Then('I check cost with real cost {string}', async (realCost) => {
    const cost = await $('span.ok-order__sum-val:nth-child(3)').getText();
    expect(cost).to.be.equal(realCost);
});

Then('Page title should be {string}', async (title) => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal(title);
});

When('I wait "{int}" seconds', (seconds) => {
    return browser.sleep(seconds * 1000);
});