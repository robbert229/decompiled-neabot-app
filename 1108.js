var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = S(o);
    if (n && n.has(t)) return n.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var u = l ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (u && (u.get || u.set)) Object.defineProperty(s, p, u);
        else s[p] = t[p];
      }

    s.default = t;
    if (n) n.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1109 = require('./1109'),
  y = ['useSectionList', 'renderListView'];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (S = function (t) {
    return t ? n : o;
  })(t);
}

function O() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var b = (function (t) {
  module35.default(C, t);

  var PropTypes = C,
    S = O(),
    b = function () {
      var t,
        o = module34.default(PropTypes);

      if (S) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    var o;
    module24.default(this, C);

    (o = b.call(this, t))._renderItem = function (t) {
      return o.renderItem(t, o._rows);
    };

    o._onRef = function (t) {
      return o.setRefs(t);
    };

    o._rows = {};
    o.openCellKey = null;
    o.listViewProps = {};

    if ('ios' === ReactNative.Platform.OS) {
      o.yScrollOffset = 0;
      o.layoutHeight = 0;
      o.listViewProps = {
        onLayout: function (t) {
          return o.onLayout(t);
        },
        onContentSizeChange: function (t, n) {
          return o.onContentSizeChange(t, n);
        },
      };
    }

    o._onScroll = o.onScroll.bind(module39.default(o));

    if (o.props.onScroll && 'object' == typeof o.props.onScroll) {
      o.props.onScroll.__addListener(o._onScroll);

      o._onScroll = o.props.onScroll;
    }

    return o;
  }

  module25.default(C, [
    {
      key: 'componentDidUpdate',
      value: function () {
        if (this.props.refreshing) this.safeCloseOpenRow();
      },
    },
    {
      key: 'setScrollEnabled',
      value: function (t) {
        if (false !== this.props.scrollEnabled) {
          if (this._listView && this._listView.setNativeProps)
            this._listView.setNativeProps({
              scrollEnabled: t,
            });
          else if (this._listView && this._listView.getScrollResponder) {
            var o = this._listView.getScrollResponder();

            if (o.setNativeProps)
              o.setNativeProps({
                scrollEnabled: t,
              });
          }
          if (this.props.onScrollEnabled) this.props.onScrollEnabled(t);
        }
      },
    },
    {
      key: 'safeCloseOpenRow',
      value: function () {
        var t = this._rows[this.openCellKey];
        if (t && t.closeRow) this._rows[this.openCellKey].closeRow();
      },
    },
    {
      key: 'rowSwipeGestureBegan',
      value: function (t) {
        if (this.props.closeOnRowBeginSwipe && this.openCellKey && this.openCellKey !== t) this.safeCloseOpenRow();
        if (this.props.swipeGestureBegan) this.props.swipeGestureBegan(t);
      },
    },
    {
      key: 'rowSwipeGestureEnded',
      value: function (t, o) {
        if (this.props.swipeGestureEnded) this.props.swipeGestureEnded(t, o);
      },
    },
    {
      key: 'onRowOpen',
      value: function (t, o) {
        if (this.openCellKey && this.openCellKey !== t && this.props.closeOnRowOpen && !this.props.closeOnRowBeginSwipe) this.safeCloseOpenRow();
        this.openCellKey = t;
        if (this.props.onRowOpen) this.props.onRowOpen(t, this._rows, o);
      },
    },
    {
      key: 'onRowPress',
      value: function () {
        if (this.openCellKey && this.props.closeOnRowPress) {
          this.safeCloseOpenRow();
          this.openCellKey = null;
        }
      },
    },
    {
      key: 'onScroll',
      value: function (t) {
        if ('ios' === ReactNative.Platform.OS) this.yScrollOffset = t.nativeEvent.contentOffset.y;

        if (this.openCellKey && this.props.closeOnScroll) {
          this.safeCloseOpenRow();
          this.openCellKey = null;
        }

        if ('function' == typeof this.props.onScroll) this.props.onScroll(t);
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        this.layoutHeight = t.nativeEvent.layout.height;
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'onContentSizeChange',
      value: function (t, o) {
        var n = o - this.layoutHeight;
        if (this.yScrollOffset >= n && n > 0)
          this._listView instanceof ReactNative.FlatList
            ? this._listView && this._listView.scrollToEnd()
            : this._listView instanceof ReactNative.SectionList
            ? this._listView.scrollToEnd && this._listView.scrollToEnd()
            : this._listView instanceof ReactNative.Animated.FlatList && this._listView.scrollToEnd && this._listView.scrollToEnd();
        if (this.props.onContentSizeChange) this.props.onContentSizeChange(t, o);
      },
    },
    {
      key: 'setRefs',
      value: function (t) {
        this._listView = t;
        if ('function' == typeof this.props.listViewRef) {
          if (this.props.listViewRef) this.props.listViewRef(t);
        } else if ('object' == typeof this.props.listViewRef && Object.keys(this.props.listViewRef).includes('current')) this.props.listViewRef.current = t;
      },
    },
    {
      key: 'closeAllOpenRows',
      value: function () {
        var t = this;
        Object.keys(this._rows).forEach(function (o) {
          var n = t._rows[o];

          if (n) {
            var s = Math.round(n.currentTranslateX || 0);
            if (n.closeRow && 0 !== s) n.closeRow();
          }
        });
      },
    },
    {
      key: 'manuallyOpenAllRows',
      value: function (t) {
        var o = this;
        Object.keys(this._rows).forEach(function (n) {
          var s = o._rows[n];
          if (s && s.manuallySwipeRow) s.manuallySwipeRow(t);
        });
      },
    },
    {
      key: 'renderCell',
      value: function (t, o, s, l, p) {
        var u = this;
        return o
          ? React.default.createElement(
              module1109.default,
              {
                onSwipeValueChange: this.props.onSwipeValueChange
                  ? function (t) {
                      return u.props.onSwipeValueChange(
                        module11.default({}, t, {
                          key: s,
                        })
                      );
                    }
                  : null,
                ref: function (t) {
                  return (u._rows[s] = t);
                },
                swipeGestureBegan: function () {
                  return u.rowSwipeGestureBegan(s);
                },
                swipeGestureEnded: function (t, o) {
                  return u.rowSwipeGestureEnded(s, o);
                },
                onRowOpen: function (t) {
                  return u.onRowOpen(s, t);
                },
                onRowDidOpen: function (t) {
                  return u.props.onRowDidOpen && u.props.onRowDidOpen(s, u._rows, t);
                },
                onRowClose: function () {
                  return u.props.onRowClose && u.props.onRowClose(s, u._rows);
                },
                onRowDidClose: function () {
                  return u.props.onRowDidClose && u.props.onRowDidClose(s, u._rows);
                },
                onRowPress: function () {
                  return u.onRowPress(s);
                },
                leftActivationValue: l.leftActivationValue || this.props.leftActivationValue,
                rightActivationValue: l.rightActivationValue || this.props.rightActivationValue,
                leftActionValue: l.leftActionValue || this.props.leftActionValue || 0,
                rightActionValue: l.rightActionValue || this.props.rightActionValue || 0,
                initialLeftActionState: l.initialLeftActionState || this.props.initialLeftActionState,
                initialRightActionState: l.initialRightActionState || this.props.initialRightActionState,
                onLeftAction: function () {
                  return l.onLeftAction || (u.props.onLeftAction && u.props.onLeftAction(s, u._rows));
                },
                onRightAction: function () {
                  return l.onRightAction || (u.props.onRightAction && u.props.onRightAction(s, u._rows));
                },
                onLeftActionStatusChange: this.props.onLeftActionStatusChange
                  ? function (t) {
                      return u.props.onLeftActionStatusChange(
                        module11.default({}, t, {
                          key: s,
                        })
                      );
                    }
                  : null,
                onRightActionStatusChange: this.props.onRightActionStatusChange
                  ? function (t) {
                      return u.props.onRightActionStatusChange(
                        module11.default({}, t, {
                          key: s,
                        })
                      );
                    }
                  : null,
                shouldItemUpdate: this.props.shouldItemUpdate
                  ? function (t, o) {
                      return u.props.shouldItemUpdate(t, o);
                    }
                  : null,
                setScrollEnabled: function (t) {
                  return u.setScrollEnabled(t);
                },
                leftOpenValue: l.leftOpenValue || this.props.leftOpenValue,
                rightOpenValue: l.rightOpenValue || this.props.rightOpenValue,
                closeOnRowPress: l.closeOnRowPress || this.props.closeOnRowPress,
                disableLeftSwipe: l.disableLeftSwipe || this.props.disableLeftSwipe,
                disableRightSwipe: l.disableRightSwipe || this.props.disableRightSwipe,
                stopLeftSwipe: l.stopLeftSwipe || this.props.stopLeftSwipe,
                stopRightSwipe: l.stopRightSwipe || this.props.stopRightSwipe,
                recalculateHiddenLayout: this.props.recalculateHiddenLayout,
                disableHiddenLayoutCalculation: this.props.disableHiddenLayoutCalculation,
                style: this.props.swipeRowStyle,
                preview: p,
                previewDuration: this.props.previewDuration,
                previewOpenDelay: this.props.previewOpenDelay,
                previewOpenValue: this.props.previewOpenValue,
                previewRepeat: this.props.previewRepeat,
                previewRepeatDelay: this.props.previewRepeatDelay,
                tension: this.props.tension,
                restSpeedThreshold: this.props.restSpeedThreshold,
                restDisplacementThreshold: this.props.restDisplacementThreshold,
                friction: this.props.friction,
                directionalDistanceChangeThreshold: this.props.directionalDistanceChangeThreshold,
                swipeToOpenPercent: this.props.swipeToOpenPercent,
                swipeToOpenVelocityContribution: this.props.swipeToOpenVelocityContribution,
                swipeToClosePercent: this.props.swipeToClosePercent,
                item: l,
                useNativeDriver: this.props.useNativeDriver,
                onPreviewEnd: this.props.onPreviewEnd,
              },
              o,
              t
            )
          : React.default.cloneElement(
              t,
              module11.default({}, t.props, {
                ref: function (t) {
                  return (u._rows[s] = t);
                },
                onRowOpen: function (t) {
                  return u.onRowOpen(s, t);
                },
                onRowDidOpen: function (t) {
                  return u.props.onRowDidOpen && u.props.onRowDidOpen(s, u._rows, t);
                },
                onRowClose: function () {
                  return u.props.onRowClose && u.props.onRowClose(s, u._rows);
                },
                onRowDidClose: function () {
                  return u.props.onRowDidClose && u.props.onRowDidClose(s, u._rows);
                },
                onRowPress: function () {
                  return u.onRowPress();
                },
                setScrollEnabled: function (t) {
                  return u.setScrollEnabled(t);
                },
                swipeGestureBegan: function () {
                  return u.rowSwipeGestureBegan(s);
                },
                swipeGestureEnded: function (t, o) {
                  return u.rowSwipeGestureEnded(s, o);
                },
              })
            );
      },
    },
    {
      key: 'renderRow',
      value: function (t, o, n, s) {
        var l = '' + o + n,
          p = this.props.renderRow(t, o, n, s),
          u = this.props.renderHiddenRow && this.props.renderHiddenRow(t, o, n, s),
          c = this.props.dataSource && this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex || 0),
          f = (this.props.previewFirstRow || this.props.previewRowIndex) && n === c;
        return this.renderCell(p, u, l, t, f);
      },
    },
    {
      key: 'renderItem',
      value: function (t, o) {
        var n = this.props.renderItem(t, o),
          s = this.props.renderHiddenItem && this.props.renderHiddenItem(t, o),
          l = t.item,
          p = t.index,
          u = l.key;
        if (this.props.keyExtractor) u = this.props.keyExtractor(l, p);
        var c = undefined !== u && this.props.previewRowKey === u;
        return this.renderCell(n, s, u, l, c);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          s = t.useSectionList,
          l = t.renderListView,
          p = module52.default(t, y);

        if (l) {
          var u = !!this.props.renderRow;
          return l(p, this.setRefs.bind(this), this.onScroll.bind(this), u ? this.renderRow.bind(this, this._rows) : this.renderItem.bind(this));
        }

        if (s) {
          var c = this.props.useAnimatedList ? ReactNative.Animated.SectionList : ReactNative.SectionList;
          return React.default.createElement(
            c,
            module11.default({}, p, this.listViewProps, {
              ref: this._onRef,
              onScroll: this._onScroll,
              renderItem: this._renderItem,
            })
          );
        }

        var f = this.props.useAnimatedList ? ReactNative.Animated.FlatList : ReactNative.FlatList;
        return React.default.createElement(
          f,
          module11.default({}, p, this.listViewProps, {
            ref: this._onRef,
            onScroll: this._onScroll,
            renderItem: this._renderItem,
          })
        );
      },
    },
  ]);
  return C;
})(React.PureComponent);

