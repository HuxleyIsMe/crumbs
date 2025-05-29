const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function getDiffingFiles() {

  const { stdout, stderr } = await exec('git diff --name-only $(git merge-base HEAD main)');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);

  console.log(typeof stdout)

  // ok probs do some error handling at some point

  // hm this comes out as a string how fun

  let asArray = stdout.split('\n')


  return asArray
}

module.exports = {getDiffingFiles}