var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module3 = require('./3'),
  module1151 = require('./1151'),
  module1152 = require('./1152');

function u(t, n, s) {
  return t[n][s];
}

function l(t, n) {
  return t[n];
}

var w = (function () {
  function h(t) {
    module24(this, h);
    module3(t && 'function' == typeof t.rowHasChanged, 'Must provide a rowHasChanged function.');
    this._rowHasChanged = t.rowHasChanged;
    this._getRowData = t.getRowData || u;
    this._sectionHeaderHasChanged = t.sectionHeaderHasChanged;
    this._getSectionHeaderData = t.getSectionHeaderData || l;
    this._dataBlob = null;
    this._dirtyRows = [];
    this._dirtySections = [];
    this._cachedRowCount = 0;
    this.rowIdentities = [];
    this.sectionIdentities = [];
  }

  module25(h, [
    {
      key: 'cloneWithRows',
      value: function (n, s) {
        var o = s ? [module20(s)] : null;
        if (!this._sectionHeaderHasChanged)
          this._sectionHeaderHasChanged = function () {
            return false;
          };
        return this.cloneWithRowsAndSections(
          {
            s1: n,
          },
          ['s1'],
          o
        );
      },
    },
    {
      key: 'cloneWithRowsAndSections',
      value: function (t, n, s) {
        module3('function' == typeof this._sectionHeaderHasChanged, 'Must provide a sectionHeaderHasChanged function with section data.');
        module3(!n || !s || n.length === s.length, 'row and section ids lengths must be the same');
        var c = new h({
          getRowData: this._getRowData,
          getSectionHeaderData: this._getSectionHeaderData,
          rowHasChanged: this._rowHasChanged,
          sectionHeaderHasChanged: this._sectionHeaderHasChanged,
        });
        c._dataBlob = t;
        c.sectionIdentities = n || Object.keys(t);
        if (s) c.rowIdentities = s;
        else {
          c.rowIdentities = [];
          c.sectionIdentities.forEach(function (n) {
            c.rowIdentities.push(Object.keys(t[n]));
          });
        }
        c._cachedRowCount = _(c.rowIdentities);

        c._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

        return c;
      },
    },
    {
      key: 'getRowCount',
      value: function () {
        return this._cachedRowCount;
      },
    },
    {
      key: 'getRowAndSectionCount',
      value: function () {
        return this._cachedRowCount + this.sectionIdentities.length;
      },
    },
    {
      key: 'rowShouldUpdate',
      value: function (t, n) {
        var s = this._dirtyRows[t][n];
        module1152(undefined !== s, 'missing dirtyBit for section, row: ' + t + ', ' + n);
        return s;
      },
    },
    {
      key: 'getRowData',
      value: function (t, n) {
        var s = this.sectionIdentities[t],
          o = this.rowIdentities[t][n];
        module1152(undefined !== s && undefined !== o, 'rendering invalid section, row: ' + t + ', ' + n);
        return this._getRowData(this._dataBlob, s, o);
      },
    },
    {
      key: 'getRowIDForFlatIndex',
      value: function (t) {
        for (var n = t, s = 0; s < this.sectionIdentities.length; s++) {
          if (!(n >= this.rowIdentities[s].length)) return this.rowIdentities[s][n];
          n -= this.rowIdentities[s].length;
        }

        return null;
      },
    },
    {
      key: 'getSectionIDForFlatIndex',
      value: function (t) {
        for (var n = t, s = 0; s < this.sectionIdentities.length; s++) {
          if (!(n >= this.rowIdentities[s].length)) return this.sectionIdentities[s];
          n -= this.rowIdentities[s].length;
        }

        return null;
      },
    },
    {
      key: 'getSectionLengths',
      value: function () {
        for (var t = [], n = 0; n < this.sectionIdentities.length; n++) t.push(this.rowIdentities[n].length);

        return t;
      },
    },
    {
      key: 'sectionHeaderShouldUpdate',
      value: function (t) {
        var n = this._dirtySections[t];
        module1152(undefined !== n, 'missing dirtyBit for section: ' + t);
        return n;
      },
    },
    {
      key: 'getSectionHeaderData',
      value: function (t) {
        if (!this._getSectionHeaderData) return null;
        var n = this.sectionIdentities[t];
        module1152(undefined !== n, 'renderSection called on invalid section: ' + t);
        return this._getSectionHeaderData(this._dataBlob, n);
      },
    },
    {
      key: '_calculateDirtyArrays',
      value: function (t, n, s) {
        for (var o, h = f(n), u = {}, l = 0; l < s.length; l++) {
          var w = n[l];
          module1152(!u[w], 'SectionID appears more than once: ' + w);
          u[w] = f(s[l]);
        }

        this._dirtySections = [];
        this._dirtyRows = [];

        for (var _ = 0; _ < this.sectionIdentities.length; _++) {
          var v = this.sectionIdentities[_];
          o = !h[v];
          var H = this._sectionHeaderHasChanged;
          if (!o && H) o = H(this._getSectionHeaderData(t, v), this._getSectionHeaderData(this._dataBlob, v));

          this._dirtySections.push(!!o);

          this._dirtyRows[_] = [];

          for (var I = 0; I < this.rowIdentities[_].length; I++) {
            var y = this.rowIdentities[_][I];
            o = !h[v] || !u[v][y] || this._rowHasChanged(this._getRowData(t, v, y), this._getRowData(this._dataBlob, v, y));

            this._dirtyRows[_].push(!!o);
          }
        }
      },
    },
  ]);
  return h;
})();

function _(t) {
  for (var n = 0, s = 0; s < t.length; s++) {
    n += t[s].length;
  }

  return n;
}

function f(t) {
  if (module1151(t)) return {};

  for (var n = {}, s = 0; s < t.length; s++) {
    var o = t[s];
    module1152(!n[o], 'Value appears more than once in array: ' + o);
    n[o] = true;
  }

  return n;
}

module.exports = w;
