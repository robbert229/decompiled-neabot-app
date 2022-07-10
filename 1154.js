var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function f() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var React = (function (s) {
  module35(y, s);

  var l = y,
    p = f(),
    h = function () {
      var t,
        n = module34(l);

      if (p) {
        var o = module34(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37(this, t);
    };

  function y() {
    module24(this, y);
    return h.apply(this, arguments);
  }

  module25(y, [
    {
      key: 'shouldComponentUpdate',
      value: function (t) {
        return t.shouldUpdate;
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.render();
      },
    },
  ]);
  return y;
})(require('react').Component);

module.exports = React;
