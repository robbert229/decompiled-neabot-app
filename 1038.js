var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function f() {
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

var module1039 = require('./1039'),
  l = (function (l) {
    module35(y, module1039);

    var v = y,
      h = f(),
      p = function () {
        var t,
          n = module34(v);

        if (h) {
          var c = module34(this).constructor;
          t = Reflect.construct(n, arguments, c);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function y(n, c, o, u) {
      var f;
      module24(this, y);
      (f = p.call(this, c)).emitter = n;
      f.listener = o;
      f.context = u;
      return f;
    }

    module25(y, [
      {
        key: 'remove',
        value: function () {
          this.emitter.removeSubscription(this);
        },
      },
    ]);
    return y;
  })();

module.exports = l;
