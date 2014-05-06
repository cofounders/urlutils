var expect = require('chai').expect;
var URL = require('../');

describe('URL', function () {
  it('simple output', function () {
    with (new URL('https://www.example.com:8080/search?foo=bar#lol')) {
      expect(href).to.equal('https://www.example.com:8080/search?foo=bar#lol');
      expect(protocol).to.equal('https:');
      expect(host).to.equal('www.example.com:8080');
      expect(hostname).to.equal('www.example.com');
      expect(port).to.equal('8080');
      expect(search).to.equal('?foo=bar');
      expect(hash).to.equal('#lol');
    }
  });
  it('modifying the URL', function () {
    with (new URL('https://www.example.com:8080/search?foo=bar#lol')) {
      port = 8888;
      expect(href).to.equal('https://www.example.com:8888/search?foo=bar#lol');
    }
  });
});
