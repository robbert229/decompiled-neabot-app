exports.__esModule = true;
var t =
  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      };

exports.generateId = function (t) {
  return t || module734.default(7);
};

exports.getMethods = function (o) {
  if ('object' !== (undefined === o ? 'undefined' : t(o))) return;
  var u = undefined,
    c = undefined;
  if (o.__proto__) c = o.__proto__.__proto__;
  if (!c) c = o;
  Object.getOwnPropertyNames(c).forEach(function (t) {
    var o = Object.getOwnPropertyDescriptor(c, t);

    if (!(!o || 'get' in o || 'set' in o)) {
      var s = c[t];

      if ('function' == typeof s && 'constructor' !== t) {
        if (!u) u = [];
        u.push({
          name: t || s.name || 'anonymous',
          args: module733.default(s),
        });
      }
    }
  });
  return u;
};

exports.getActionsArray = function (t) {
  return Array.isArray(t) ? t : f(t);
};

exports.evalAction = function (t, n) {
  if ('string' == typeof t) return new Function('return ' + t)();
  var o = n[t.selected].func,
    u = p(t.args, t.rest);
  return o.apply(undefined, u);
};

exports.evalMethod = function (t, n) {
  if ('string' == typeof t) return new Function('return ' + t).call(n);
  var o = p(t.args, t.rest);
  return new Function('args', 'return this.' + t.name + '(args)').apply(n, o);
};

exports.stringify = function (t, n) {
  if (undefined === n) return y(t);
  if (true === n)
    return module616.default.stringify(
      t,
      function (t, n) {
        return n && 'function' == typeof n.toJS ? n.toJS() : n;
      },
      null,
      true
    );
  return module616.default.stringify(t, n.replacer, null, n.options);
};

exports.getSeralizeParameter = function (t, n) {
  var o = t.serialize;
  if (o)
    return true === o
      ? {
          options: true,
        }
      : o.immutable
      ? {
          replacer: module735.default(o.immutable, o.refs).replacer,
          options: o.options || true,
        }
      : o.replacer
      ? {
          replacer: o.replacer,
          options: o.options || true,
        }
      : {
          options: o.options,
        };
  var u = t[n];
  if (undefined === u) return undefined;
  else {
    console.warn(
      '`' +
        n +
        '` parameter for Redux DevTools Extension is deprecated. Use `serialize` parameter instead: https://github.com/zalmoxisus/redux-devtools-extension/releases/tag/v2.12.1'
    );
    return 'boolean' == typeof serializeState
      ? {
          options: u,
        }
      : 'function' == typeof serializeState
      ? {
          replacer: u,
        }
      : u;
  }
};

exports.getStackTrace = function (t, n) {
  if (!t.trace) return;
  if ('function' == typeof t.trace) return t.trace();
  var o = undefined,
    u = 0,
    c = undefined,
    s = t.traceLimit,
    f = Error();

  if (Error.captureStackTrace) {
    if (Error.stackTraceLimit < s) {
      c = Error.stackTraceLimit;
      Error.stackTraceLimit = s;
    }

    Error.captureStackTrace(f, n);
  } else u = 3;

  o = f.stack;
  if (c) Error.stackTraceLimit = c;

  if (u || 'number' != typeof Error.stackTraceLimit || Error.stackTraceLimit > s) {
    var l = o.split('\n');
    if (l.length > s) o = l.slice(0, s + u + ('Error' === l[0] ? 1 : 0)).join('\n');
  }

  return o;
};

var module733 = require('./733'),
  module616 = require('./616'),
  module734 = require('./734'),
  module735 = require('./735');

function f(o) {
  var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '',
    c = [];
  Object.keys(o).forEach(function (s) {
    var l = o[s];
    if ('function' == typeof l)
      c.push({
        name: u + (s || l.name || 'anonymous'),
        func: l,
        args: module733.default(l),
      });
    else if ('object' === (undefined === l ? 'undefined' : t(l))) c = c.concat(f(l, u + s + '.'));
  });
  return c;
}

var l = function (t) {
  return new Function('return ' + t)();
};

function p(t, n) {
  var o = t.map(l);
  if (!n) return o;
  var u = l(n);
  if (Array.isArray(u)) return o.concat.apply(o, u);
  throw new Error('rest must be an array');
}

function y(t) {
  try {
    return JSON.stringify(t);
  } catch (n) {
    return module616.default.stringify(t, null, null, {
      circular: '[CIRCULAR]',
    });
  }
}
