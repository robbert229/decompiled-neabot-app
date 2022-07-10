var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native');

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

var React = require('react'),
  module1046 = require('./1046'),
  module1051 = require('./1051'),
  PropTypes = require('prop-types'),
  module1052 = require('./1052'),
  module1043 = require('./1043').Map,
  b = ['Title', 'LeftButton', 'RightButton'],
  P = 'android' === ReactNative.Platform.OS ? module1046 : module1051,
  k = function (t) {
    return undefined !== t.presentedIndex ? t.presentedIndex : t.observedTopOfStack;
  },
  x = (function (t, ...args) {
    module35.default(P, t);

    var module1046 = P,
      module1051 = f(),
      S = function () {
        var t,
          n = module34.default(module1046);

        if (module1051) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P() {
      var t;
      module24.default(this, P);

      (t = S.call(this, ...args)).immediatelyRefresh = function () {
        t._reset();

        t.forceUpdate();
      };

      t._reset = function () {
        t._key = module1052();
        t._reusableProps = {};
        t._components = {};
        t._descriptors = {};
        b.forEach(function (n) {
          t._components[n] = new module1043();
          t._descriptors[n] = new module1043();
        });
      };

      t._getReusableProps = function (n, o) {
        var s = t._reusableProps[n];
        if (!s) s = t._reusableProps[n] = [];
        var p = s[o];
        if (!p)
          p = s[o] = {
            style: {},
          };
        return p;
      };

      t._updateIndexProgress = function (n, o, p, u) {
        var c,
          l = u > p ? n : 1 - n,
          f = o - p,
          v = o - u;
        c =
          (f > 0 && 0 === v) || (v > 0 && 0 === f)
            ? t.props.navigationStyles.Interpolators.RightToCenter
            : (f < 0 && 0 === v) || (v < 0 && 0 === f)
            ? t.props.navigationStyles.Interpolators.CenterToLeft
            : f === v
            ? t.props.navigationStyles.Interpolators.RightToCenter
            : t.props.navigationStyles.Interpolators.RightToLeft;
        b.forEach(function (t) {
          var n = this._components[t].get(this.props.navState.routeStack[o]),
            s = this._getReusableProps(t, o);

          if (n && c[t](s.style, l)) {
            s.pointerEvents = 0 === s.style.opacity ? 'none' : 'box-none';
            n.setNativeProps(s);
          }
        }, module39.default(t));
      };

      t.updateProgress = function (n, o, s) {
        for (var p = o ** s, u = o ** s; u <= p; u++) t._updateIndexProgress(n, u, o, s);
      };

      t._getComponent = function (n, o, s) {
        if (t._descriptors[n].includes(o)) return t._descriptors[n].get(o);
        var args,
          u = t.props.routeMapper[n](t.props.navState.routeStack[s], t.props.navigator, s, t.props.navState);
        if (!u) return null;
        var c = s === k(t.props.navState),
          f = c ? t.props.navigationStyles.Stages.Center : t.props.navigationStyles.Stages.Left;
        args = (
          <ReactNative.View
            ref={function (s) {
              t._components[n] = t._components[n].set(o, s);
            }}
            pointerEvents={c ? 'box-none' : 'none'}
            style={f[n]}
          >
            {u}
          </ReactNative.View>
        );
        t._descriptors[n] = t._descriptors[n].set(o, args);
        return args;
      };

      return t;
    }

    module25.default(P, [
      {
        key: 'componentDidMount',
        value: function () {
          this._reset();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = {
              height: this.props.navigationStyles.General.TotalNavHeight,
            },
            o = this.props.navState.routeStack.map(function (n, o) {
              return b.map(function (s) {
                return t._getComponent(s, n, o);
              });
            });
          return (
            <ReactNative.View key={this._key} style={[C.navBarContainer, n, this.props.style]}>
              {o}
            </ReactNative.View>
          );
        },
      },
    ]);
    return P;
  })(React.Component);

x.propTypes = {
  navigator: PropTypes.object,
  routeMapper: PropTypes.shape({
    Title: PropTypes.func.isRequired,
    LeftButton: PropTypes.func.isRequired,
    RightButton: PropTypes.func.isRequired,
  }).isRequired,
  navState: PropTypes.shape({
    routeStack: PropTypes.arrayOf(PropTypes.object),
    presentedIndex: PropTypes.number,
  }),
  navigationStyles: PropTypes.object,
  style: ReactNative.ViewPropTypes.style,
};
x.Styles = P;
x.StylesAndroid = module1046;
x.StylesIOS = module1051;
x.defaultProps = {
  navigationStyles: P,
};
var C = ReactNative.StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});
module.exports = x;
