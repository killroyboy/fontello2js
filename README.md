# grunt-fontello2js

> Generate a Javascript Module file for referencing font icons based on a fontello config file

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fontello2js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fontello2js');
```

## The "fontello2js" task

### Overview
In your project's Gruntfile, add a section named `fontello2js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fontello2js: {
    your_target: {
      src: [path to fontello config.json],
      dest: [destination path for resulting js module]
    },
  },
})
```

### Options

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  fontello2js: {
    files: {
      src: 'test/fixtures/config.json',
      dest: 'tmp/result.js'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Initial Release

## License
Copyright (c) 2015 Dan Wilson. Licensed under the MIT license.
