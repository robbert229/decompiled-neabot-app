var t,
  o =
    (this && this.__extends) ||
    ((t = function (o, n) {
      return (t =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (t, o) {
            t.__proto__ = o;
          }) ||
        function (t, o) {
          for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        })(o, n);
    }),
    function (o, n) {
      if ('function' != typeof n && null !== n) throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null');

      function u() {
        this.constructor = o;
      }

      t(o, n);
      o.prototype = null === n ? Object.create(n) : ((u.prototype = n.prototype), new u());
    });

var n = (function (t) {
  function n(o) {
    var u = t.call(this, o) || this;
    Object.setPrototypeOf(u, n.prototype);
    return u;
  }

  o(n, t);
  return n;
})(Error);

exports.CodePushError = n;

var u = (function (t) {
  function n(o) {
    var u = t.call(this, o) || this;
    Object.setPrototypeOf(u, n.prototype);
    return u;
  }

  o(n, t);
  return n;
})(n);

exports.CodePushHttpError = u;

var s = (function (t) {
  function n(o) {
    var u = t.call(this, o) || this;
    Object.setPrototypeOf(u, n.prototype);
    return u;
  }

  o(n, t);
  return n;
})(n);

exports.CodePushDeployStatusError = s;

var c = (function (t) {
  function n(o) {
    var u = t.call(this, o) || this;
    Object.setPrototypeOf(u, n.prototype);
    return u;
  }

  o(n, t);
  return n;
})(n);

exports.CodePushPackageError = c;

var p = (function (t) {
  function n(o) {
    var u = t.call(this, o) || this;
    Object.setPrototypeOf(u, n.prototype);
    return u;
  }

  o(n, t);
  return n;
})(n);

exports.CodePushUnauthorizedError = p;
