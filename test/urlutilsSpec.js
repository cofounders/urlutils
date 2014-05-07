var expect = require('chai').expect;
var URL = require('../');

describe('URL', function () {
  it('converts to a string', function () {
    expect('' + (new URL('http://example.com/')))
      .to.equal('http://example.com/');
  });

  it('has getters for all parts', function () {
    with (new URL('https://www.example.com:8080/search?foo=bar#lol')) {
      expect(href).to.equal('https://www.example.com:8080/search?foo=bar#lol');
      expect(protocol).to.equal('https:');
      expect(host).to.equal('www.example.com:8080');
      expect(hostname).to.equal('www.example.com');
      expect(port).to.equal('8080');
      expect(search).to.equal('?foo=bar');
      expect(hash).to.equal('#lol');
      expect(origin).to.equal('https://www.example.com:8080');
    }
  });

  it('has setters for all parts', function () {
    with (new URL('https://www.example.com:8080/search?foo=bar#lol')) {
      port = 8888;
      expect(port).to.equal('8888');
      hash = 'lulz';
      expect(hash).to.equal('#lulz');
    }
  });

  it('generate URL relative to base URL', function () {
    expect(new URL('foo', 'http://example.com').href)
      .to.equal('http://example.com/foo');
  });
});
