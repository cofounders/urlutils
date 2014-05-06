var URI = require('URIjs');

var URL = function (url, base) {
  var uri = URI(url);

  if (typeof base === 'string') {
    uri.relativeTo(base);
  }

  var url = {};
 
  Object.defineProperty(url, 'origin', {
    get: function () {
      return uri.protocol() + '://' + uri.host();
    }
  });

  Object.defineProperty(url, 'protocol', {
    get: function () {
      return uri.protocol() + ':';
    }
  });

  'hash host hostname href password pathname port search username'
    .split(/\s+/)
    .forEach(function (property) {
      Object.defineProperty(url, property, {
        get: function () {
          return uri[property]();
        },
        set: function (value) {
          uri[property](value);
          return uri[property]();
        }
      });
    });

  url.prototype = URL.prototype;

  return url;
};

URL.prototype.toString = function () {
  return this.href;
};

module.exports = URL;
