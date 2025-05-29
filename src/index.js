const { getDiffingFiles } = require('./getDiffingFiles')
const { processFiles } = require('./readFiles')

function useCrumbs() {
/**
 * The same as console log just designed to automatically be removed
 */
  console.crumb = console.log
  return console
}


async function clearUpCrumbs () {
    const files = await getDiffingFiles()
    await processFiles(files)
}

module.exports  = { useCrumbs, clearUpCrumbs }