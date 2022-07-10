var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module24 = require('./24'),
  module1191 = require('./1191'),
  module1193 = require('./1193'),
  module1194 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = f(n);
    if (u && u.has(t)) return u.get(t);
    var s = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var o = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (o && (o.get || o.set)) Object.defineProperty(s, l, o);
        else s[l] = t[l];
      }

    s.default = t;
    if (u) u.set(t, s);
    return s;
  })(require('./1194'));

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

exports.default = function t(f) {
  var _ = this;

  module24.default(this, t);
  this._nativeEventSubscription = null;
  this._subscriptions = new Set();
  this._latestState = null;

  this._handleNativeStateUpdate = function (t) {
    _._internetReachability.update(t);

    var n = _._convertState(t);

    _._latestState = n;

    _._subscriptions.forEach(function (t) {
      return t(n);
    });
  };

  this._handleInternetReachabilityUpdate = function (t) {
    if (_._latestState) {
      var n = module11.default({}, _._latestState, {
        isInternetReachable: t,
      });
      _._latestState = n;

      _._subscriptions.forEach(function (t) {
        return t(n);
      });
    }
  };

  this._fetchCurrentState = function (t) {
    var module11, module24;
    return regeneratorRuntime.default.async(
      function (l) {
        for (;;)
          switch ((l.prev = l.next)) {
            case 0:
              l.next = 2;
              return regeneratorRuntime.default.awrap(module1191.default.getCurrentState(t));

            case 2:
              module11 = l.sent;

              _._internetReachability.update(module11);

              module24 = _._convertState(module11);
              if (!t) _._latestState = module24;
              return l.abrupt('return', module24);

            case 7:
            case 'end':
              return l.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  };

  this._convertState = function (t) {
    return 'boolean' == typeof t.isInternetReachable
      ? t
      : module11.default({}, t, {
          isInternetReachable: _._internetReachability.currentState(),
        });
  };

  this.latest = function (t) {
    return t ? _._fetchCurrentState(t) : _._latestState ? Promise.resolve(_._latestState) : _._fetchCurrentState();
  };

  this.add = function (t) {
    _._subscriptions.add(t);

    if (_._latestState) t(_._latestState);
    else _.latest().then(t);
  };

  this.remove = function (t) {
    _._subscriptions.delete(t);
  };

  this.tearDown = function () {
    if (_._internetReachability) _._internetReachability.tearDown();
    if (_._nativeEventSubscription) _._nativeEventSubscription.remove();

    _._subscriptions.clear();
  };

  this._internetReachability = new module1193.default(f, this._handleInternetReachabilityUpdate);
  this._nativeEventSubscription = module1191.default.eventEmitter.addListener(module1194.DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);

  this._fetchCurrentState();
};
