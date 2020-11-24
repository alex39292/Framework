const path = require('path');
const reporterHtml = require('cucumber-html-reporter');

const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/report-html.html'),
    reportSuitesAsScenarios: true,
};
const yargs = require('yargs')
    .option('tags', {
        alias: 't',
        default: '@smoke',
        describe: 'Choose a test',
        choices: ['@cart', '@titles', '@smoke'],
        type: 'string',
    })
    .option('instances', {
        alias: 'i',
        default: 1,
        describe: 'Choose number of instances to start test',
        type: 'number',
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
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances,
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
        format: ['json:test/reports/report.json',
            './node_modules/cucumber-pretty'],
        tags: yargs.tags,
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => {
        return reporterHtml.generate(reportOptions);
    },
};