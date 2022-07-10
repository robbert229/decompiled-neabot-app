var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function l() {
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

var React = require('react'),
  s = (function (s) {
    'use strict';

    module35(v, s);

    var p = v,
      h = l(),
      y = function () {
        var t,
          n = module34(p);

        if (h) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function v() {
      module24(this, v);
      return y.apply(this, arguments);
    }

    module25(v, [
      {
        key: 'shouldComponentUpdate',
        value: function (t) {
          return !!t.shouldUpdate;
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
    return v;
  })(React.Component);

module.exports = s;
