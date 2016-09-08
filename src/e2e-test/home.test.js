describe('My DC Universe App', function() {
  it('should have a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('myApp');
  });

  describe('navigation', function() {
    beforeEach(function() {
      browser.get('/');
    });

    it('defaults to home', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/');
    });
  });
});