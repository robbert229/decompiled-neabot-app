var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1095 = require('./1095');

function p() {
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

var v = (function (t) {
  module35.default(R, t);

  var v = R,
    h = p(),
    y = function () {
      var t,
        n = module34.default(v);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function R(t) {
    var module25;
    module24.default(this, R);
    module25 = y.call(this, t);
    console.log();
    return module25;
  }

  module25.default(R, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(module1095.default, {
          iotId: this.props.route.params.iotId,
        });
      },
    },
  ]);
  return R;
})(React.default.Component);

exports.equipmentNew = v;
var h = v;
exports.default = h;
