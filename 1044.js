var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  React = require('react');

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

var module1045 = require('./1045'),
  module1046 = require('./1046'),
  module1051 = require('./1051'),
  module1052 = require('./1052'),
  module1035 = require('./1035'),
  module1043 = require('./1043').Map,
  S = module1045.Interpolators,
  T = 'android' === ReactNative.Platform.OS ? module1046 : module1051,
  PropTypes = require('prop-types'),
  I = S.map(function () {
    return {
      style: {},
    };
  }),
  w = S.map(function () {
    return {
      style: {},
    };
  }),
  E = S.map(function () {
    return {
      style: {},
    };
  }),
  b = S.map(function () {
    return {
      style: {},
    };
  }),
  P = S.map(function () {
    return {
      style: {},
    };
  });

function C(t) {
  return undefined !== t.presentedIndex ? t.presentedIndex : t.observedTopOfStack;
}

function M(t, o) {
  return t === o ? module1045.Center[t] : t < o ? module1045.Left[t] : module1045.Right[t];
}

var V = (function (t, ...args) {
  module35.default(T, t);

  var module1045 = T,
    module1046 = f(),
    v = function () {
      var t,
        o = module34.default(module1045);

      if (module1046) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    var t;
    module24.default(this, T);

    (t = v.call(this, ...args))._getBreadcrumb = function (o, n) {
      var s = t.props.navState.routeStack.length <= 1 && 0 === n ? 'none' : 'auto',
        u = t.props.routeMapper,
        p = M(n, C(t.props.navState));
      return React.default.createElement(
        ReactNative.View,
        {
          key: 'crumb_' + n,
          pointerEvents: s,
          ref: 'crumb_' + n,
          style: p.Crumb,
        },
        React.default.createElement(
          ReactNative.View,
          {
            ref: 'icon_' + n,
            style: p.Icon,
          },
          u.iconForRoute(o, t.props.navigator)
        ),
        React.default.createElement(
          ReactNative.View,
          {
            ref: 'separator_' + n,
            style: p.Separator,
          },
          u.separatorForRoute(o, t.props.navigator)
        )
      );
    };

    t._getTitle = function (o, n) {
      if (t._descriptors.title.has(o)) return t._descriptors.title.get(o);
      var s = t.props.routeMapper.titleContentForRoute(t.props.navState.routeStack[n], t.props.navigator),
        u = M(n, C(t.props.navState)),
        p = React.default.createElement(
          ReactNative.View,
          {
            key: 'title_' + n,
            ref: 'title_' + n,
            style: u.Title,
          },
          s
        );
      t._descriptors.title = t._descriptors.title.set(o, p);
      return p;
    };

    t._getRightButton = function (o, n) {
      if (t._descriptors.right.has(o)) return t._descriptors.right.get(o);
      var s = t.props.routeMapper.rightContentForRoute(t.props.navState.routeStack[n], t.props.navigator);

      if (!s) {
        t._descriptors.right = t._descriptors.right.set(o, null);
        return null;
      }

      var u = M(n, C(t.props.navState)),
        p = React.default.createElement(
          ReactNative.View,
          {
            key: 'right_' + n,
            ref: 'right_' + n,
            style: u.RightItem,
          },
          s
        );
      t._descriptors.right = t._descriptors.right.set(o, p);
      return p;
    };

    return t;
  }

  module25.default(T, [
    {
      key: '_updateIndexProgress',
      value: function (t, o, n, s) {
        var u,
          p = s > n ? t : 1 - t,
          c = o - n,
          l = o - s;
        module1035(S[o], 'Cannot find breadcrumb interpolators for ' + o);
        if (
          (u =
            (c > 0 && 0 === l) || (l > 0 && 0 === c)
              ? S[o].RightToCenter
              : (c < 0 && 0 === l) || (l < 0 && 0 === c)
              ? S[o].CenterToLeft
              : c === l
              ? S[o].RightToCenter
              : S[o].RightToLeft).Crumb(I[o].style, p)
        )
          this._setPropsIfExists('crumb_' + o, I[o]);
        if (u.Icon(w[o].style, p)) this._setPropsIfExists('icon_' + o, w[o]);
        if (u.Separator(E[o].style, p)) this._setPropsIfExists('separator_' + o, E[o]);
        if (u.Title(b[o].style, p)) this._setPropsIfExists('title_' + o, b[o]);
        var f = this.refs['right_' + o],
          h = P[o].style;
        if (f && u.RightItem(h, p))
          f.setNativeProps({
            style: h,
            pointerEvents: 0 === h.opacity ? 'none' : 'auto',
          });
      },
    },
    {
      key: 'updateProgress',
      value: function (t, o, n) {
        for (var s = o ** n, u = o ** n; u <= s; u++) this._updateIndexProgress(t, u, o, n);
      },
    },
    {
      key: 'onAnimationStart',
      value: function (t, o) {
        for (var n = t ** o, s = t ** o; s <= n; s++) this._setRenderViewsToHardwareTextureAndroid(s, true);
      },
    },
    {
      key: 'onAnimationEnd',
      value: function () {
        for (var t = this.props.navState.routeStack.length - 1, o = 0; o <= t; o++) this._setRenderViewsToHardwareTextureAndroid(o, false);
      },
    },
    {
      key: '_setRenderViewsToHardwareTextureAndroid',
      value: function (t, o) {
        var n = {
          renderToHardwareTextureAndroid: o,
        };

        this._setPropsIfExists('icon_' + t, n);

        this._setPropsIfExists('separator_' + t, n);

        this._setPropsIfExists('title_' + t, n);

        this._setPropsIfExists('right_' + t, n);
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        this._reset();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props.navState,
          o = t && t.routeStack.map(this._getBreadcrumb),
          n = t.routeStack.map(this._getTitle),
          s = t.routeStack.map(this._getRightButton);
        return React.default.createElement(
          ReactNative.View,
          {
            key: this._key,
            style: [A.breadCrumbContainer, this.props.style],
          },
          n,
          o,
          s
        );
      },
    },
    {
      key: 'immediatelyRefresh',
      value: function () {
        this._reset();

        this.forceUpdate();
      },
    },
    {
      key: '_reset',
      value: function () {
        this._key = module1052();
        this._descriptors = {
          title: new module1043(),
          right: new module1043(),
        };
      },
    },
    {
      key: '_setPropsIfExists',
      value: function (t, o) {
        if ((t = this.refs[t])) t.setNativeProps(o);
      },
    },
  ]);
  return T;
})(React.default.Component);

V.propTypes = {
  navigator: PropTypes.shape({
    push: PropTypes.func,
    pop: PropTypes.func,
    replace: PropTypes.func,
    popToRoute: PropTypes.func,
    popToTop: PropTypes.func,
  }),
  routeMapper: PropTypes.shape({
    rightContentForRoute: PropTypes.func,
    titleContentForRoute: PropTypes.func,
    iconForRoute: PropTypes.func,
  }),
  navState: PropTypes.shape({
    routeStack: PropTypes.arrayOf(PropTypes.object),
    presentedIndex: PropTypes.number,
  }),
  style: ReactNative.ViewPropTypes.style,
};
V.Styles = module1045;
var A = ReactNative.StyleSheet.create({
  breadCrumbContainer: {
    overflow: 'hidden',
    position: 'absolute',
    height: T.General.TotalNavHeight,
    top: 0,
    left: 0,
    right: 0,
  },
});
module.exports = V;
