var module886 = require('./886'),
  module894 = require('./894'),
  module895 = require('./895'),
  s = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

function c(n, o) {
  if (!module886.isUndefined(n) && module886.isUndefined(n['Content-Type'])) n['Content-Type'] = o;
}

function f(n, o, s) {
  if (module886.isString(n))
    try {
      (o || JSON.parse)(n);
      return module886.trim(n);
    } catch (t) {
      if ('SyntaxError' !== t.name) throw t;
    }
  return (s || JSON.stringify)(n);
}

var p,
  module896 = {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter:
      ('undefined' != typeof XMLHttpRequest
        ? (p = require('./896'))
        : 'undefined' != typeof process && '[object process]' === Object.prototype.toString.call(process) && (p = require('./896')),
      p),
    transformRequest: [
      function (o, s) {
        module894(s, 'Accept');
        module894(s, 'Content-Type');
        return module886.isFormData(o) || module886.isArrayBuffer(o) || module886.isBuffer(o) || module886.isStream(o) || module886.isFile(o) || module886.isBlob(o)
          ? o
          : module886.isArrayBufferView(o)
          ? o.buffer
          : module886.isURLSearchParams(o)
          ? (c(s, 'application/x-www-form-urlencoded;charset=utf-8'), o.toString())
          : module886.isObject(o) || (s && 'application/json' === s['Content-Type'])
          ? (c(s, 'application/json'), f(o))
          : o;
      },
    ],
    transformResponse: [
      function (n) {
        var s = this.transitional,
          c = s && s.silentJSONParsing,
          f = s && s.forcedJSONParsing,
          p = !c && 'json' === this.responseType;
        if (p || (f && module886.isString(n) && n.length))
          try {
            return JSON.parse(n);
          } catch (t) {
            if (p) {
              if ('SyntaxError' === t.name) throw module895(t, this, 'E_JSON_PARSE');
              throw t;
            }
          }
        return n;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
  };
module896.headers = {
  common: {
    Accept: 'application/json, text/plain, */*',
  },
};
module886.forEach(['delete', 'get', 'head'], function (t) {
  module896.headers[t] = {};
});
module886.forEach(['post', 'put', 'patch'], function (n) {
  module896.headers[n] = module886.merge(s);
});
module.exports = module896;
