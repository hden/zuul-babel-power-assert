# zuul-babel-power-assert
Minimal setup for running browser tests with [power-assert](https://github.com/power-assert-js/power-assert), ES6, and [zuul](https://github.com/defunctzombie/zuul).

## Install dependencies

```sh
npm install --save-dev babel-plugin-espower babelify power-assert zuul
```

## .zuul.yml

```yaml
# .zuul.yml
ui: mocha-bdd
browserify:
  - transform:
      name: babelify
      plugins:
        - babel-plugin-espower
```

## Local browser tests

Tests can also be run in [phantomjs](https://github.com/defunctzombie/zuul/wiki/Phantom-js)

```sh
zuul --local 8080 --open -- test/index.js
```
