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
  module1150 = require('./1150'),
  v = (function (f) {
    'use strict';

    module35(p, f);

    var module1150 = p,
      v = l(),
      y = function () {
        var t,
          n = module34(module1150);

        if (v) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function p() {
      module24(this, p);
      return y.apply(this, arguments);
    }

    module25(p, [
      {
        key: 'setNativeProps',
        value: function (t) {},
      },
      {
        key: 'flashScrollIndicators',
        value: function () {},
      },
      {
        key: 'getScrollResponder',
        value: function () {},
      },
      {
        key: 'getScrollableNode',
        value: function () {},
      },
      {
        key: 'getMetrics',
        value: function () {},
      },
      {
        key: 'scrollTo',
        value: function () {},
      },
      {
        key: 'scrollToEnd',
        value: function (t) {},
      },
    ]);
    return p;
  })(React.Component);

v.DataSource = module1150;
module.exports = v;
