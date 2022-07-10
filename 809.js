exports.setGenericPassword = P;
exports.getGenericPassword = R;
exports.resetGenericPassword = f;
exports.getAllGenericPasswordServices = v;

exports.hasInternetCredentials = function (t) {
  return c.hasInternetCredentialsForServer(t);
};

exports.setInternetCredentials = p;
exports.getInternetCredentials = h;
exports.resetInternetCredentials = y;
exports.getSupportedBiometryType = Y;
exports.requestSharedWebCredentials = L;
exports.setSharedWebCredentials = N;
exports.canImplyAuthentication = U;
exports.getSecurityLevel = D;

var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  ReactNative = require('react-native'),
  c = ReactNative.NativeModules.RNKeychainManager,
  E = Object.freeze({
    ANY: c && c.SECURITY_LEVEL_ANY,
    SECURE_SOFTWARE: c && c.SECURITY_LEVEL_SECURE_SOFTWARE,
    SECURE_HARDWARE: c && c.SECURITY_LEVEL_SECURE_HARDWARE,
  });

exports.SECURITY_LEVEL = E;
var S = Object.freeze({
  WHEN_UNLOCKED: 'AccessibleWhenUnlocked',
  AFTER_FIRST_UNLOCK: 'AccessibleAfterFirstUnlock',
  ALWAYS: 'AccessibleAlways',
  WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: 'AccessibleWhenPasscodeSetThisDeviceOnly',
  WHEN_UNLOCKED_THIS_DEVICE_ONLY: 'AccessibleWhenUnlockedThisDeviceOnly',
  AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: 'AccessibleAfterFirstUnlockThisDeviceOnly',
  ALWAYS_THIS_DEVICE_ONLY: 'AccessibleAlwaysThisDeviceOnly',
});
exports.ACCESSIBLE = S;
var u = Object.freeze({
  USER_PRESENCE: 'UserPresence',
  BIOMETRY_ANY: 'BiometryAny',
  BIOMETRY_CURRENT_SET: 'BiometryCurrentSet',
  DEVICE_PASSCODE: 'DevicePasscode',
  APPLICATION_PASSWORD: 'ApplicationPassword',
  BIOMETRY_ANY_OR_DEVICE_PASSCODE: 'BiometryAnyOrDevicePasscode',
  BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE: 'BiometryCurrentSetOrDevicePasscode',
});
exports.ACCESS_CONTROL = u;
var l = Object.freeze({
  DEVICE_PASSCODE_OR_BIOMETRICS: 'AuthenticationWithBiometricsDevicePasscode',
  BIOMETRICS: 'AuthenticationWithBiometrics',
});
exports.AUTHENTICATION_TYPE = l;
var C = Object.freeze({
  TOUCH_ID: 'TouchID',
  FACE_ID: 'FaceID',
  FINGERPRINT: 'Fingerprint',
  FACE: 'Face',
  IRIS: 'Iris',
});
exports.BIOMETRY_TYPE = C;
var T = Object.freeze({
  FB: 'FacebookConceal',
  AES: 'KeystoreAESCBC',
  RSA: 'KeystoreRSAECB',
  KC: 'keychain',
});
exports.STORAGE_TYPE = T;

var _ = Object.freeze({
  NONE: 'none',
  AUTOMATIC_UPGRADE: 'automaticUpgradeToMoreSecuredStorage',
});

exports.SECURITY_RULES = _;
var A = {
  title: 'Authenticate to retrieve secret',
  cancel: 'Cancel',
};

function I(t) {
  if ('string' == typeof t) {
    console.warn(
      'You passed a service string as an argument to one of the react-native-keychain functions.\n      This way of passing service is deprecated and will be removed in a future major.\n      Please update your code to use { service: ' +
        JSON.stringify(t) +
        ' }'
    );
    return {
      service: t,
    };
  } else return t || {};
}

function O(t) {
  var n = module11.default({}, I(t)),
    o = n.authenticationPrompt;

  if ('string' == typeof o) {
    console.warn(
      'You passed a authenticationPrompt string as an argument to one of the react-native-keychain functions.\n      This way of passing authenticationPrompt is deprecated and will be removed in a future major.\n      Please update your code to use { authenticationPrompt: { title: ' +
        JSON.stringify(o) +
        ' }'
    );
    n.authenticationPrompt = module11.default({}, A, {
      title: o,
    });
  } else n.authenticationPrompt = module11.default({}, A, o);

  return n;
}

function P(t, n, s) {
  var o = O(s);
  return c.setGenericPasswordForOptions(o, t, n);
}

function R(t) {
  var n = O(t);
  return c.getGenericPasswordForOptions(n);
}

function f(t) {
  var n = O(t);
  return c.resetGenericPasswordForOptions(n);
}

function v() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', c.getAllGenericPasswordServices());

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function p(t, n, s, o) {
  return c.setInternetCredentialsForServer(t, n, s, o);
}

function h(t, n) {
  return c.getInternetCredentialsForServer(t, O(n));
}

function y(t) {
  return c.resetInternetCredentialsForServer(t);
}

function Y() {
  return c.getSupportedBiometryType ? c.getSupportedBiometryType() : Promise.resolve(null);
}

function L() {
  return 'ios' !== ReactNative.Platform.OS
    ? Promise.reject(new Error('requestSharedWebCredentials() is not supported on ' + ReactNative.Platform.OS + ' yet'))
    : c.requestSharedWebCredentials();
}

function N(t, n, s) {
  return 'ios' !== ReactNative.Platform.OS
    ? Promise.reject(new Error('setSharedWebCredentials() is not supported on ' + ReactNative.Platform.OS + ' yet'))
    : c.setSharedWebCredentialsForServer(t, n, s);
}

function U(t) {
  return c.canCheckAuthentication ? c.canCheckAuthentication(t) : Promise.resolve(false);
}

function D(t) {
  return c.getSecurityLevel ? c.getSecurityLevel(t) : Promise.resolve(null);
}

var b = {
  SECURITY_LEVEL: E,
  ACCESSIBLE: S,
  ACCESS_CONTROL: u,
  AUTHENTICATION_TYPE: l,
  BIOMETRY_TYPE: C,
  STORAGE_TYPE: T,
  SECURITY_RULES: _,
  getSecurityLevel: D,
  canImplyAuthentication: U,
  getSupportedBiometryType: Y,
  setInternetCredentials: p,
  getInternetCredentials: h,
  resetInternetCredentials: y,
  setGenericPassword: P,
  getGenericPassword: R,
  getAllGenericPasswordServices: v,
  resetGenericPassword: f,
  requestSharedWebCredentials: L,
  setSharedWebCredentials: N,
};
exports.default = b;
