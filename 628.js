var t = function () {
  this._internalStorage = {};
  this.isLocalStorageEnabled = this._checkLocalStorageEnabled();
};

t.prototype._checkLocalStorageEnabled = function () {
  var t;

  try {
    globals.localStorage.setItem('__scLocalStorageTest', 1);
    globals.localStorage.removeItem('__scLocalStorageTest');
  } catch (o) {
    t = o;
  }

  return !t;
};

t.prototype.saveToken = function (t, o, l, n) {
  if (this.isLocalStorageEnabled && globals.localStorage) globals.localStorage.setItem(t, o);
  else this._internalStorage[t] = o;
  if (n) n(null, o);
};

t.prototype.removeToken = function (t, o) {
  var l;
  this.loadToken(t, function (t, o) {
    l = o;
  });
  if (this.isLocalStorageEnabled && globals.localStorage) globals.localStorage.removeItem(t);
  else delete this._internalStorage[t];
  if (o) o(null, l);
};

t.prototype.loadToken = function (t, o) {
  o(null, this.isLocalStorageEnabled && globals.localStorage ? globals.localStorage.getItem(t) : this._internalStorage[t] || null);
};

module.exports.AuthEngine = t;
