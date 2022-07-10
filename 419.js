var ReactNative = require('react-native'),
  module414 = require('./414'),
  module417 = require('./417'),
  module418 = require('./418'),
  S = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: module418.TransitionIOSSpec,
      close: module418.TransitionIOSSpec,
    },
    cardStyleInterpolator: module414.forHorizontalIOS,
    headerStyleInterpolator: module417.forFade,
  };

exports.SlideFromRightIOS = S;
var c = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module418.TransitionIOSSpec,
    close: module418.TransitionIOSSpec,
  },
  cardStyleInterpolator: module414.forVerticalIOS,
  headerStyleInterpolator: module417.forFade,
};
exports.ModalSlideFromBottomIOS = c;
var s = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module418.TransitionIOSSpec,
    close: module418.TransitionIOSSpec,
  },
  cardStyleInterpolator: module414.forModalPresentationIOS,
  headerStyleInterpolator: module417.forFade,
};
exports.ModalPresentationIOS = s;
var p = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module418.FadeInFromBottomAndroidSpec,
    close: module418.FadeOutToBottomAndroidSpec,
  },
  cardStyleInterpolator: module414.forFadeFromBottomAndroid,
  headerStyleInterpolator: module417.forFade,
};
exports.FadeFromBottomAndroid = p;
var F = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: module418.RevealFromBottomAndroidSpec,
    close: module418.RevealFromBottomAndroidSpec,
  },
  cardStyleInterpolator: module414.forRevealFromBottomAndroid,
  headerStyleInterpolator: module417.forFade,
};
exports.RevealFromBottomAndroid = F;
var I = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: module418.ScaleFromCenterAndroidSpec,
    close: module418.ScaleFromCenterAndroidSpec,
  },
  cardStyleInterpolator: module414.forScaleFromCenterAndroid,
  headerStyleInterpolator: module417.forFade,
};
exports.ScaleFromCenterAndroid = I;
var f = ReactNative.Platform.select({
  ios: S,
  android: ReactNative.Platform.Version >= 29 ? I : ReactNative.Platform.Version >= 28 ? F : p,
  default: I,
});
exports.DefaultTransition = f;
var v = ReactNative.Platform.select({
  ios: c,
  default: f,
});
exports.ModalTransition = v;
