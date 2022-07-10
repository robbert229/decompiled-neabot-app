var t, n;

function h() {
  if (arguments.length) return h.from(arguments);
}

function p() {}

t = 'An argument without append, prepend, or detach methods was given to `List';
n = h.prototype;

h.of = function () {
  return h.from.call(this, arguments);
};

h.from = function (t) {
  var n,
    h,
    p,
    s = new this();
  if (t && (n = t.length)) for (h = -1; ++h < n; ) null !== (p = t[h]) && undefined !== p && s.append(p);
  return s;
};

n.head = null;
n.tail = null;

n.toArray = function () {
  for (var t = this.head, n = []; t; ) {
    n.push(t);
    t = t.next;
  }

  return n;
};

n.prepend = function (n) {
  if (!n) return false;
  if (!n.append || !n.prepend || !n.detach) throw new Error(t + '#prepend`.');
  var h;
  this;
  if ((h = this.head)) return h.prepend(n);
  else {
    n.detach();
    n.list = this;
    this.head = n;
    return n;
  }
};

n.append = function (n) {
  if (!n) return false;
  if (!n.append || !n.prepend || !n.detach) throw new Error(t + '#append`.');
  var h, p;
  this;
  return (p = this.tail) ? p.append(n) : (h = this.head) ? h.append(n) : (n.detach(), (n.list = this), (this.head = n), n);
};

h.Item = p;
var s = p.prototype;
s.next = null;
s.prev = null;
s.list = null;

s.detach = function () {
  var t = this.list,
    n = this.prev,
    h = this.next;

  if (t) {
    if (t.tail === this) t.tail = n;
    if (t.head === this) t.head = h;
    if (t.tail === t.head) t.tail = null;
    if (n) n.next = h;
    if (h) h.prev = n;
    this.prev = this.next = this.list = null;
    return this;
  } else return this;
};

s.prepend = function (n) {
  if (!(n && n.append && n.prepend && n.detach)) throw new Error(t + 'Item#prepend`.');
  var h = this.list,
    p = this.prev;
  return !!h && (n.detach(), p && ((n.prev = p), (p.next = n)), (n.next = this), (n.list = h), (this.prev = n), this === h.head && (h.head = n), h.tail || (h.tail = this), n);
};

s.append = function (n) {
  if (!(n && n.append && n.prepend && n.detach)) throw new Error(t + 'Item#append`.');
  var h = this.list,
    p = this.next;
  return !!h && (n.detach(), p && ((n.next = p), (p.prev = n)), (n.prev = this), (n.list = h), (this.next = n), (this !== h.tail && h.tail) || (h.tail = n), n);
};

module.exports = h;
