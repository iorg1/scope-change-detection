describe('when comparing empty objects', function(){
  var ScopeChangeDetector = require('../src/scope-change-detection');

  it('should return an empty object', function(){
    var result = ScopeChangeDetector.getChangedScopes({}, {});
    expect(result).toEqual({});
  });
});
