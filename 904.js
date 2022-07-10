var module886 = require('./886');

module.exports = module886.isStandardBrowserEnv()
  ? (function () {
      var o,
        n = /(msie|trident)/i.test(navigator.userAgent),
        h = document.createElement('a');

      function s(t) {
        var o = t;

        if (n) {
          h.setAttribute('href', o);
          o = h.href;
        }

        h.setAttribute('href', o);
        return {
          href: h.href,
          protocol: h.protocol ? h.protocol.replace(/:$/, '') : '',
          host: h.host,
          search: h.search ? h.search.replace(/^\?/, '') : '',
          hash: h.hash ? h.hash.replace(/^#/, '') : '',
          hostname: h.hostname,
          port: h.port,
          pathname: '/' === h.pathname.charAt(0) ? h.pathname : '/' + h.pathname,
        };
      }

      o = s(window.location.href);
      return function (n) {
        var h = module886.isString(n) ? s(n) : n;
        return h.protocol === o.protocol && h.host === o.host;
      };
    })()
  : function () {
      return true;
    };
