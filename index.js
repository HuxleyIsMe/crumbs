const { getDiffingFiles } = require('./src/index')

console.log({getDiffingFiles})
function useCrumbs() {
/**
 * The same as console log just designed to automatically be removed
 */
  console.crumb = console.log
  console.crumb('hello')
  return console
}

/**
 * Command for git diffing and file names only: 
 * 
 *  git diff --name-only
 */


function clearUpConsoleCrumbs () {

    // search through files and strip and console.crumb
}

function clearUpConsoleComments () {
    // search through files and strip // @crumb comments out
}

function getTouchedFiles() {}

function clearUpCrumbs () {
    // get files changed
    getDiffingFiles()

    // 
}

module.exports  = { useCrumbs, clearUpCrumbs }