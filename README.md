# T-Unit
A unit testing folder for easy integration (uses Mocha and Chai)

* Copy the `test` folder into your project
* Write your tests in `tests/tests.js`
* Write your app code in `src/app.js`
* *If you don't use the above filenames, change the appropriate lines in SpecRunner.html*
* Run your tests in a browser by opening `SpecRunner.html`

```
Mocha is a testing framework that can be run in a browser or on the server in Node.JS.
Chai is an assertion library that allows you to test desired behavior by composing 
expectations in a friendly BDD style or a more traditional TDD style.
```

## Demo of BDD Style Testing
There are 2 sample files:
 - `tests/tests.js.sample`
 - `app/app.js.sample`

They have sample tests for you to see the English-like sentence structure of Behavior Driven Development style unit testing. To run the sample tests, replace the original `tests.js` and `app.js` with the above files and open `SpecRunner.html` in your browser. To see all the available test functions, check out the [Chai BDD API Reference](http://chaijs.com/api/bdd/).

## Improved SpecRunner Layout
![t-unit-demo](https://cloud.githubusercontent.com/assets/7908723/17983339/f1394496-6ac0-11e6-9ce9-1904f84b77c5.gif)

The original Mocha CSS has a bad formatting problem: it doesn't allow long lines. When an error is listed, it's hard to find the line number where the error occurred, or error messages get visually cut off. Here are the improvements:
 * Errors can have word-wrapping to allow full display of the message
 * Remove margins to allow longer lines for side-by-side window layout
 * Tweak background color so it's not a blazing white (easier on the eyes at night)
 * Fix display of bad "play button" characters: â€ [(Issue #2283)](https://github.com/mochajs/mocha/issues/2283#issuecomment-238116979)

## Credits
The testing folder is based off of Andrew Smith's instructions with some CSS improvements and removal of jQuery reliance. See his article: ["Beginner's guide to testing with Mocha & Chai"](http://www.andrewsouthpaw.com/2015/01/08/beginners-guide-to-testing-with-mocha-chai/)
