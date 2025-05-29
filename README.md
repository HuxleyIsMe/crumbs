# Crumbs

Ah crumbs, thats annoying, i like to work with a lot of console.logs and comments in my code especially when dealing with confusing issues, but without fail i'll forget to clean those up before opening the pr, and we will waste a PR cycle with me simply having to remove these comments :sigh:

No longer! now i can simply run a clean up before opening PR and i can be sure all of my crumbs will be swept up!

## how to use

installing

as a dev dependency 

`npm install crumbs --save-dev`

in your main entry point:

<code>

    const { useCrumbs } = require('crumbs');

    if (process.env.NODE_ENV !== 'production') {
    useCrumbs();
    }
</code>

Now you can crumb away! leave
a `console.crumb()` or `// @crumb `

anywhere in your code, then when it comes time to open up that pr you can run

`npm run clear-crumbs`

bam never a stray console or comment left! 

