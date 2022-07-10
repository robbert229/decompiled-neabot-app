var module11 = require('./11'),
  React = require('react'),
  module403 = require('./403'),
  module1097 = require('./1097'),
  l = {
    duration: 3,
    onClose: function () {},
    mask: true,
    stackable: true,
  },
  c = module11.default({}, l),
  s = {};

function v(n) {
  module403.default.remove(n);
  delete s[n];
}

function k() {
  Object.keys(s).forEach(function (n) {
    return module403.default.remove(Number.parseInt(n, 10));
  });
}

function C(n, l) {
  var C = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : c.duration,
    p = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : c.onClose,
    y = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : c.mask,
    b = module11.default(module11.default({}, c), {
      content: n,
      type: l,
      duration: C,
      onClose: p,
      mask: y,
    });
  if ('string' != typeof n) b = module11.default(module11.default({}, b), n);
  if (!b.stackable) k();
  var h = module403.default.add(
    React.default.createElement(module1097.default, {
      content: b.content,
      duration: b.duration,
      onClose: b.onClose,
      type: b.type,
      mask: b.mask,
      onAnimationEnd: function () {
        v(h);
      },
    })
  );
  s[h] = 1;
  return h;
}

var p = {
  SHORT: 3,
  LONG: 8,
  defaultConfig: l,
  getConfig: function () {
    return module11.default({}, c);
  },
  config: function (n) {
    c = module11.default(module11.default({}, c), n);
  },
  show: function (n, t, o) {
    return C(n, 'info', t, function () {}, o);
  },
  info: function (n, t, o, u) {
    return C(n, 'info', t, o, u);
  },
  success: function (n, t, o, u) {
    return C(n, 'success', t, o, u);
  },
  fail: function (n, t, o, u) {
    return C(n, 'fail', t, o, u);
  },
  offline: function (n, t, o, u) {
    return C(n, 'offline', t, o, u);
  },
  loading: function (n, t, o, u) {
    return C(n, 'loading', t, o, u);
  },
  remove: v,
  removeAll: k,
};
exports.default = p;
