var n,
  module24 = require('./24'),
  module25 = require('./25');

exports.RootControllerChanges = n;

(function (t) {
  t[(t.Insert = 0)] = 'Insert';
  t[(t.Update = 1)] = 'Update';
  t[(t.Remove = 2)] = 'Remove';
})(n || (exports.RootControllerChanges = n = {}));

var o = (function () {
  function t() {
    module24.default(this, t);
    this.siblings = new Set();
    this.pendingActions = [];
    this.callback = null;
  }

  module25.default(t, [
    {
      key: 'update',
      value: function (t, l, s) {
        if (this.siblings.has(t))
          this.emit(t, {
            change: n.Update,
            element: l,
            updateCallback: s,
          });
        else {
          this.emit(t, {
            change: n.Insert,
            element: l,
            updateCallback: s,
          });
          this.siblings.add(t);
        }
      },
    },
    {
      key: 'destroy',
      value: function (t, l) {
        if (this.siblings.has(t)) {
          this.emit(t, {
            change: n.Remove,
            element: null,
            updateCallback: l,
          });
          this.siblings.delete(t);
        } else if (l) l();
      },
    },
    {
      key: 'setCallback',
      value: function (t) {
        this.callback = t;
        this.pendingActions.forEach(function (n) {
          var l = n.id,
            s = n.action;
          t(l, s);
        });
      },
    },
    {
      key: 'emit',
      value: function (t, n) {
        if (this.callback) this.callback(t, n);
        else
          this.pendingActions.push({
            action: n,
            id: t,
          });
      },
    },
  ]);
  return t;
})();

exports.default = o;
