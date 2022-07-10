var ReactNative = 'android' === require('react-native').Platform.OS;

exports.isAndroid = ReactNative;
var S = !ReactNative;
exports.isIos = S;
exports.APP_STATE = {
  PUBLIC: 'PUBLIC_LOGIN',
  PRIVATE: 'MAIN_APP',
  AUTH: 'CHECKING_LOGIN',
  UNKNOWN: 'UNKNOWN',
};
exports.STATUS = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};
exports.LOCALES = {
  ENGLISH: {
    id: 1,
    name: 'en',
    label: 'ENGLISH',
    isRTL: false,
    languageCode: 'en',
    languageTag: 'en-US',
    scriptCode: '',
    countryCode: 'US',
  },
  CHINESE: {
    id: 2,
    name: 'Hans',
    label: '\u4e2d\u6587',
    languageCode: 'zh',
    languageTag: 'zh-Hans-CN',
    scriptCode: 'Hans',
    isRTL: false,
    countryCode: 'CN',
  },
  SYSTEM: {
    id: 3,
    name: 'fs',
    label: 'SYSTEM',
    languageCode: 'fs',
    languageTag: 'zh-Hans-CN',
    scriptCode: 'fs',
    isRTL: false,
    countryCode: 'CN',
  },
};
