Angular Truncate
----------------

[![License](https://img.shields.io/npm/l/angular-truncate-2.svg)](http://bower.io/search/?q=angular-truncate-2)
[![Build Status](https://travis-ci.org/BernardoSilva/angular-truncate-2.svg?branch=master)](https://travis-ci.org/BernardoSilva/angular-truncate-2)
[![Coverage Status](https://coveralls.io/repos/BernardoSilva/angular-truncate-2/badge.svg)](https://coveralls.io/r/BernardoSilva/angular-truncate-2)
[![Bower](https://img.shields.io/bower/v/angular-truncate-2.svg)](http://bower.io/search/?q=angular-truncate-2)
[![NPM](https://img.shields.io/npm/v/angular-truncate-2.svg)](https://www.npmjs.com/package/angular-truncate-2)


This project is a filter for Angularjs to truncate text strings to a set number of characters or words and
add ellipses when needed.

[Demo](http://bernardosilva.github.io/angular-truncate-2/)

## Install

You can install this package with `bower`, `npm` and `gem`.

### bower

[View in Bower](http://bower.io/search/?q=angular-truncate-2)

```shell
bower install angular-truncate-2
```

The files are then available at `bower_components/angular-truncate-2/src/angular-truncate-2.js`

### npm

[View in NPM](https://www.npmjs.com/package/angular-truncate-2)

```shell
npm install angular-truncate-2
```

The files are then available at `node_modules/angular-truncate-2/src/angular-truncate-2.js`


### gem

Converted using [rails-asset](https://rails-assets.org/).

```shell
gem 'rails-assets-angular-truncate-2'
```
Include following in application.js:
```js
//= require angular-truncate-2
```

## How to use angular truncate


###Include the javascript file.

``` html
<script src="angular-truncate-2.min.js"></script>
```

###Inject the `truncate` filter into your app module.

```javascript
var myApp = angular.module('myApp', ['truncate']);
```

###When outputting text, apply the filter.
```html
 <p>
    {{ text | characters:25 }} or {{ text | words:5 }}
</p>
```

By default, a _word_ will not be truncated. Set the optional boolean after the character count to true.
```html
 <p>
     {{ text | characters:25 :true}}
 </p>
 ```

Filters can also be chained together. It will truncate after 25 words or before 25 words if the 100 character limit is reached.
 ```html
  <p>
     {{ text | words:25 | characters: 100}}
 </p>
 ```

## How contribute

* Fork the repository
* Do your changes/suggestions
* Create a Pull Request


### How to run tests

```sh
npm test
```


This project is based on [angular-truncate](https://github.com/sparkalow/angular-truncate) created by Brian Mathews.
