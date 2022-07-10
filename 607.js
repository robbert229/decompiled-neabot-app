var module608 = require('./608'),
  module613 = require('./613'),
  module804 = require('./804');

require('./805');

module613.composeWithDevTools({
  name: module804.name,
  realtime: true,
  injectserver: 'react-native',
  trace: true,
});

exports.default = function (t, o) {
  return module608.createStore(t, {
    name: 'easystore',
    injections: {
      api: o,
    },
  });
};