b.propTypes = {
  renderListView: PropTypes.default.func,
  renderItem: PropTypes.default.func,
  renderHiddenItem: PropTypes.default.func,
  leftOpenValue: PropTypes.default.number,
  rightOpenValue: PropTypes.default.number,
  leftActivationValue: PropTypes.default.number,
  rightActivationValue: PropTypes.default.number,
  leftActionValue: PropTypes.default.number,
  rightActionValue: PropTypes.default.number,
  initialLeftActionState: PropTypes.default.bool,
  initialRightActionState: PropTypes.default.bool,
  stopLeftSwipe: PropTypes.default.number,
  stopRightSwipe: PropTypes.default.number,
  closeOnScroll: PropTypes.default.bool,
  closeOnRowPress: PropTypes.default.bool,
  closeOnRowBeginSwipe: PropTypes.default.bool,
  closeOnRowOpen: PropTypes.default.bool,
  disableLeftSwipe: PropTypes.default.bool,
  disableRightSwipe: PropTypes.default.bool,
  recalculateHiddenLayout: PropTypes.default.bool,
  disableHiddenLayoutCalculation: PropTypes.default.bool,
  swipeGestureBegan: PropTypes.default.func,
  swipeGestureEnded: PropTypes.default.func,
  onRowOpen: PropTypes.default.func,
  onRowDidOpen: PropTypes.default.func,
  onRowClose: PropTypes.default.func,
  onRowDidClose: PropTypes.default.func,
  onLeftAction: PropTypes.default.func,
  onRightAction: PropTypes.default.func,
  onLeftActionStatusChange: PropTypes.default.func,
  onRightActionStatusChange: PropTypes.default.func,
  onScrollEnabled: PropTypes.default.func,
  onScroll: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
  swipeRowStyle: PropTypes.default.object,
  listViewRef: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
  previewRowKey: PropTypes.default.string,
  previewFirstRow: PropTypes.default.bool,
  previewRowIndex: PropTypes.default.number,
  previewDuration: PropTypes.default.number,
  previewRepeat: PropTypes.default.bool,
  previewRepeatDelay: PropTypes.default.number,
  previewOpenDelay: PropTypes.default.number,
  previewOpenValue: PropTypes.default.number,
  friction: PropTypes.default.number,
  tension: PropTypes.default.number,
  restSpeedThreshold: PropTypes.default.number,
  restDisplacementThreshold: PropTypes.default.number,
  directionalDistanceChangeThreshold: PropTypes.default.number,
  swipeToOpenPercent: PropTypes.default.number,
  swipeToOpenVelocityContribution: PropTypes.default.number,
  swipeToClosePercent: PropTypes.default.number,
  shouldItemUpdate: PropTypes.default.func,
  onSwipeValueChange: PropTypes.default.func,
  useNativeDriver: PropTypes.default.bool,
  useAnimatedList: PropTypes.default.bool,
  keyExtractor: PropTypes.default.func,
  onPreviewEnd: PropTypes.default.func,
};
b.defaultProps = {
  leftOpenValue: 0,
  rightOpenValue: 0,
  closeOnRowBeginSwipe: false,
  closeOnScroll: true,
  closeOnRowPress: true,
  closeOnRowOpen: true,
  disableLeftSwipe: false,
  disableRightSwipe: false,
  recalculateHiddenLayout: false,
  disableHiddenLayoutCalculation: false,
  previewFirstRow: false,
  directionalDistanceChangeThreshold: 2,
  swipeToOpenPercent: 50,
  swipeToOpenVelocityContribution: 0,
  swipeToClosePercent: 50,
  useNativeDriver: true,
  previewRepeat: false,
  previewRepeatDelay: 1e3,
  useAnimatedList: false,
};
var C = b;
exports.default = C;
