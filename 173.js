require('./189');

require('react');

require('./48');

var module174 = require('./174'),
  module84 = require('./84').findNodeHandle,
  t = null,
  o = new Set();

function l(n) {
  if (t !== n && null != n) t = n;
}

function f(n) {
  if (t === n && null != n) t = null;
}

module.exports = {
  currentlyFocusedInput: function () {
    return t;
  },
  focusInput: l,
  blurInput: f,
  currentlyFocusedField: function () {
    return module84(t);
  },
  focusField: function (n) {},
  blurField: function (n) {},
  focusTextInput: function (u) {
    if ('number' != typeof u && t !== u && null != u) {
      l(u);
      module174.Commands.focus(u);
    }
  },
  blurTextInput: function (u) {
    if ('number' != typeof u && t === u && null != u) {
      f(u);
      module174.Commands.blur(u);
    }
  },
  registerInput: function (n) {
    if ('number' != typeof n) o.add(n);
  },
  unregisterInput: function (n) {
    if ('number' != typeof n) o.delete(n);
  },
  isTextInput: function (n) {
    return 'number' != typeof n && o.has(n);
  },
};
