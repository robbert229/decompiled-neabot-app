var n,
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1157 = require('./1157'),
  f = React.default.forwardRef(function (t, f) {
    var v = ReactNative.StyleSheet.compose(n.slider, t.style),
      c = t.onValueChange,
      h = t.onSlidingStart,
      C = t.onSlidingComplete,
      b = module52.default(t, ['onValueChange', 'onSlidingStart', 'onSlidingComplete']),
      p = c
        ? function (t) {
            var n = true;
            if ('android' === ReactNative.Platform.OS) n = null != t.nativeEvent.fromUser && t.nativeEvent.fromUser;
            if (n) c(t.nativeEvent.value);
          }
        : null,
      R = p,
      y = h
        ? function (t) {
            h(t.nativeEvent.value);
          }
        : null,
      E = C
        ? function (t) {
            C(t.nativeEvent.value);
          }
        : null;
    return React.default.createElement(
      module1157.default,
      module11.default({}, b, {
        thumbImage: 'web' === ReactNative.Platform.OS ? t.thumbImage : ReactNative.Image.resolveAssetSource(t.thumbImage),
        ref: f,
        style: v,
        onChange: R,
        onRNCSliderSlidingStart: y,
        onRNCSliderSlidingComplete: E,
        onRNCSliderValueChange: p,
        enabled: !t.disabled,
        onStartShouldSetResponder: function () {
          return true;
        },
        onResponderTerminationRequest: function () {
          return false;
        },
        __source: {
          fileName: '/Users/michalchudziak/Projects/react-native/react-native-slider/src/js/Slider.js',
          lineNumber: 270,
        },
      })
    );
  });

f.defaultProps = {
  disabled: false,
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  inverted: false,
};
n =
  'ios' === ReactNative.Platform.OS
    ? ReactNative.StyleSheet.create({
        slider: {
          height: 40,
        },
      })
    : ReactNative.StyleSheet.create({
        slider: {},
      });
var v = f;
exports.default = v;
