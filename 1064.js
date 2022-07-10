var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588');

function h() {
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

var module1065 = (function (t) {
  module35.default(k, t);

  var module588 = k,
    module1065 = h(),
    b = function () {
      var t,
        n = module34.default(module588);

      if (module1065) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    module24.default(this, k);
    return b.call(this, t);
  }

  module25.default(k, [
    {
      key: 'componentDidMount',
      value: function () {},
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.setState = function (t, n) {};
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            onPress: function () {
              ReactNative.DeviceEventEmitter.emit('feedBack');
            },
          },
          React.default.createElement(ReactNative.Image, {
            source: require('./1065'),
            style: y.fbHeadIcon,
          })
        );
      },
    },
  ]);
  return k;
})(React.default.Component);

exports.feebackHeadAdd = module1065;
var y = ReactNative.StyleSheet.create({
    fbHeadIcon: {
      width: module588.default.setSpText(24),
      height: module588.default.setSpText(24),
      marginRight: module588.default.setSpText(16),
    },
  }),
  b = module1065;
exports.default = b;
