const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function runTests() {
    await fse.emptyDir('mochawesome-report'); // empty the report folder
    const { totalFailed } = await cypress.run() // get the number of failed tests
    const jsonReport = await merge() // generate JSON report
    await generator.create(jsonReport) //generate HTML report
    process.exit(totalFailed) // exit with the number of failed tests
}

runTests()
