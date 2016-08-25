# T-Unit
A unit testing folder for easy integration (uses Mocha and Chai)

* Copy the `test` folder into your project
* Write your tests in `tests/tests.js`
* Write your app code in `src/app.js`
* If you don't use the above filenames, change the appropriate lines in SpecRunner.html
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
![t-unit-demo](https://cloud.githubusercontent.com/assets/7908723/17982685/d95c7260-6abd-11e6-9c45-d394fcfdd5d7.gif)

The original Mocha CSS has a bad formatting problem: it doesn't allow long lines. When an error is listed, it's hard to find the line number where the error occurred, or error messages get visually cut off. Here are the improvements:
 * Errors can have word-wrapping to allow full display of the message
 * Remove margins to allow longer lines
 * Tweak background color so it's not a blazing white (easier on the eyes at night)