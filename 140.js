var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function c() {
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

require('./48');

var module40 = require('./40'),
  module31 = require('./31'),
  module3 = require('./3'),
  p = (function (p) {
    module35(M, module40);

    var y = M,
      _ = c(),
      L = function () {
        var t,
          n = module34(y);

        if (_) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function M(n) {
      module24(this, M);
      return L.call(this, module31.sharedSubscriber);
    }

    module25(M, [
      {
        key: 'addListener',
        value: function (t, n, s) {
          if (null != this._nativeModule) this._nativeModule.addListener(t);
          return module32(module34(M.prototype), 'addListener', this).call(this, t, n, s);
        },
      },
      {
        key: 'removeAllListeners',
        value: function (t) {
          module3(t, 'eventType argument is required.');
          var n = this.listeners(t).length;
          if (null != this._nativeModule) this._nativeModule.removeListeners(n);
          module32(module34(M.prototype), 'removeAllListeners', this).call(this, t);
        },
      },
      {
        key: 'removeSubscription',
        value: function (t) {
          if (null != this._nativeModule) this._nativeModule.removeListeners(1);
          module32(module34(M.prototype), 'removeSubscription', this).call(this, t);
        },
      },
    ]);
    return M;
  })();

module.exports = p;
