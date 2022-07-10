require('react');

var regeneratorRuntime = require('regenerator-runtime'),
  module809 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = u(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, l, f);
        else o[l] = t[l];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('./809'));

function u(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (u = function (t) {
    return t ? s : n;
  })(t);
}

exports.setLoginCredentials = function (t, u) {
  var o;
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            c.prev = 0;
            c.next = 3;
            return regeneratorRuntime.default.awrap(module809.setGenericPassword(t, u));

          case 3:
            o = c.sent;
            console.log('keychain data securely set  ', o);
            return c.abrupt('return', {
              status: true,
              response: o,
            });

          case 8:
            c.prev = 8;
            c.t0 = c.catch(0);
            console.log('keychain access failed ', c.t0);
            return c.abrupt('return', {
              status: false,
              error: c.t0,
            });

          case 12:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    [[0, 8]],
    Promise
  );
};

exports.getLoginCredentials = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            console.log('\u83b7\u53d6\u767b\u5f55\u8bc1\u4e66');
            u.prev = 1;
            u.next = 4;
            return regeneratorRuntime.default.awrap(module809.getGenericPassword());

          case 4:
            if (((t = u.sent), console.log('keychain get data ', t), !t)) {
              u.next = 11;
              break;
            }

            console.log('Credentials successfully loaded for user ' + t.username);
            return u.abrupt('return', t);

          case 11:
            return u.abrupt('return', false);

          case 14:
            u.prev = 14;
            u.t0 = u.catch(1);
            console.log('Cannot retrieve keychain data', u.t0);
            return u.abrupt('return', false);

          case 18:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    [[1, 14]],
    Promise
  );
};

exports.resetLoginCredentials = function () {
  var t;
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            u.prev = 0;
            u.next = 3;
            return regeneratorRuntime.default.awrap(module809.resetGenericPassword());

          case 3:
            t = u.sent;
            return u.abrupt('return', t);

          case 7:
            u.prev = 7;
            u.t0 = u.catch(0);
            console.log('cannot access or reset keychain data ', u.t0);
            return u.abrupt('return', false);

          case 11:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    [[0, 7]],
    Promise
  );
};
