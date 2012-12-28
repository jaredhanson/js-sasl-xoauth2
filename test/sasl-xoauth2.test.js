(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('../main'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-xoauth2'], factory);
  }
}(this, function(saslxoauth2) {

  describe('sasl-xoauth2', function() {
    
    it('should export Mechanism', function() {
      expect(saslxoauth2.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslxoauth2).to.equal(saslxoauth2.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-xoauth2' };
  
}));
