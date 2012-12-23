(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  }
}(this, function(exports, module) {

  /**
   * XOAUTH2 `Mechanism` constructor.
   *
   * This class implements the XOAUTH2 SASL mechanism.
   *
   * The XOAUTH2 SASL mechanism provides support for using OAuth 2.0 access
   * tokens for authentication.  This mechanism is defined by Google and
   * implemented in Gmail.
   *
   * References:
   *  - [XOAUTH2 Mechanism](https://developers.google.com/google-apps/gmail/xoauth2_protocol)
   *
   * @api public
   */
  function Mechanism() {
  }
  
  Mechanism.prototype.name = 'XOAUTH2';
  Mechanism.prototype.clientFirst = true;
  
  /**
   * Encode a response using given credential.
   *
   * Options:
   *  - `username`
   *  - `token`
   *
   * @param {Object} cred
   * @api public
   */
  Mechanism.prototype.response = function(cred) {
    var str = '';
    str += 'user=' + cred.username;
    str += '\1';
    str += 'auth=Bearer ' + cred.token;
    str += '\1\1';
    return str;
  };
  
  /**
   * Decode a challenge issued by the server.
   *
   * @param {String} chal
   * @api public
   */
  Mechanism.prototype.challenge = function(chal) {
  };

  exports = module.exports = Mechanism;
  
}));
