var module624 = require('./624'),
  s = function (s, n, o) {
    module624.call(this);
    this.PENDING = 'pending';
    this.SUBSCRIBED = 'subscribed';
    this.UNSUBSCRIBED = 'unsubscribed';
    this.name = s;
    this.state = this.UNSUBSCRIBED;
    this.client = n;
    this.options = o || {};
    this.setOptions(this.options);
  };

(s.prototype = Object.create(module624.prototype)).setOptions = function (t) {
  if (!t) t = {};
  this.waitForAuth = t.waitForAuth || false;
  this.batch = t.batch || false;
  if (undefined !== t.data) this.data = t.data;
};

s.prototype.getState = function () {
  return this.state;
};

s.prototype.subscribe = function (t) {
  this.client.subscribe(this.name, t);
};

s.prototype.unsubscribe = function () {
  this.client.unsubscribe(this.name);
};

s.prototype.isSubscribed = function (t) {
  return this.client.isSubscribed(this.name, t);
};

s.prototype.publish = function (t, s) {
  this.client.publish(this.name, t, s);
};

s.prototype.watch = function (t) {
  this.client.watch(this.name, t);
};

s.prototype.unwatch = function (t) {
  this.client.unwatch(this.name, t);
};

s.prototype.watchers = function () {
  return this.client.watchers(this.name);
};

s.prototype.destroy = function () {
  this.client.destroyChannel(this.name);
};

module.exports.SCChannel = s;
