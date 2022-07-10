var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module408 = require('./408'),
  module1136 = require('./1136'),
  h = function (t, n) {
    var o = {};

    for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && n.indexOf(s) < 0 && (o[s] = t[s]);

    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var l = 0;

      for (s = Object.getOwnPropertySymbols(t); l < s.length; l++) n.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[l]) && (o[s[l]] = t[s[l]]);
    }

    return o;
  },
  P = (function (t) {
    module35.default(S, t);
    var P = module401.default(S);

    function S(t) {
      var n;
      module24.default(this, S);

      (n = P.call(this, t)).onPressIn = function (t) {
        n.setState({
          pressIn: true,
        });
        if (n.props.onPressIn) n.props.onPressIn(t);
      };

      n.onPressOut = function (t) {
        n.setState({
          pressIn: false,
        });
        if (n.props.onPressOut) n.props.onPressOut(t);
      };

      n.onShowUnderlay = function () {
        n.setState({
          touchIt: true,
        });
        if (n.props.onShowUnderlay) n.props.onShowUnderlay();
      };

      n.onHideUnderlay = function () {
        n.setState({
          touchIt: false,
        });
        if (n.props.onHideUnderlay) n.props.onHideUnderlay();
      };

      n.state = {
        pressIn: false,
        touchIt: false,
      };
      return n;
    }

    module25.default(S, [
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            s = o.size,
            l = undefined === s ? 'large' : s,
            c = o.type,
            P = undefined === c ? 'default' : c,
            S = o.disabled,
            I = o.activeStyle,
            v = o.onPress,
            w = o.style,
            O = o.styles,
            b = o.loading,
            U = h(o, ['size', 'type', 'disabled', 'activeStyle', 'onPress', 'style', 'styles', 'loading']);
          return React.default.createElement(
            module408.WithTheme,
            {
              themeStyles: module1136.default,
              styles: O,
            },
            function (o) {
              var s = [o[''.concat(l, 'RawText')], o[''.concat(P, 'RawText')], S && o[''.concat(P, 'DisabledRawText')], t.state.pressIn && o[''.concat(P, 'HighlightText')]],
                c = [
                  o.wrapperStyle,
                  o[''.concat(l, 'Raw')],
                  o[''.concat(P, 'Raw')],
                  S && o[''.concat(P, 'DisabledRaw')],
                  t.state.pressIn && I && o[''.concat(P, 'Highlight')],
                  I && t.state.touchIt && I,
                  w,
                ],
                y = ReactNative.StyleSheet.flatten(I || o[''.concat(P, 'Highlight')]).backgroundColor,
                f = ReactNative.StyleSheet.flatten(t.state.pressIn ? o[''.concat(P, 'HighlightText')] : o[''.concat(P, 'RawText')]).color;
              return React.default.createElement(
                ReactNative.TouchableHighlight,
                module11.default(
                  {
                    activeOpacity: 0.4,
                  },
                  U,
                  {
                    style: c,
                    disabled: S,
                    underlayColor: y,
                    onPress: function (t) {
                      return v && v(t);
                    },
                    onPressIn: t.onPressIn,
                    onPressOut: t.onPressOut,
                    onShowUnderlay: t.onShowUnderlay,
                    onHideUnderlay: t.onHideUnderlay,
                  }
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: o.container,
                  },
                  b
                    ? React.default.createElement(ReactNative.ActivityIndicator, {
                        style: o.indicator,
                        animating: true,
                        color: f,
                        size: 'small',
                      })
                    : null,
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: s,
                    },
                    t.props.children
                  )
                )
              );
            }
          );
        },
      },
    ]);
    return S;
  })(React.default.Component);

exports.default = P;
P.defaultProps = {
  pressIn: false,
  disabled: false,
  loading: false,
  onPress: function (t) {},
  onPressIn: function (t) {},
  onPressOut: function (t) {},
  onShowUnderlay: function (t) {},
  onHideUnderlay: function (t) {},
};
