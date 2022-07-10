var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react');

function s() {
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

var p = (function (t) {
  module35.default(y, t);

  var p = y,
    h = s(),
    v = function () {
      var t,
        n = module34.default(p);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y() {
    module24.default(this, y);
    return v.apply(this, arguments);
  }

  module25.default(y, [
    {
      key: 'shouldComponentUpdate',
      value: function (t) {
        return t.shouldUpdate;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props.children;
        return null === t || false === t ? null : React.Children.only(t);
      },
    },
  ]);
  return y;
})(React.Component);

exports.default = p;
