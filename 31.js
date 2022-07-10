var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function l() {
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

var module40 = require('./40'),
  module43 = require('./43'),
  v = (function (v) {
    module35(R, module40);

    var h = R,
      y = l(),
      b = function () {
        var t,
          n = module34(h);

        if (y) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function R() {
      var n;
      module24(this, R);
      var o = new module43();
      (n = b.call(this, o)).sharedSubscriber = o;
      return n;
    }

    module25(R, [
      {
        key: 'addListener',
        value: function (t, n, c) {
          return module32(module34(R.prototype), 'addListener', this).call(this, t, n, c);
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          module32(module34(R.prototype), 'removeAllListeners', this).call(this, t);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          if (t.emitter !== this) t.emitter.removeSubscription(t);
          else module32(module34(R.prototype), 'removeSubscription', this).call(this, t);
        },
      },
    ]);
    return R;
  })();

module.exports = new v();
