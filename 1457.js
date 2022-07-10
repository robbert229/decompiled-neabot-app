var t,
  n = 'object' == typeof Reflect ? Reflect : null,
  o =
    n && 'function' == typeof n.apply
      ? n.apply
      : function (t, n, o) {
          return Function.prototype.apply.call(t, n, o);
        };
t =
  n && 'function' == typeof n.ownKeys
    ? n.ownKeys
    : Object.getOwnPropertySymbols
    ? function (t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
      }
    : function (t) {
        return Object.getOwnPropertyNames(t);
      };

var s =
  Number.isNaN ||
  function (t) {
    return t != t;
  };

function u() {
  u.init.call(this);
}

module.exports = u;

module.exports.once = function (t, n) {
  return new Promise(function (o, s) {
    function u(o) {
      t.removeListener(n, f);
      s(o);
    }

    function f() {
      if ('function' == typeof t.removeListener) t.removeListener('error', u);
      o([].slice.call(arguments));
    }

    x(t, n, f, {
      once: true,
    });
    if ('error' !== n)
      O(t, u, {
        once: true,
      });
  });
};

u.EventEmitter = u;
u.prototype._events = undefined;
u.prototype._eventsCount = 0;
u.prototype._maxListeners = undefined;
var f = 10;

function c(t) {
  if ('function' != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}

function v(t) {
  return undefined === t._maxListeners ? u.defaultMaxListeners : t._maxListeners;
}

function p(t, n, o, s) {
  var u, f, p, l;

  if (
    (c(o),
    undefined === (f = t._events)
      ? ((f = t._events = Object.create(null)), (t._eventsCount = 0))
      : (undefined !== f.newListener && (t.emit('newListener', n, o.listener ? o.listener : o), (f = t._events)), (p = f[n])),
    undefined === p)
  ) {
    p = f[n] = o;
    ++t._eventsCount;
  } else if (('function' == typeof p ? (p = f[n] = s ? [o, p] : [p, o]) : s ? p.unshift(o) : p.push(o), (u = v(t)) > 0 && p.length > u && !p.warned)) {
    p.warned = true;
    var h = new Error('Possible EventEmitter memory leak detected. ' + p.length + ' ' + String(n) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
    h.name = 'MaxListenersExceededWarning';
    h.emitter = t;
    h.type = n;
    h.count = p.length;
    l = h;
    if (console && console.warn) console.warn(l);
  }

  return t;
}

function l() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    return 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
}

function h(t, n, o) {
  var s = {
      fired: false,
      wrapFn: undefined,
      target: t,
      type: n,
      listener: o,
    },
    u = l.bind(s);
  u.listener = o;
  s.wrapFn = u;
  return u;
}

function y(t, n, o) {
  var s = t._events;
  if (undefined === s) return [];
  var u = s[n];
  return undefined === u ? [] : 'function' == typeof u ? (o ? [u.listener || u] : [u]) : o ? b(u) : _(u, u.length);
}

function L(t) {
  var n = this._events;

  if (undefined !== n) {
    var o = n[t];
    if ('function' == typeof o) return 1;
    if (undefined !== o) return o.length;
  }

  return 0;
}

function _(t, n) {
  for (var o = new Array(n), s = 0; s < n; ++s) o[s] = t[s];

  return o;
}

function w(t, n) {
  for (; n + 1 < t.length; n++) t[n] = t[n + 1];

  t.pop();
}

function b(t) {
  for (var n = new Array(t.length), o = 0; o < n.length; ++o) n[o] = t[o].listener || t[o];

  return n;
}

function O(t, n, o) {
  if ('function' == typeof t.on) x(t, 'error', n, o);
}

function x(t, n, o, s) {
  if ('function' == typeof t.on) s.once ? t.once(n, o) : t.on(n, o);
  else {
    if ('function' != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
    t.addEventListener(n, function u(f) {
      if (s.once) t.removeEventListener(n, u);
      o(f);
    });
  }
}

Object.defineProperty(u, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return f;
  },
  set: function (t) {
    if ('number' != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + '.');
    f = t;
  },
});

u.init = function () {
  if (!(undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events)) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

u.prototype.setMaxListeners = function (t) {
  if ('number' != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.');
  this._maxListeners = t;
  return this;
};

u.prototype.getMaxListeners = function () {
  return v(this);
};

u.prototype.emit = function (t) {
  for (var n = [], s = 1; s < arguments.length; s++) n.push(arguments[s]);

  var u = 'error' === t,
    f = this._events;
  if (undefined !== f) u = u && undefined === f.error;
  else if (!u) return false;

  if (u) {
    var c;
    if ((n.length > 0 && (c = n[0]), c instanceof Error)) throw c;
    var v = new Error('Unhandled error.' + (c ? ' (' + c.message + ')' : ''));
    throw ((v.context = c), v);
  }

  var p = f[t];
  if (undefined === p) return false;
  if ('function' == typeof p) o(p, this, n);
  else {
    var l = p.length,
      h = _(p, l);

    for (s = 0; s < l; ++s) o(h[s], this, n);
  }
  return true;
};

u.prototype.addListener = function (t, n) {
  return p(this, t, n, false);
};

u.prototype.on = u.prototype.addListener;

u.prototype.prependListener = function (t, n) {
  return p(this, t, n, true);
};

u.prototype.once = function (t, n) {
  c(n);
  this.on(t, h(this, t, n));
  return this;
};

u.prototype.prependOnceListener = function (t, n) {
  c(n);
  this.prependListener(t, h(this, t, n));
  return this;
};

u.prototype.removeListener = function (t, n) {
  var o, s, u, f, v;
  if ((c(n), undefined === (s = this._events))) return this;
  if (undefined === (o = s[t])) return this;
  if (o === n || o.listener === n)
    0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete s[t], s.removeListener && this.emit('removeListener', t, o.listener || n));
  else if ('function' != typeof o) {
    for (u = -1, f = o.length - 1; f >= 0; f--)
      if (o[f] === n || o[f].listener === n) {
        v = o[f].listener;
        u = f;
        break;
      }

    if (u < 0) return this;
    if (0 === u) o.shift();
    else w(o, u);
    if (1 === o.length) s[t] = o[0];
    if (undefined !== s.removeListener) this.emit('removeListener', t, v || n);
  }
  return this;
};

u.prototype.off = u.prototype.removeListener;

u.prototype.removeAllListeners = function (t) {
  var n, o, s;
  if (undefined === (o = this._events)) return this;

  if (undefined === o.removeListener) {
    if (0 === arguments.length) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (undefined !== o[t]) 0 == --this._eventsCount ? (this._events = Object.create(null)) : delete o[t];

    return this;
  }

  if (0 === arguments.length) {
    var u,
      f = Object.keys(o);

    for (s = 0; s < f.length; ++s) 'removeListener' !== (u = f[s]) && this.removeAllListeners(u);

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  if ('function' == typeof (n = o[t])) this.removeListener(t, n);
  else if (undefined !== n) for (s = n.length - 1; s >= 0; s--) this.removeListener(t, n[s]);
  return this;
};

u.prototype.listeners = function (t) {
  return y(this, t, true);
};

u.prototype.rawListeners = function (t) {
  return y(this, t, false);
};

u.listenerCount = function (t, n) {
  return 'function' == typeof t.listenerCount ? t.listenerCount(n) : L.call(t, n);
};

u.prototype.listenerCount = L;

u.prototype.eventNames = function () {
  return this._eventsCount > 0 ? t(this._events) : [];
};
