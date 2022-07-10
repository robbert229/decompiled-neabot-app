require('./594');

var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module920 = require('./920'),
  ReactNative = (function (t, s) {
    if (!s && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = S(s);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      p = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = p ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, u, c);
        else o[u] = t[u];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react-native'));

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var s = new WeakMap(),
    n = new WeakMap();
  return (S = function (t) {
    return t ? n : s;
  })(t);
}

function v() {
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

ReactNative.NativeModules.RCTMapView;

var A = (function (t) {
    module35.default(E, t);

    var S = E,
      A = v(),
      T = function () {
        var t,
          s = module34.default(S);

        if (A) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(s, arguments, n);
        } else t = s.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var n;
      module24.default(this, E);

      (n = T.call(this, t)).savemapArea = function () {
        ReactNative.UIManager.dispatchViewManagerCommand(
          ReactNative.default.findNodeHandle(this.lghMapView),
          ReactNative.UIManager.getViewManagerConfig('LGHMapView').Commands.nativeSaveMapArea,
          []
        );
      };

      n.hello = function (t) {
        ReactNative.UIManager.dispatchViewManagerCommand(
          ReactNative.default.findNodeHandle(module39.default(n)),
          ReactNative.UIManager.getViewManagerConfig('RCTMapView').Commands.nativeSaveMapArea,
          [t]
        );
      };

      n.lghhaha = React.default.createRef();
      var p = '',
        u = '';

      try {
        if (n.props.getPropertiesData.data) {
          p = n.props.getPropertiesData.data;
          u = JSON.stringify(JSON.parse(p.map).data);
        } else u = JSON.stringify(JSON.parse(n.props.getPropertiesData).data);
      } catch (t) {
        console.log('map\u6570\u636e\u89e3\u6790\u51fa\u9519\u274c' + JSON.stringify(t));
      }

      n.state = {
        mapStrDataData: [u, n.props.status],
        statusType: n.props.status,
        isSetUp: !!n.props.isSetUp && n.props.isSetUp,
        HisPath: p.hisPath,
        CurPathr: p.curPath,
        path: [p.hisPath, p.curPath],
        mapType: [0, true],
        areas: [],
        autoFlag: true,
        autoEditMode: -1,
        resetMap: false,
        addArea: [],
        editAreaType: null,
        isTimeData: 0 != n.props.isTimeData,
        touchName: '',
        deleteArea: false,
        cleanTimes: null,
        newPath: null,
        isShow: true,
        clearMap: false,
        mapFunctionType: n.props.mapFunctionType ? n.props.mapFunctionType : 0,
        forbidType: '',
        mapSurfaceView: '',
        mapAutoAreas: [],
        segmentTagIds: [],
        autoAreas: [],
        tagIds: [],
      };
      return n;
    }

    module25.default(E, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            s = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.MapMessageModule);
          this.emitterSubscription = s.addListener('OnSurfaceCreatedListener', function (s) {
            switch ((console.log('\u5730\u56fe\u6e32\u67d3\u72b6\u6001 OnSurfaceCreatedListener========================================' + JSON.stringify(s)), s.method)) {
              case 'surfaceCreated':
                break;

              case 'sweepMapCreated':
                console.log('===================33333333=================' + JSON.stringify(t.state.autoAreas));

                try {
                  t.setState({
                    mapAutoAreas: t.state.autoAreas,
                    path: [t.state.HisPath, t.state.CurPathr],
                  });
                } catch (t) {}

                if (t.state.isSetUp) ReactNative.DeviceEventEmitter.emit('isSetShowArea');
                if (t.props.areaListFun) t.props.areaListFun();
                if (t.props.isPartitionMap) t.props.isPartitionMapFun();
                break;

              case 'autoClickSweepArea':
                if (
                  (console.log('===JSMaPView===autoClickSweepArea===\u5206\u533a \u9009\u4e2d/\u53d6\u6d88 \u6570\u636e= ' + JSON.stringify(s)),
                  s.hasOwnProperty('selectAutoNum') && s.hasOwnProperty('segmentTagIds'))
                ) {
                  ReactNative.DeviceEventEmitter.emit('selectNum', s.selectAutoNum, s.segmentTagIds);
                  console.log(
                    'JSMaPView\u4e4b\u524d\u7684\u5206\u533a\u6570\u636e:' + JSON.stringify(t.state.mapAutoAreas),
                    '\u4e4b\u524d\u9009\u4e2d\u7684\u5206\u533a\u6570\u636e' + JSON.stringify(t.state.segmentTagIds),
                    '\u73b0\u5728\u7684\u9009\u4e2d\u7684\u5206\u533a\u6570\u636e' + JSON.stringify(s.segmentTagIds)
                  );

                  var n = function (t, s) {
                      var n = t ? t.toString() : '',
                        o = s ? s.toString() : '';

                      if (n && o) {
                        for (var p = '', u = '', c = n.length - 1; c >= 0; c--) {
                          p += n.charAt(c).charCodeAt();
                        }

                        for (c = o.length - 1; c >= 0; c--) {
                          u += o.charAt(c).charCodeAt();
                        }

                        return p < u ? -1 : p > u ? 1 : 0;
                      }
                    },
                    o = module920.default.cloneDeep(s.segmentTagIds),
                    p = module920.default.cloneDeep(t.state.segmentTagIds),
                    u = o.sort(n),
                    c = p.sort(n);

                  if (t.state.segmentTagIds && u !== c) {
                    if (!(u.length > c.length)) {
                      u.length;
                      c.length;
                    }

                    t.setState({
                      segmentTagIds: s.segmentTagIds,
                    });
                  }
                }

                if (
                  (t.props.sweepArea && s.hasOwnProperty('selectAutoNum') && t.props.sweepArea(s.selectAutoNum),
                  t.props.mapSweeparea && s.hasOwnProperty('sweepArea') && s.hasOwnProperty('autoId'))
                )
                  if ('android' == ReactNative.Platform.OS) {
                    var l = module920.default.cloneDeep(s.sweepArea);
                    l.selected = s.isSelect;
                    t.props.mapSweeparea(l, s.autoId);
                  } else t.props.mapSweeparea(s.sweepArea, s.autoId);
                break;

              case 'clickSweepArea':
                ReactNative.DeviceEventEmitter.emit('clickSweepArea', s);
                break;

              case 'changeSelectAreaState':
                if (
                  (console.log('\u9009\u4e2d/\u53d6\u6d88 \u9009\u4e2d\u533a\u57df=changeSelectAreaState===' + JSON.stringify(s)),
                  s.hasOwnProperty('selectAreaNum') && s.hasOwnProperty('tagIds'))
                ) {
                  ReactNative.DeviceEventEmitter.emit('areaNum', s.selectAreaNum, s.tagIds);
                  console.log(
                    '\u4e4b\u524d\u9009\u4e2d\u7684\u533a\u57df========' + JSON.stringify(t.state.tagIds),
                    '\u5f53\u524d\u9009\u4e2d\u7684\u533a\u57df========' + JSON.stringify(s.tagIds),
                    '\u4e4b\u524d\u7684\u533a\u57df\u6570\u636e:' + JSON.stringify(t.state.autoAreas),
                    'mapType:' + JSON.stringify(t.state.mapType)
                  );

                  var S = function (t, s) {
                      var n = t ? t.toString() : '',
                        o = s ? s.toString() : '';

                      if (n && o) {
                        for (var p = '', u = '', c = n.length - 1; c >= 0; c--) {
                          p += n.charAt(c).charCodeAt();
                        }

                        for (c = o.length - 1; c >= 0; c--) {
                          u += o.charAt(c).charCodeAt();
                        }

                        return p < u ? -1 : p > u ? 1 : 0;
                      }
                    },
                    v = module920.default.cloneDeep(s.tagIds),
                    A = module920.default.cloneDeep(t.state.tagIds),
                    y = v.sort(S),
                    T = A.sort(S);

                  if (t.state.tagIds && y !== T) {
                    if (!(y.length > T.length)) {
                      y.length;
                      T.length;
                    }

                    t.setState({
                      tagIds: s.tagIds,
                    });
                  }
                }

                if (t.props.tagNumFun && s.hasOwnProperty('selectAreaNum')) t.props.tagNumFun(s.selectAreaNum);
                break;

              case 'limitAreaTips':
                ReactNative.DeviceEventEmitter.emit('LocalLimitAreaTips', s.tips);
                break;

              case 'onDeleteSweepArea':
                console.log('\u5220\u9664\u533a\u57df\u89e6\u53d1onDeleteSweepArea:' + JSON.stringify(s));
                ReactNative.DeviceEventEmitter.emit('clickSweepArea', s);
                break;

              case 'onSetMapComplete':
                if (t.props.autoAreaFun) t.props.autoAreaFun();
                if (t.props.areaListFun) t.props.areaListFun();
            }
          });
          if ('android' == ReactNative.Platform.OS) this.androidEvent = ReactNative.DeviceEventEmitter.addListener('OnSurfaceCreatedListener', function (t) {});
          this.statusType = ReactNative.DeviceEventEmitter.addListener('statusType', function (s) {
            t.setState({
              statusType: s,
            });
          });
          this.mapStrClean = ReactNative.DeviceEventEmitter.addListener('cleanIndexMap', function (s) {
            if (t.state.isTimeData)
              t.setState({
                mapStrDataData: null != s ? [s, t.state.statusType] : [t.state.mapStrDataData, t.state.statusType],
              });
          });
          this.curPath = ReactNative.DeviceEventEmitter.addListener('curPath', function (s) {
            if (t.state.isTimeData)
              t.setState(
                {
                  CurPath: s,
                  path: [''],
                },
                function () {
                  t.setState({
                    path: [t.state.HisPath, s],
                  });
                }
              );
          });
          this.hisPath = ReactNative.DeviceEventEmitter.addListener('hisPath', function (s) {
            if (t.state.isTimeData)
              t.setState(
                {
                  HisPath: s,
                  path: [''],
                },
                function () {
                  t.setState({
                    path: [s, ''],
                  });
                }
              );
          });
          this.mapPatDel = ReactNative.DeviceEventEmitter.addListener('mapPatDel', function () {
            t.setState({
              path: [],
            });
          });
          this.mapType = ReactNative.DeviceEventEmitter.addListener('mapTypeData', function (s) {
            console.log('\u5730\u56fe\u6536\u5230\u5f53\u524d\u6e05\u626b\u7c7b\u578b' + JSON.stringify(s));
            var n = s || 0;
            if ('null' == n) n = 0;
            t.setState({
              mapType: [undefined != n ? n : 0, true],
            });
          });
          this.autoAreas = ReactNative.DeviceEventEmitter.addListener('autoAreas', function (s) {
            if (s) console.log('=====JSMapView== \u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u5206\u533a\u6570\u636e() = ' + JSON.stringify(s));

            var n = function (t) {
              var s = [];
              if (t)
                for (var n = 0; n < t.length; n++) {
                  var o = module920.default.cloneDeep(t[n]);
                  o.name;
                  s.push(o);
                }
              return s;
            };

            if ('' != t.state.mapAutoAreas) {
              var o = n(s);
              t.setState(
                {
                  mapAutoAreas: [],
                },
                function () {
                  t.setState({
                    mapAutoAreas: o,
                  });
                }
              );
            } else {
              var p = n(s);
              t.setState({
                autoAreas: p,
                mapAutoAreas: p,
              });
            }
          });
          this.areasData = ReactNative.DeviceEventEmitter.addListener('mapAreas', function (s) {
            console.log('======= \u4e0d\u540c\u6e05\u626b\u6a21\u5f0f\u5bf9\u5e94\u7684\u533a\u57df\u6570\u636e = ' + JSON.stringify(s));
            if (s)
              t.setState({
                areas: s,
              });
          });
          this.autoEditMode = ReactNative.DeviceEventEmitter.addListener('autoEditMode', function (s) {
            console.log('======= JSMapView \u7f16\u8f91\u5206\u533a 0 \u547d\u540d 1\u62c6\u5206 2\u5408\u5e76 3\u9000\u51fa:' + JSON.stringify(s));
            t.setState({
              autoEditMode: s,
            });
          });
          this.resetMap = ReactNative.DeviceEventEmitter.addListener('resetMap', function (s) {
            t.setState(
              {
                resetMap: false,
              },
              function () {
                t.setState({
                  resetMap: s,
                });
              }
            );
          });
          this.addArea = ReactNative.DeviceEventEmitter.addListener('addArea', function (s) {
            console.log('======= JSMapView \u7f16\u8f91\u5206\u533a\u3001\u7981\u533aaddArea:' + JSON.stringify(s));
            t.setState(
              {
                addArea: null,
                autoFlag: false,
              },
              function () {
                t.setState({
                  addArea: s,
                });
              }
            );
          });
          this.editAreaType = ReactNative.DeviceEventEmitter.addListener('editAreaType', function (s) {
            t.setState({
              editAreaType: s,
            });
          });
          this.touchName = ReactNative.DeviceEventEmitter.addListener('touchName', function (s) {
            t.setState({
              touchName: s,
            });
          });
          this.deleteArea = ReactNative.DeviceEventEmitter.addListener('deleteArea', function (s) {
            console.log('======= JSMapView \u5220\u9664 \u7f16\u8f91\u7981\u533a\u6216\u8005\u666e\u901a\u533a\u57df = ' + JSON.stringify(s));
            t.setState(
              {
                deleteArea: false,
              },
              function () {
                t.setState({
                  deleteArea: true,
                });
              }
            );
          });
          this.cleanTimes = ReactNative.DeviceEventEmitter.addListener('cleanTimes', function (s) {
            t.setState(
              {
                cleanTimes: 0,
              },
              function () {
                t.setState({
                  cleanTimes: s,
                });
              }
            );
          });
          this.autoFlag = ReactNative.DeviceEventEmitter.addListener('autoFlag', function (s) {
            t.setState({
              autoFlag: true,
            });
          });
          this.tagIds = ReactNative.DeviceEventEmitter.addListener('tagIds', function (s) {
            t.setState({
              tagIds: s,
            });
          });
          this.segmentTagIds = ReactNative.DeviceEventEmitter.addListener('segmentTagIds', function (s) {
            t.setState({
              segmentTagIds: s,
            });
          });
          this.clearMapStatus = ReactNative.DeviceEventEmitter.addListener('clearMapStatus', function (s) {
            t.setState({
              clearMap: true,
            });
          });
          this.forbidTypeState = ReactNative.DeviceEventEmitter.addListener('forbidTypeState', function (s) {
            t.setState(
              {
                forbidType: '',
              },
              function () {
                t.setState({
                  forbidType: s,
                });
              }
            );
          });
          this.mapSurfaceViewStatus = ReactNative.DeviceEventEmitter.addListener('mapSurfaceViewStatus', function (s) {
            console.log('\u673a\u5668\u4eba\u6e05\u626b\u72b6\u6001:' + JSON.stringify(s));
            t.setState({
              mapSurfaceView: s,
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          try {
            if (this.emitterSubscription) this.emitterSubscription.emitter.removeAllListeners('OnSurfaceCreatedListener');
            if (this.androidEvent) this.androidEvent.removeAllListeners('OnSurfaceCreatedListener');
          } catch (t) {}

          if (this.mapStrClean) this.mapStrClean.emitter.removeAllListeners('cleanIndexMap');
          if (this.curPath) this.curPath.emitter.removeAllListeners('curPath');
          if (this.hisPath) this.hisPath.emitter.removeAllListeners('hisPath');
          if (this.mapType) this.mapType.emitter.removeAllListeners('mapTypeData');
          if (this.areasData) this.areasData.emitter.removeAllListeners('mapAreas');
          if (this.mapPatDel) this.mapPatDel.emitter.removeAllListeners('mapPatDel');
          if (this.autoAreas) this.autoAreas.emitter.removeAllListeners('autoAreas');
          if (this.autoEditMode) this.autoEditMode.emitter.removeAllListeners('autoEditMode');
          if (this.resetMap) this.resetMap.emitter.removeAllListeners('resetMap');
          if (this.editAreaType) this.editAreaType.emitter.removeAllListeners('editAreaType');
          if (this.addArea) this.addArea.emitter.removeAllListeners('addArea');
          if (this.tagIds) this.tagIds.emitter.removeAllListeners('tagIds');
          if (this.segmentTagIds) this.segmentTagIds.emitter.removeAllListeners('segmentTagIds');
          if (this.touchName) this.touchName.emitter.removeAllListeners('touchName');
          if (this.deleteArea) this.deleteArea.emitter.removeAllListeners('deleteArea');
          if (this.cleanTimes) this.cleanTimes.emitter.removeAllListeners('cleanTimes');
          if (this.clearMapStatus) this.clearMapStatus.emitter.removeAllListeners('clearMapStatus');
          if (this.forbidTypeState) this.forbidTypeState.emitter.removeAllListeners('forbidTypeState');
          if (this.mapSurfaceViewStatus) this.mapSurfaceViewStatus.emitter.removeAllListeners('mapSurfaceViewStatus');

          this.setState = function (t, s) {};
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(y, {
            style: {
              width: '100%',
              height: '100%',
            },
            mapStr: this.state.mapStrDataData,
            path: this.state.path,
            mapType: this.state.mapType,
            areas: this.state.areas,
            autoAreas: this.state.mapAutoAreas,
            autoFlag: this.state.autoFlag,
            autoEditMode: this.state.autoEditMode,
            resetMap: this.state.resetMap,
            addArea: this.state.addArea,
            editAreaType: this.state.editAreaType,
            tagIds: this.state.tagIds,
            segmentTagIds: this.state.segmentTagIds,
            ref: this.lghhaha,
            touchName: this.state.touchName,
            deleteArea: this.state.deleteArea,
            cleanTimes: this.state.cleanTimes,
            clearMap: this.state.clearMap,
            mapFunctionType: this.state.mapFunctionType,
            forbidType: this.state.forbidType,
            mapSurfaceView: this.state.mapSurfaceView,
            pathHidingType: this.props.AppFunction ? this.props.AppFunction.pathHidingType.split(',') : [],
            pathColor: '#855554',
            showPath: !!this.props.showPath,
          });
        },
      },
    ]);
    return E;
  })(React.default.Component),
  y = ReactNative.requireNativeComponent('RCTMapView', A),
  T = A;

exports.default = T;
