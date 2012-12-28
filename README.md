# SASL : XOAUTH2

This module is a JavaScript implementation of the XOAUTH2 SASL mechanism, which
plugs into the [SASL](https://github.com/jaredhanson/js-sasl) framework.

## Install

##### npm

    $ npm install sasl-xoauth2

##### volo

    $ volo add jaredhanson/js-sasl-xoauth2 sasl-xoauth2

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

Register the XOAUTH2 mechanism.

```javascript
factory.use(require('sasl-xoauth2'));
```

Send an authentication response with necessary credentials.

```
var mech = factory.create(['XOAUTH2']);
var resp = mech.response({ username: 'someuser@example.com', token: 'vF9dft4qmTc2Nvb3RlckBhdHRhdmlzdGEuY29tCg==' });
```

## Compatibility

##### Browser

This module is [AMD](https://github.com/amdjs/amdjs-api)-compliant, and can be
loaded by module loaders such as [RequireJS](http://requirejs.org/).

This module is optimized for use with [Anchor](https://github.com/anchorjs/anchor).

##### Node

This module is compatible with [Node](http://nodejs.org/).

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

##### Node

To run tests in Node:

    $ make test-node
    
##### Status

[![Travis CI](https://secure.travis-ci.org/jaredhanson/js-sasl-xoauth2.png)](http://travis-ci.org/jaredhanson/js-sasl-xoauth2)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
