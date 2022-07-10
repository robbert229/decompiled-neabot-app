var module24 = require('./24'),
  module25 = require('./25'),
  module1035 = require('./1035'),
  module1043 = require('./1043').List,
  l = (function () {
    function l(t) {
      module24(this, l);
      this.__parent = null;
      this._children = new module1043();
      this._value = t;
    }

    module25(l, [
      {
        key: 'getValue',
        value: function () {
          return this._value;
        },
      },
      {
        key: 'getParent',
        value: function () {
          return this.__parent;
        },
      },
      {
        key: 'getChildrenCount',
        value: function () {
          return this._children.size;
        },
      },
      {
        key: 'getChildAt',
        value: function (n) {
          return n > -1 && n < this._children.size ? this._children.get(n) : null;
        },
      },
      {
        key: 'appendChild',
        value: function (n) {
          if (n.__parent) n.__parent.removeChild(n);
          n.__parent = this;
          this._children = this._children.push(n);
        },
      },
      {
        key: 'removeChild',
        value: function (n) {
          var t = this._children.indexOf(n);

          module1035(t > -1, 'The node to be removed is not a child of this node.');
          n.__parent = null;
          this._children = this._children.splice(t, 1);
        },
      },
      {
        key: 'indexOf',
        value: function (n) {
          return this._children.indexOf(n);
        },
      },
      {
        key: 'forEach',
        value: function (n, t) {
          this._children.forEach(n, t);
        },
      },
      {
        key: 'map',
        value: function (n, t) {
          return this._children.map(n, t).toJS();
        },
      },
      {
        key: 'some',
        value: function (n, t) {
          return this._children.some(n, t);
        },
      },
    ]);
    return l;
  })();

module.exports = l;
