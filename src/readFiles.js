const fs = require('fs');


function clearUpConsoleCrumbs (contents) {
    const CrumbRegEXP = new RegExp("console\\.crumb\\s*\\([^)]*\\)");

    let strippedContent = contents.replace(CrumbRegEXP, '');

    let trimmed = strippedContent.trim();

    return trimmed
}

function clearUpConsoleComments (contents) {
    const CrumbRegEXP = new RegExp("// @crumb.*");;

    let strippedContent = contents.replace(CrumbRegEXP, '');

    let trimmed = strippedContent.trim();

    return trimmed
}

exports.processFiles = (listOfFiles) => {

    listOfFiles.forEach(file => {

        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }

            let result = clearUpConsoleCrumbs(clearUpConsoleComments(data));



            fs.writeFile(file, result, err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
                console.log(`successfully cleaned ${file}`)
            }
            });
            console.log('File contents:', result);
        })
  
    });
}

