const path = require('path');
const yargs = require('yargs')
    .option('tags', {
        alias: 't',
        default: '@oz',
        describe: 'Choose a web page',
        choices: ['@oz', '@calculator'],
        type: 'string'
    })
    .help()
    .argv;

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1920,1080'],
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_defenitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:test/reports/report.json', './node_modules/cucumber-pretty'],
        tags: yargs.tags,
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
};