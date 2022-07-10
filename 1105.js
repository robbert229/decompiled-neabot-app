var module11 = require('./11');

var s =
    Object.assign ||
    function (t) {
      for (var s = 1; s < arguments.length; s++) {
        var o = arguments[s];

        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
      }

      return t;
    },
  React = require('react'),
  PropTypes = require('prop-types'),
  module1083 = require('./1083'),
  ReactNative = require('react-native');

var c = ReactNative.StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    textButton: {
      fontSize: 14,
      alignSelf: 'center',
    },
    opacity: {
      opacity: 0.8,
    },
  }),
  y = module1083.default({
    displayName: 'NativeButton',
    propTypes: s({}, ReactNative.TouchableWithoutFeedback.propTypes, {
      textStyle: PropTypes.default.any,
      disabledStyle: PropTypes.default.any,
      children: PropTypes.default.node.isRequired,
      underlayColor: PropTypes.default.string,
      background: PropTypes.default.any,
    }),
    statics: {
      isAndroid: 'android' === ReactNative.Platform.OS,
    },
    getDefaultProps: function () {
      return {
        textStyle: null,
        disabledStyle: null,
        underlayColor: null,
      };
    },
    _renderText: function () {
      return 'string' != typeof this.props.children
        ? this.props.children
        : React.default.createElement(
            ReactNative.Text,
            {
              numberOfLines: 1,
              ellipsizeMode: 'ios' === ReactNative.Platform.OS ? 'clip' : 'tail',
              style: [c.textButton, this.props.textStyle],
            },
            this.props.children
          );
    },
    render: function () {
      var n = this.props.disabled ? this.props.disabledStyle || c.opacity : {},
        l = {
          accessibilityComponentType: this.props.accessibilityComponentType,
          accessibilityTraits: this.props.accessibilityTraits,
          accessible: this.props.accessible,
          delayLongPress: this.props.delayLongPress,
          delayPressIn: this.props.delayPressIn,
          delayPressOut: this.props.delayPressOut,
          disabled: this.props.disabled,
          hitSlop: this.props.hitSlop,
          onLayout: this.props.onLayout,
          onPress: this.props.onPress,
          onPressIn: this.props.onPressIn,
          onPressOut: this.props.onPressOut,
          onLongPress: this.props.onLongPress,
          pressRetentionOffset: this.props.pressRetentionOffset,
        };

      if (y.isAndroid) {
        l = module11(l, {
          background: this.props.background || ReactNative.TouchableNativeFeedback.SelectableBackground(),
        });
        return React.default.createElement(
          ReactNative.TouchableNativeFeedback,
          l,
          React.default.createElement(
            ReactNative.View,
            {
              style: [c.button, this.props.style, n],
            },
            this._renderText()
          )
        );
      } else
        return React.default.createElement(
          ReactNative.TouchableHighlight,
          s({}, l, {
            style: [c.button, this.props.style, n],
            underlayColor: this.props.underlayColor,
          }),
          this._renderText()
        );
    },
  });
exports.default = y;
