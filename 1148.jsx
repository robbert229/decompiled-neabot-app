require('./1149');

var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  n = ['renderScrollComponent'],
  module1150 = require('./1150'),
  React = require('react'),
  ReactNative = require('react-native'),
  c = ReactNative.NativeModules.ScrollViewManager,
  p = ReactNative.ScrollView,
  module273 = require('./273').Mixin,
  module1154 = require('./1154'),
  _ = ReactNative.View,
  module1155 = require('./1155'),
  module1083 = require('./1083'),
  module1151 = require('./1151'),
  module3 = module1083({
    displayName: 'ListView',
    _rafIds: [],
    _childFrames: [],
    _sentEndForContentLength: null,
    _scrollComponent: null,
    _prevRenderedRowsCount: 0,
    _visibleRows: {},
    scrollProperties: {},
    mixins: [module273],
    statics: {
      DataSource: module1150,
    },
    getMetrics: function () {
      return {
        contentLength: this.scrollProperties.contentLength,
        totalRows: this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount(),
        renderedRows: this.state.curRenderedRowsCount,
        visibleRows: Object.keys(this._visibleRows).length,
      };
    },
    getScrollResponder: function () {
      if (this._scrollComponent && this._scrollComponent.getScrollResponder) return this._scrollComponent.getScrollResponder();
    },
    getScrollableNode: function () {
      return this._scrollComponent && this._scrollComponent.getScrollableNode ? this._scrollComponent.getScrollableNode() : ReactNative.findNodeHandle(this._scrollComponent);
    },
    scrollTo: function () {
      var t;
      if (this._scrollComponent && this._scrollComponent.scrollTo) (t = this._scrollComponent).scrollTo.apply(t, arguments);
    },
    scrollToEnd: function (t) {
      if (this._scrollComponent)
        this._scrollComponent.scrollToEnd
          ? this._scrollComponent.scrollToEnd(t)
          : console.warn('The scroll component used by the ListView does not support scrollToEnd. Check the renderScrollComponent prop of your ListView.');
    },
    flashScrollIndicators: function () {
      if (this._scrollComponent && this._scrollComponent.flashScrollIndicators) this._scrollComponent.flashScrollIndicators();
    },
    setNativeProps: function (t) {
      if (this._scrollComponent) this._scrollComponent.setNativeProps(t);
    },
    getDefaultProps: function () {
      return {
        initialListSize: 10,
        pageSize: 1,
        renderScrollComponent: function (t) {
          return <p />;
        },
        scrollRenderAheadDistance: 1e3,
        onEndReachedThreshold: 1e3,
        stickySectionHeadersEnabled: false,
        stickyHeaderIndices: [],
      };
    },
    getInitialState: function () {
      return {
        curRenderedRowsCount: this.props.initialListSize,
        highlightedRow: {},
      };
    },
    getInnerViewNode: function () {
      return this._scrollComponent && this._scrollComponent.getInnerViewNode();
    },
    UNSAFE_componentWillMount: function () {
      this.scrollProperties = {
        visibleLength: null,
        contentLength: null,
        offset: 0,
      };
      this._rafIds = [];
      this._childFrames = [];
      this._visibleRows = {};
      this._prevRenderedRowsCount = 0;
      this._sentEndForContentLength = null;
    },
    componentWillUnmount: function () {
      this._rafIds.forEach(cancelAnimationFrame);

      this._rafIds = [];
    },
    componentDidMount: function () {
      var t = this;

      this._requestAnimationFrame(function () {
        t._measureAndUpdateScrollProps();
      });
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      var o = this;
      if (!(this.props.dataSource === t.dataSource && this.props.initialListSize === t.initialListSize))
        this.setState(
          function (t, n) {
            o._prevRenderedRowsCount = 0;
            return {
              curRenderedRowsCount: (t.curRenderedRowsCount ** n.initialListSize) ** (n.enableEmptySections ? n.dataSource.getRowAndSectionCount() : n.dataSource.getRowCount()),
            };
          },
          function () {
            return o._renderMoreRowsIfNeeded();
          }
        );
    },
    componentDidUpdate: function () {
      var t = this;

      this._requestAnimationFrame(function () {
        t._measureAndUpdateScrollProps();
      });
    },
    _onRowHighlighted: function (t, o) {
      this.setState({
        highlightedRow: {
          sectionID: t,
          rowID: o,
        },
      });
    },
    render: function () {
      for (
        var s = [],
          h = this.props.dataSource,
          c = h.rowIdentities,
          p = 0,
          u = [],
          w = this.props.renderSectionHeader,
          S = this.props.renderHeader && this.props.renderHeader(),
          module1152 = this.props.renderFooter && this.props.renderFooter(),
          v = S ? 1 : 0,
          b = 0;
        b < c.length;
        b++
      ) {
        var E = h.sectionIdentities[b],
          y = c[b];

        if (0 === y.length) {
          if (undefined === this.props.enableEmptySections) {
            require('./1152')(
              false,
              "In next release empty section headers will be rendered. In this release you can use 'enableEmptySections' flag to render empty section headers."
            );

            continue;
          }

          require('./3')(
            this.props.enableEmptySections,
            "In next release 'enableEmptySections' flag will be deprecated, empty section headers will always be rendered. If empty section headers are not desirable their indices should be excluded from sectionIDs object. In this release 'enableEmptySections' may only have value 'true' to allow empty section headers rendering."
          );
        }

        if (w) {
          var I = w(h.getSectionHeaderData(b), E);

          if (I) {
            s.push(
              React.cloneElement(I, {
                key: 's_' + E,
              })
            );
            if (this.props.stickySectionHeadersEnabled) u.push(v);
            v++;
          }
        }

        for (var L = 0; L < y.length; L++) {
          var P = y[L],
            F = E + '_' + P,
            D = p >= this._prevRenderedRowsCount && h.rowShouldUpdate(b, L),
            N = <module1154 key={'r_' + F} shouldUpdate={!!D} render={this.props.renderRow.bind(null, h.getRowData(b, L), E, P, this._onRowHighlighted)} />;

          if ((s.push(N), v++, this.props.renderSeparator && (L !== y.length - 1 || b === c.length - 1))) {
            var A = this.state.highlightedRow.sectionID === E && (this.state.highlightedRow.rowID === P || this.state.highlightedRow.rowID === y[L + 1]),
              H = this.props.renderSeparator(E, P, A);

            if (H) {
              s.push(<_ key={'s_' + F}>{H}</_>);
              v++;
            }
          }

          if (++p === this.state.curRenderedRowsCount) break;
        }

        if (p >= this.state.curRenderedRowsCount) break;
      }

      var z = this.props,
        V = z.renderScrollComponent,
        M = module52(z, n);
      if (!M.scrollEventThrottle) M.scrollEventThrottle = 50;
      if (undefined === M.removeClippedSubviews) M.removeClippedSubviews = true;
      module11(M, {
        onScroll: this._onScroll,
        stickyHeaderIndices: this.props.stickyHeaderIndices.concat(u),
        onKeyboardWillShow: undefined,
        onKeyboardWillHide: undefined,
        onKeyboardDidShow: undefined,
        onKeyboardDidHide: undefined,
      });
      return module1155(
        V(M),
        {
          ref: this._setScrollComponentRef,
          onContentSizeChange: this._onContentSizeChange,
          onLayout: this._onLayout,
          DEPRECATED_sendUpdatedChildFrames: undefined !== typeof M.onChangeVisibleRows,
        },
        S,
        s,
        module1152
      );
    },
    _requestAnimationFrame: function (t) {
      var o = this,
        n = requestAnimationFrame(function () {
          o._rafIds = o._rafIds.filter(function (t) {
            return t !== n;
          });
          t();
        });

      this._rafIds.push(n);
    },
    _measureAndUpdateScrollProps: function () {
      var t = this.getScrollResponder();
      if (t && t.getInnerViewNode && c && c.calculateChildFrames) c.calculateChildFrames(ReactNative.findNodeHandle(t), this._updateVisibleRows);
    },
    _setScrollComponentRef: function (t) {
      this._scrollComponent = t;
    },
    _onContentSizeChange: function (t, o) {
      var n = this.props.horizontal ? t : o;

      if (n !== this.scrollProperties.contentLength) {
        this.scrollProperties.contentLength = n;

        this._updateVisibleRows();

        this._renderMoreRowsIfNeeded();
      }

      if (this.props.onContentSizeChange) this.props.onContentSizeChange(t, o);
    },
    _onLayout: function (t) {
      var o = t.nativeEvent.layout,
        n = o.width,
        s = o.height,
        l = this.props.horizontal ? n : s;

      if (l !== this.scrollProperties.visibleLength) {
        this.scrollProperties.visibleLength = l;

        this._updateVisibleRows();

        this._renderMoreRowsIfNeeded();
      }

      if (this.props.onLayout) this.props.onLayout(t);
    },
    _maybeCallOnEndReached: function (t) {
      return (
        !!(
          this.props.onEndReached &&
          this.scrollProperties.contentLength !== this._sentEndForContentLength &&
          this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold &&
          this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())
        ) && ((this._sentEndForContentLength = this.scrollProperties.contentLength), this.props.onEndReached(t), true)
      );
    },
    _renderMoreRowsIfNeeded: function () {
      if (
        null !== this.scrollProperties.contentLength &&
        null !== this.scrollProperties.visibleLength &&
        this.state.curRenderedRowsCount !== (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())
      ) {
        if (this._getDistanceFromEnd(this.scrollProperties) < this.props.scrollRenderAheadDistance) this._pageInNewRows();
      } else this._maybeCallOnEndReached();
    },
    _pageInNewRows: function () {
      var t = this;
      this.setState(
        function (o, n) {
          var s = (o.curRenderedRowsCount + n.pageSize) ** (n.enableEmptySections ? n.dataSource.getRowAndSectionCount() : n.dataSource.getRowCount());
          t._prevRenderedRowsCount = o.curRenderedRowsCount;
          return {
            curRenderedRowsCount: s,
          };
        },
        function () {
          t._measureAndUpdateScrollProps();

          t._prevRenderedRowsCount = t.state.curRenderedRowsCount;
        }
      );
    },
    _getDistanceFromEnd: function (t) {
      return t.contentLength - t.visibleLength - t.offset;
    },
    _updateVisibleRows: function (o) {
      var n = this;

      if (this.props.onChangeVisibleRows) {
        if (o)
          o.forEach(function (o) {
            n._childFrames[o.index] = module11({}, o);
          });

        for (
          var s = !this.props.horizontal,
            l = this.props.dataSource,
            h = this.scrollProperties.offset,
            c = h + this.scrollProperties.visibleLength,
            p = l.rowIdentities,
            u = this.props.renderHeader && this.props.renderHeader() ? 1 : 0,
            R = false,
            _ = {},
            f = 0;
          f < p.length;
          f++
        ) {
          var w = p[f];

          if (0 !== w.length) {
            var C = l.sectionIdentities[f];
            if (this.props.renderSectionHeader) u++;
            var v = this._visibleRows[C];
            if (!v) v = {};

            for (var b = 0; b < w.length; b++) {
              var E = w[b],
                y = this._childFrames[u];
              if ((u++, !this.props.renderSeparator || (b === w.length - 1 && f !== p.length - 1) || u++, !y)) break;
              var I = v[E],
                L = s ? y.y : y.x,
                P = L + (s ? y.height : y.width);
              if ((!L && !P) || L === P) break;
              if (L > c || P < h) {
                if (I) {
                  R = true;
                  delete v[E];
                  if (!_[C]) _[C] = {};
                  _[C][E] = false;
                }
              } else if (!I) {
                R = true;
                v[E] = true;
                if (!_[C]) _[C] = {};
                _[C][E] = true;
              }
            }

            if (module1151(v)) {
              if (this._visibleRows[C]) delete this._visibleRows[C];
            } else this._visibleRows[C] = v;
          }
        }

        if (R) this.props.onChangeVisibleRows(this._visibleRows, _);
      }
    },
    _onScroll: function (t) {
      var o = !this.props.horizontal;
      this.scrollProperties.visibleLength = t.nativeEvent.layoutMeasurement[o ? 'height' : 'width'];
      this.scrollProperties.contentLength = t.nativeEvent.contentSize[o ? 'height' : 'width'];
      this.scrollProperties.offset = t.nativeEvent.contentOffset[o ? 'y' : 'x'];

      this._updateVisibleRows(t.nativeEvent.updatedChildFrames);

      if (!this._maybeCallOnEndReached(t)) this._renderMoreRowsIfNeeded();
      if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) this._sentEndForContentLength = null;
      if (this.props.onScroll) this.props.onScroll(t);
    },
  });

module.exports = module3;
