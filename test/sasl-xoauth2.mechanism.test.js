(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-xoauth2/lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-xoauth2/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named XOAUTH2', function() {
      expect(mech.name).to.equal('XOAUTH2');
    });
    
    it('should be client first', function() {
      expect(mech.clientFirst).to.equal(true);
    });
    
    it('should encode credentials', function() {
      expect(mech.response({ username: 'someuser@example.com', token: 'vF9dft4qmTc2Nvb3RlckBhdHRhdmlzdGEuY29tCg==' })).to.equal('user=someuser@example.com\u0001auth=Bearer vF9dft4qmTc2Nvb3RlckBhdHRhdmlzdGEuY29tCg==\u0001\u0001');
    });
    
    it('should have challenge function', function() {
      expect(mech.challenge).to.be.a('function');
    });
    
  });
  
  return { name: 'test.sasl-xoauth2.mechanism' };
  
}));
