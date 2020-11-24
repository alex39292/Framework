/* eslint-disable new-cap */
const {After} = require('cucumber');

After(async function() {
    const screenshot = await browser.takeScreenshot();
    const decoded = new Buffer.from(screenshot, 'base64');
    return this.attach(decoded, 'image/png');
});