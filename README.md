eslint-config
=============================

The ComparaOnline linter shareable configuration for javascript.

# Installation

First, you need eslint, if it isn't installed yet...

```
$ npm install --save-dev eslint
```

Then,

```
$ npm install --save-dev @comparaonline/eslint-config-react
```

# Usage

Add this package into the `extends` section of your `.eslintrc.js` file.

```js
{
  extends: '@comparaonline/eslint-config-react'
}
```

Now you can execute `eslint` in a npm script, as example:

```
"scripts": {
  "lint:js": "eslint 'app/**/*.js'"
}
```
