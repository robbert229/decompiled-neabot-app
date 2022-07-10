function t(t) {
  if (t) return s(t);
}

function s(s) {
  for (var n in t.prototype) s[n] = t.prototype[n];

  return s;
}

if (undefined !== module) module.exports = t;

t.prototype.on = t.prototype.addEventListener = function (t, s) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(s);
  return this;
};

t.prototype.once = function (t, s) {
  function n() {
    this.off(t, n);
    s.apply(this, arguments);
  }

  n.fn = s;
  this.on(t, n);
  return this;
};

t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function (t, s) {
  if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) {
    this._callbacks = {};
    return this;
  }

  var n,
    l = this._callbacks['$' + t];
  if (!l) return this;

  if (1 == arguments.length) {
    delete this._callbacks['$' + t];
    return this;
  }

  for (var o = 0; o < l.length; o++)
    if ((n = l[o]) === s || n.fn === s) {
      l.splice(o, 1);
      break;
    }

  return this;
};

t.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  var s = [].slice.call(arguments, 1),
    n = this._callbacks['$' + t];
  if (n) for (var l = 0, o = (n = n.slice(0)).length; l < o; ++l) n[l].apply(this, s);
  return this;
};

t.prototype.listeners = function (t) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + t] || [];
};

t.prototype.hasListeners = function (t) {
  return !!this.listeners(t).length;
};
