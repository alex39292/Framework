const fs = require('fs-extra');
const path = require('path');

const reportFolder = path.join(__dirname, '../reports');
fs.emptyDirSync(reportFolder);