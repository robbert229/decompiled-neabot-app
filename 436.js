exports.default = function () {
  var t = [].concat(module20.default(Object.keys(module426.CommonActions)), [
      'addListener',
      'removeListener',
      'resetRoot',
      'dispatch',
      'canGoBack',
      'getRootState',
      'getState',
      'getParent',
      'getCurrentRoute',
      'getCurrentOptions',
    ]),
    s = module11.default(
      {},
      t.reduce(function (t, n) {
        t[n] = function () {
          var t;
          if (null != s.current) return (t = s.current)[n].apply(t, arguments);
          console.error(c);
        };

        return t;
      }, {}),
      {
        isReady: function () {
          return null != s.current && s.current.isReady();
        },
        current: null,
      }
    );
  return s;
};

var module11 = require('./11'),
  module20 = require('./20'),
  module426 = require('./426'),
  c =
    "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";

exports.NOT_INITIALIZED_ERROR = c;
