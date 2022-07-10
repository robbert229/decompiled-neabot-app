var module24 = require('./24'),
  module25 = require('./25'),
  module1034 = require('./1034'),
  module1036 = require('./1036'),
  module1042 = require('./1042'),
  module1041 = require('./1041'),
  module1035 = require('./1035'),
  _ = module1034.AT_TARGET,
  v = module1034.BUBBLING_PHASE,
  p = module1034.CAPTURING_PHASE,
  c = new Set(['willfocus', 'didfocus']),
  f = (function () {
    function f() {
      module24(this, f);
      this._bubbleEventEmitter = new module1036(this);
      this._captureEventEmitter = new module1036(this);
      this._currentRoute = null;
      this.__node = new module1042(this);
      this._emitCounter = 0;
      this._emitQueue = [];
      this.addListener('willfocus', this._onFocus);
      this.addListener('didfocus', this._onFocus);
    }

    module25(f, [
      {
        key: 'parent',
        get: function () {
          var t = this.__node.getParent();

          return t ? t.getValue() : null;
        },
      },
      {
        key: 'top',
        get: function () {
          for (var t = null, n = this.__node.getParent(); n; ) {
            t = n.getValue();
            n = n.getParent();
          }

          return t;
        },
      },
      {
        key: 'currentRoute',
        get: function () {
          return this._currentRoute;
        },
      },
      {
        key: 'appendChild',
        value: function (t) {
          this.__node.appendChild(t.__node);
        },
      },
      {
        key: 'addListener',
        value: function (t, n, s) {
          if (c.has(t)) s = false;
          var u = s ? this._captureEventEmitter : this._bubbleEventEmitter;
          return u
            ? u.addListener(t, n, this)
            : {
                remove: module1041,
              };
        },
      },
      {
        key: 'emit',
        value: function (t, n, u) {
          var o = this;

          if (this._emitCounter > 0) {
            var h = Array.prototype.slice.call(arguments);

            this._emitQueue.push(h);
          } else {
            if ((this._emitCounter++, c.has(t)))
              this.__emit(t, n, null, {
                defaultPrevented: false,
                eventPhase: _,
                propagationStopped: true,
                target: this,
              });
            else {
              for (var l = [this], f = this.parent; f; ) {
                l.unshift(f);
                f = f.parent;
              }

              var E = false,
                b = false,
                P = function (t) {
                  E = E || t.isPropagationStopped();
                  b = b || t.defaultPrevented;
                };

              l.some(function (s) {
                if (E) return true;
                var u = {
                  defaultPrevented: b,
                  eventPhase: p,
                  propagationStopped: E,
                  target: o,
                };

                s.__emit(t, n, P, u);
              }, this);
              l.reverse().some(function (s) {
                if (E) return true;
                var u = {
                  defaultPrevented: b,
                  eventPhase: v,
                  propagationStopped: E,
                  target: o,
                };

                s.__emit(t, n, P, u);
              }, this);
            }

            if (u) {
              var y = module1034.pool(t, this, n);
              if (E) y.stopPropagation();
              if (b) y.preventDefault();
              u.call(this, y);
              y.dispose();
            }

            for (this._emitCounter--; this._emitQueue.length; ) {
              h = this._emitQueue.shift();
              this.emit.apply(this, h);
            }
          }
        },
      },
      {
        key: 'dispose',
        value: function () {
          if (this._bubbleEventEmitter) this._bubbleEventEmitter.removeAllListeners();
          if (this._captureEventEmitter) this._captureEventEmitter.removeAllListeners();
          this._bubbleEventEmitter = null;
          this._captureEventEmitter = null;
          this._currentRoute = null;
        },
      },
      {
        key: '__emit',
        value: function (t, n, s, u) {
          var o;

          switch (u.eventPhase) {
            case p:
              o = this._captureEventEmitter;
              break;

            case _:
            case v:
              o = this._bubbleEventEmitter;
              break;

            default:
              module1035(false, 'invalid event phase %s', u.eventPhase);
          }

          if (u.target === this) u.eventPhase = _;
          if (o) o.emit(t, n, s, u);
        },
      },
      {
        key: '_onFocus',
        value: function (t) {
          module1035(t.data && t.data.hasOwnProperty('route'), 'event type "%s" should provide route', t.type);
          this._currentRoute = t.data.route;
        },
      },
    ]);
    return f;
  })();

module.exports = f;
