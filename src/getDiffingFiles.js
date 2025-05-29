const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const path = require('path')


exports.getDiffingFiles = async () => {
  try {
    const { stdout } = await exec('git diff --name-only $(git merge-base HEAD main)')

    let files = stdout.split('\n').filter(Boolean)

    const ignoredPatterns = [
      'node_modules/',
      '.gitignore',
      'package-lock.json',
      /^.*config\.(js|ts|json)$/i,      
      /^.*\.config\.(js|ts|json)$/i,      
    ]

    const isIgnored = file =>
      ignoredPatterns.some(pattern =>
        typeof pattern === 'string'
          ? file.startsWith(pattern)
          : pattern.test(path.basename(file))
      )

    return files.filter(file => !isIgnored(file))
  } catch (err) {
    console.error(`Error loading file history`, err)
    return []
  }}
