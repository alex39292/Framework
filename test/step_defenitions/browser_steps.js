/* eslint-disable new-cap */
const {When, Then, setDefaultTimeout} = require('cucumber');
const {expect} = require('chai');

setDefaultTimeout(60000);

When('I open {string}', url => {
    return browser.get(url);
});

Then(/^Page title should (not)?be "([^"]*)"$/, async (title) => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal(title);
});

When('I wait "{int}" seconds', (seconds) => {
    return browser.sleep(seconds * 1000);
});