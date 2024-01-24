const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright TS Cucumber Automation Report",
    pageTitle: "Playwright TS Cucumber Automation Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "102",
        },
        device: "HungNK - PC",
        platform: {
            name: "MAC OS",
            version: "12.0.1",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Playwight TS Cucumber Web Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});