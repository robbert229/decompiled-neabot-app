var module626 = require('./626'),
  o = module626.InvalidActionError,
  s = function (t, o) {
    this.socket = t;
    this.id = o;
    this.sent = false;
  };

s.prototype._respond = function (t) {
  if (this.sent) throw new o('Response ' + this.id + ' has already been sent');
  this.sent = true;
  this.socket.send(this.socket.encode(t));
};

s.prototype.end = function (t) {
  if (this.id) {
    var o = {
      rid: this.id,
    };
    if (undefined !== t) o.data = t;

    this._respond(o);
  }
};

s.prototype.error = function (o, s) {
  if (this.id) {
    var n = module626.dehydrateError(o),
      h = {
        rid: this.id,
        error: n,
      };
    if (undefined !== s) h.data = s;

    this._respond(h);
  }
};

s.prototype.callback = function (t, o) {
  if (t) this.error(t, o);
  else this.end(o);
};

module.exports.Response = s;
