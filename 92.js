var module11 = require('./11'),
  module24 = require('./24'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module93 = require('./93'),
  module97 = (function (n, t) {
    if (!t && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var o = p(t);
    if (o && o.has(n)) return o.get(n);
    var c = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in n)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(n, s)) {
        var u = l ? Object.getOwnPropertyDescriptor(n, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(c, s, u);
        else c[s] = n[s];
      }

    c.default = n;
    if (o) o.set(n, c);
    return c;
  })(require('./97'));

function p(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (p = function (n) {
    return n ? o : t;
  })(n);
}

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (n) {
    return false;
  }
}

var v,
  E = (function (n, ...args) {
    module35.default(p, n);

    var module11 = p,
      module93 = y(),
      f = function () {
        var n,
          o = module34.default(module11);

        if (module93) {
          var c = module34.default(this).constructor;
          n = Reflect.construct(o, arguments, c);
        } else n = o.apply(this, arguments);

        return module37.default(this, n);
      };

    function p() {
      var n;
      module24.default(this, p);
      (n = f.call(this, ...args)).name = '';
      return n;
    }

    return p;
  })(module93.default(Error)),
  h = false;

function j(n) {
  if (v && !h) {
    h = true;

    try {
      return v(n);
    } catch (n) {
    } finally {
      h = false;
    }
  }

  return n;
}

var k = 0;

function x(n, o, c) {
  var module113 = require('./113').default;

  if (module113) {
    var module109 = require('./109')(n),
      u = ++k,
      p = n.message || '',
      y = p;

    if (null != n.componentStack) y += '\n\nThis error is located at:' + n.componentStack;
    var v = null == n.name || '' === n.name ? '' : n.name + ': ';
    if (!y.startsWith(v)) y = v + y;
    y = null == n.jsEngine ? y : y + ', js engine: ' + n.jsEngine;
    var E = true !== n.forceRedbox,
      h = j({
        message: y,
        originalMessage: y === p ? null : p,
        name: null == n.name || '' === n.name ? null : n.name,
        componentStack: 'string' == typeof n.componentStack ? n.componentStack : null,
        stack: module109,
        id: u,
        isFatal: o,
        extraData: {
          jsEngine: n.jsEngine,
          rawStack: n.stack,
          suppressRedBox: E,
        },
      });
    if (c) console.error(h.message);
    if (E)
      module97.addException(
        module11.default({}, h, {
          isComponentError: !!n.isComponentError,
        })
      );
    module113.reportException(h);
  } else c && console.error(n);
}

var O = false;

function b() {
  if ((console._errorOriginal.apply(console, arguments), console.reportErrorsAsExceptions && !O))
    if (arguments[0] && arguments[0].stack) x(arguments[0], false, false);
    else {
      var module29 = require('./29').default,
        t = Array.prototype.map
          .call(arguments, function (t) {
            return 'string' == typeof t ? t : module29(t);
          })
          .join(' ');

      if ('Warning: ' === t.slice(0, 9)) return;
      var o = new E(t);
      o.name = 'console.error';
      x(o, false, false);
    }
}

module.exports = {
  handleException: function (n, t) {
    var o;
    o = n instanceof Error ? n : new E(n);

    try {
      O = true;
      x(o, t, true);
    } finally {
      O = false;
    }
  },
  installConsoleErrorReporter: function () {
    if (!console._errorOriginal) {
      console._errorOriginal = console.error.bind(console);
      console.error = b;
      if (undefined === console.reportErrorsAsExceptions) console.reportErrorsAsExceptions = true;
    }
  },
  SyntheticError: E,
  unstable_setExceptionDecorator: function (n) {
    v = n;
  },
};
