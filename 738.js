exports.__esModule = true;

var o =
    Object.assign ||
    function (o) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];

        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (o[c] = t[c]);
      }

      return o;
    },
  n =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (o) {
          return typeof o;
        }
      : function (o) {
          return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o;
        };

exports.default = function (c) {
  if ('object' === ('undefined' == typeof window ? 'undefined' : n(window)) && 'object' === n(window.onerror))
    window.onerror = function (o, n, s, l, u) {
      var f = {
        type: t,
        message: o,
        url: n,
        lineNo: s,
        columnNo: l,
      };
      if (u && u.stack) f.stack = u.stack;
      c(f);
      return false;
    };
  else if (undefined !== globals && globals.ErrorUtils)
    globals.ErrorUtils.setGlobalHandler(function (o, n) {
      c({
        type: t,
        error: o,
        isFatal: n,
      });
    });

  if (!('object' !== ('undefined' == typeof console ? 'undefined' : n(console)) || 'function' != typeof console.error || console.beforeRemotedev)) {
    console.beforeRemotedev = console.error.bind(console);

    console.error = function () {
      var n = {
          type: t,
        },
        s = arguments[0];
      n.message = s.message ? s.message : s;
      if (s.sourceURL)
        n = o({}, n, {
          sourceURL: s.sourceURL,
          line: s.line,
          column: s.column,
        });
      if (s.stack) n.stack = s.stack;
      c(n);
      console.beforeRemotedev.apply(null, arguments);
    };
  }
};

var t = '@@remotedev/ERROR';
