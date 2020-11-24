/* eslint-disable new-cap */
const {Given, When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai');
const {Key, ExpectedConditions} = require('protractor');

setDefaultTimeout(60000);

Given('I open {string}', (url) => {
    return browser.get(url);
});

When('I input {string} into searching field', async (searchingText) => {
    const searchingField = await $('#findtext');
    return searchingField.sendKeys(searchingText + Key.ENTER);
});

When('I click on the first item', async () => {
    const item = await $('div.ok-product:nth-child(1) > div:nth-child(1)');
    return await item.click();
});

When('I click Buy', async () => {
    const buyBtn = await $('.ok-product__add-shcart');
    return await buyBtn.click();
});

When('I go to the cart', async () => {
    await browser.sleep(1000);
    await browser.wait(ExpectedConditions
        .elementToBeClickable($('.ok-shcart__info')), 10000);
    return await $('.ok-shcart__info').click();
});

Then('I check cost with real cost {string}', async (realCost) => {
    await browser.wait(ExpectedConditions
        .elementToBeClickable($('span.ok-order__sum-val:nth-child(3)')), 10000);
    const cost = await $('span.ok-order__sum-val:nth-child(3)').getText();
    expect(cost).to.be.equal(realCost);
});

Then('Page title should be {string}', async (title) => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal(title);
});