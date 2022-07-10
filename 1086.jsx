var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1087 = require('./1087');

function h() {
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
  ReactNative = require('react-native'),
  y = ReactNative.UIManager,
  module280 = require('./280'),
  module1088 = require('./1088'),
  w = 'viewPager',
  _ = 'RNCViewPager';

function M(t) {
  return y.getViewManagerConfig ? y.getViewManagerConfig(t) : y[t];
}

var V = (function (t, ...args) {
  module35.default(A, t);

  var V = A,
    R = h(),
    N = function () {
      var t,
        n = module34.default(V);

      if (R) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function A() {
    var t;
    module24.default(this, A);

    (t = N.call(this, ...args)).getInnerViewNode = function () {
      return t.refs[w].getInnerViewNode();
    };

    t._onPageScroll = function (n) {
      if (t.props.onPageScroll) t.props.onPageScroll(n);
      if ('on-drag' === t.props.keyboardDismissMode) module280();
    };

    t._onPageScrollStateChanged = function (n) {
      if (t.props.onPageScrollStateChanged) t.props.onPageScrollStateChanged(n);
    };

    t._onPageSelected = function (n) {
      if (t.props.onPageSelected) t.props.onPageSelected(n);
    };

    t.setPage = function (n) {
      y.dispatchViewManagerCommand(ReactNative.findNodeHandle(module39.default(t)), M(_).Commands.setPage, [n]);
    };

    t.setPageWithoutAnimation = function (n) {
      y.dispatchViewManagerCommand(ReactNative.findNodeHandle(module39.default(t)), M(_).Commands.setPageWithoutAnimation, [n]);
    };

    return t;
  }

  module25.default(A, [
    {
      key: 'componentDidMount',
      value: function () {
        if (null != this.props.initialPage) this.setPageWithoutAnimation(this.props.initialPage);
      },
    },
    {
      key: 'render',
      value: function () {
        return <module1088 />;
      },
    },
  ]);
  return A;
})(React.Component);

module.exports = V;
