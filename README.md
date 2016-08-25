# T-Unit
A unit testing folder for easy integration (uses Mocha and Chai)

* Copy the `test` folder into your project
* Write your tests in `tests/tests.js`
* Write your app code in `src/app.js`
* If you don't use the above filenames, change the appropriate lines in SpecRunner.html
* Run your tests in a browser by opening `SpecRunner.html`

```
Mocha is a testing framework that can be run in a browser or on the server in Node.JS.
Chai is an assertion library that allows you to test expected behavior
by composing expectations in a friendly BDD style or a more traditional TDD style.
```

## Demo of BDD Style Testing
There are 2 sample files:
 - `tests/tests.sample.js`
 - `app/app.sample.js`

They have sample tests for you to see the English-like sentence structure of Behavior Driven Development style unit testing. To run the sample tests, replace the original `tests.js` and `app.js` with the above files and open `SpecRunner.html` in your browser. To see all the available test functions, check out the [Chai BDD API Reference](http://chaijs.com/api/bdd/).