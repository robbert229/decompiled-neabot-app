var module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
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

var module1037 = require('./1037'),
  module1034 = require('./1034'),
  p = (function (p) {
    module35(P, module1037);

    var v = P,
      _ = f(),
      y = function () {
        var t,
          n = module34(v);

        if (_) {
          var o = module34(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37(this, t);
      };

    function P(n) {
      var o;
      module24(this, P);
      (o = y.call(this))._emitting = false;
      o._emitQueue = [];
      o._target = n;
      return o;
    }

    module25(P, [
      {
        key: 'emit',
        value: function (t, n, s, u) {
          if (this._emitting) {
            var f = Array.prototype.slice.call(arguments);

            this._emitQueue.push(f);
          } else {
            this._emitting = true;
            var l = module1034.pool(t, this._target, n);

            for (
              u &&
                (u.target && (l.target = u.target),
                u.eventPhase && (l.eventPhase = u.eventPhase),
                u.defaultPrevented && l.preventDefault(),
                u.propagationStopped && l.stopPropagation()),
                module32(module34(P.prototype), 'emit', this).call(this, String(t), l),
                'function' == typeof s && s.call(this._target, l),
                l.dispose(),
                this._emitting = false;
              this._emitQueue.length;

            ) {
              f = this._emitQueue.shift();
              this.emit.apply(this, f);
            }
          }
        },
      },
    ]);
    return P;
  })();

module.exports = p;
