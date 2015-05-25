[![Build Status](https://travis-ci.org/BernardoSilva/angular-truncate.svg?branch=master)](https://travis-ci.org/BernardoSilva/angular-truncate) [![Coverage Status](https://coveralls.io/repos/BernardoSilva/angular-truncate/badge.svg)](https://coveralls.io/r/BernardoSilva/angular-truncate)

Angular Truncate
----------------

This project is a filter for Angularjs to truncate text strings to a set number of characters or words and
add ellipses when needed.

[Demo](http://bernardosilva.github.io/angular-truncate/)

## Install

You can install this package with `bower`, `npm` and `gem`.

### bower

```shell
bower install angular-truncate-2
```

The files are then available at `bower_components/angular-truncate-2/src/truncate.js`

### npm

```shell
npm install angular-truncate-2
```

The files are then available at `node_modules/angular-truncate-2/src/truncate.js`


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
<script src="truncate.js"></script>
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
