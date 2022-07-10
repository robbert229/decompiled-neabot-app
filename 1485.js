var module403 = require('./403'),
  module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module588 = _interopRequireWildcard(require('./588')),
  module1486 = require('./1486'),
  ReactNative = require('react-native'),
  module1656 = require('./1656'),
  module1180 = require('./1180'),
  module1146 = require('./1146'),
  module1110 = _interopRequireWildcard(require('./1110')),
  module593 = require('./593'),
  module1342 = require('./1342'),
  module812 = require('./812'),
  module920 = _interopRequireWildcard(require('./920')),
  module594 = require('./594');

function _getRequireWildcardCache(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (_getRequireWildcardCache = function (t) {
    return t ? n : o;
  })(t);
}

function _interopRequireWildcard(t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };

  var n = _getRequireWildcardCache(o);

  if (n && n.has(t)) return n.get(t);
  var l = {},
    s = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (u && (u.get || u.set)) Object.defineProperty(l, c, u);
      else l[c] = t[c];
    }

  l.default = t;
  if (n) n.set(t, l);
  return l;
}

function _createSuper(t) {
  var o = _isNativeReflectConstruct();

  return function () {
    var n,
      l = module34.default(t);

    if (o) {
      var s = module34.default(this).constructor;
      n = Reflect.construct(l, arguments, s);
    } else n = l.apply(this, arguments);

    return module37.default(this, n);
  };
}

function _isNativeReflectConstruct() {
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

var ControlApiModule = ReactNative.NativeModules.ControlApiModule,
  formatDateString = function (t) {
    var o = new Date(1e3 * parseInt(t));
    return (
      o.getFullYear() +
      '-' +
      checkNum(parseInt(o.getMonth()) + 1) +
      '-' +
      checkNum(o.getDate()) +
      ' ' +
      checkNum(o.getHours()) +
      ':' +
      checkNum(o.getMinutes()) +
      ':' +
      checkNum(o.getSeconds())
    );
  };

exports.formatDateString = formatDateString;

var formatStringWithHtml = function (t) {
  return t
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

exports.formatStringWithHtml = formatStringWithHtml;

var checkNum = function (t) {
  if (t < 10) t = '0' + t;
  return t;
};

exports.checkNum = checkNum;

var module1422 = (function (_React$Component) {
  module35.default(module1428, _React$Component);

  var _super = _createSuper(module1428);

  function module1428(t) {
    var o;
    module24.default(this, module1428);

    (o = _super.call(this, t))._handleAppStateChange = function (t) {
      console.log('\u524d\u540e\u53f0\u5207\u6362\uff1a' + t);
      if (null != t && 'active' === t)
        o.setState(
          {
            showDatas: null,
          },
          function () {
            o.loadData();
          }
        );
    };

    var n = o.props.route.params;
    o.state = {
      maps: [],
      mapInfo: [],
      mapData: [],
      showDatas: null,
      mapId: n.mapId,
      editable: false,
      currentName: '',
      canSaveNums: 0,
      UpdateMapProgress: null,
      areas: null,
      index: 0,
      map: '',
      deviceId: n.deviceId,
      showMultiFloor: true,
    };
    o.loadData();
    return o;
  }

  module25.default(module1428, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.state.showMultiFloor = true;
        this.appStateEvent = ReactNative.AppState.addEventListener('change', this._handleAppStateChange);
        var eventEmitter = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.ControlApiModule);
        this.eventEmitter = eventEmitter.addListener('addSingleListener', function (event) {
          var dd = module920.default.cloneDeep(event);
          if (dd.data && dd.data.curPath) dd.data.curPath = '';
          if (dd.data && dd.data.hisPath) dd.data.hisPath = '';
          var showDatas = dd.data;

          if (_this2.state.showMultiFloor) {
            var tempArr = [],
              specialID = 0;

            if (undefined != dd.data.multiMapData0) {
              if (!('EH8=' != dd.data.multiMapData0.data.map && '' != dd.data.multiMapData0.data.map)) specialID = dd.data.multiMapData0.data.mapID;
              tempArr.push(_this2.getDevicesProper(JSON.stringify(dd.data.multiMapData0.data)));
            }

            if (undefined != dd.data.multiMapData1 && null != dd.data.multiMapData1) {
              if (!('EH8=' != dd.data.multiMapData1.data.map && '' != dd.data.multiMapData1.data.map)) specialID = dd.data.multiMapData1.data.mapID;
              tempArr.push(_this2.getDevicesProper(JSON.stringify(dd.data.multiMapData1.data)));
            }

            if (undefined != dd.data.multiMapData2) {
              if (!('EH8=' != dd.data.multiMapData2.data.map && '' != dd.data.multiMapData2.data.map)) specialID = dd.data.multiMapData2.data.mapID;
              tempArr.push(_this2.getDevicesProper(JSON.stringify(dd.data.multiMapData2.data)));
            }

            _this2.state.showMultiFloor = false;
            var that = _this2;
            Promise.all(tempArr).then(function (t) {
              that._displayMultiFloor(t, specialID, that);
            });
          }

          if (undefined == dd.data || null == dd.data || (undefined != dd.data.map && null != dd.data.map))
            _this2.setState(
              {
                showDatas: dd,
                deviceId: undefined != event.deviceId ? event.deviceId : _this2.state.deviceId,
              },
              function () {
                if (showDatas && showDatas != _this2.state.showDatas) {
                  var map = '',
                    v1 = -1,
                    mmap = '';

                  if (showDatas.map && '' != showDatas.map) {
                    try {
                      map = JSON.parse(showDatas.map);
                    } catch (error) {
                      map = JSON.parse(event).data;
                      mmap = showDatas.map;
                      var x = encodeURIComponent(mmap);
                      mmap = decodeURIComponent(x);

                      try {
                        map = eval('(' + mmap + ')');
                        console.log('map\u89e3\u6790\u6210\u529f>22222>' + v1);
                      } catch (error) {
                        mmap = mmap.replace('{"vertexs":]', '{"vertexs":[]');
                        map = eval('(' + mmap + ')');
                        console.log('map\u89e3\u6790\u5931\u8d25\u274c' + JSON.stringify(error), 'v1:' + v1);
                      }
                    }

                    v1 = map.data.mapId;
                    console.log('=======this.state.mapId:' + _this2.state.mapId, 'v1:' + v1);

                    _this2.setState({
                      map: map,
                      mapId: -1 != v1 ? v1 : _this2.state.mapId,
                    });
                  }

                  if ((showDatas && showDatas.curPath, showDatas && showDatas.hisPath, showDatas && showDatas.areaList)) {
                    if ((console.log('\u914d\u7f6e\u533a\u57df\u4fe1\u606f2:' + JSON.stringify(showDatas.areaList)), showDatas.areaList.hasOwnProperty('autoAreaValue'))) {
                      var autoAreaValue = showDatas.areaList.autoAreaValue;

                      _this2.setState({
                        canSaveNums: autoAreaValue.length,
                      });
                    }

                    _this2.setState({
                      areas: showDatas.areaList,
                    });

                    showDatas.areaList.autoAreaValue;
                  }

                  if (showDatas.mode)
                    console.log(
                      '===========charge ==333333\u76d1\u542c\u8fd4\u56de \u5305\u542b\u6709\u8bbe\u5907\u72b6\u6001\u6570\u636e============= ' + JSON.stringify(showDatas.mode),
                      'this.state.mapId:' + _this2.state.mapId,
                      'event.deviceId:' + event.deviceId
                    );
                }
              }
            );
          else console.log('\u5730\u56fe\u6570\u636e\u4e3a\u7a7a');
        });
        this.saveMutilMap = ReactNative.DeviceEventEmitter.addListener('saveMutilMap', function (t) {
          console.log('\u6536\u5230\u5237\u65b0\u901a\u77e5');

          try {
            _this2.setState(
              {
                showDatas: null,
              },
              function () {
                setTimeout(function () {
                  _this2._getDeviceAttributes('save map');
                }, 2e3);
              }
            );
          } catch (t) {}
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        console.log('\u79fb\u9664\u591a\u5730\u56fe componentWillUnmount');
        if (this.eventEmitter) this.eventEmitter.emitter.removeAllListeners('addSingleListener');
        if (this.saveMutilMap) this.saveMutilMap.emitter.removeAllListeners('saveMutilMap');
        if (this.appStateEvent) this.appStateEvent.remove();
      },
    },
    {
      key: '_getDeviceAttributes',
      value: function (t) {
        for (var o = this, n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) l[s - 1] = arguments[s];

        if (l) l = l[0];
        console.log('call from:' + t);
        setTimeout(function () {
          o.loadData(l);
        }, 1100);
      },
    },
    {
      key: 'getDevicesProper',
      value: function (t) {
        return new Promise(function (o, n) {
          ControlApiModule.getSweepMapBitmapFromHiddenRobot(t, true).then(function (n) {
            o({
              map: n,
              item: t,
            });
          });
        });
      },
    },
    {
      key: 'loadData',
      value: function loadData(...args) {
        if (args) args = args[0];
        var that = this;
        module1180.default(
          'getDeviceAttributes',
          this.props.route.params,
          function (msg) {
            var dd = module920.default.cloneDeep(msg);
            if (dd.data && dd.data.curPath) dd.data.curPath = '';
            if (dd.data && dd.data.hisPath) dd.data.hisPath = '';
            console.log('------------------------------------------------------------------');

            _this4.setState(
              {
                showDatas: dd,
                deviceId: undefined != msg.deviceId ? msg.deviceId : _this4.state.deviceId,
              },
              function () {
                if ((console.log('\u8fd4\u56de\u8bbe\u5907\u6570\u636e============'), msg && msg.data)) {
                  var tmaps = [];

                  if (msg.data.hasOwnProperty('multiMapData2') && '' != msg.data.multiMapData2) {
                    var ddData = msg.data.multiMapData2;
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\\\"/g, '"');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\"{/g, '{');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/}\"/g, '}');

                    if (undefined != ddData && null != ddData) {
                      msg.data.multiMapData2 = ddData;
                      tmaps.push(msg.data.multiMapData2);
                    }
                  }

                  if (msg.data.hasOwnProperty('multiMapData1') && '' != msg.data.multiMapData1) {
                    var ddData = msg.data.multiMapData1;
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\\\"/g, '"');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\"{/g, '{');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/}\"/g, '}');

                    if (undefined != ddData && null != ddData) {
                      msg.data.multiMapData1 = ddData;
                      tmaps.push(msg.data.multiMapData1);
                    }
                  }

                  if (msg.data.hasOwnProperty('multiMapData0') && '' != msg.data.multiMapData0) {
                    var ddData = msg.data.multiMapData0;
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\\\"/g, '"');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/\"{/g, '{');
                    if (undefined != ddData && null != ddData) ddData = ddData.replace(/}\"/g, '}');

                    if (undefined != ddData && null != ddData) {
                      msg.data.multiMapData0 = ddData;
                      tmaps.push(msg.data.multiMapData0);
                    }
                  }

                  if (
                    (_this4.setState({
                      maps: tmaps,
                    }),
                    !msg.data.hasOwnProperty('multiMapsInfo'))
                  )
                    return;
                  var ddData = msg.data.multiMapsInfo;
                  if (undefined != ddData && null != ddData) ddData = ddData.replace(/\\\"/g, '"');
                  if (undefined != ddData && null != ddData) ddData = ddData.replace(/\"{/g, '{');
                  if (undefined != ddData && null != ddData) ddData = ddData.replace(/}\"/g, '}');
                  console.log('\u591a\u697c\u5c42\u5730\u56fe:' + ddData);
                  var tmapInfo = JSON.parse(ddData);

                  try {
                    var _mmpps = tmapInfo.maps;
                    console.log('----mmpps:' + JSON.stringify(_mmpps));

                    for (var _i85 = 0; _i85 < _mmpps.length; _i85++) {
                      var dmmap = _mmpps[_i85].mapId;
                      console.log('info mapid: ' + dmmap);
                    }

                    if (tmaps.length != _mmpps.length && _mmpps.length < 4) {
                      if ((console.log('maps:\u6570\u636e\u5f02\u5e38'), console.log('this.state.index: ' + _this4.state.index), tmaps.length > _mmpps.length)) {
                        for (var ok = false, dmmap = '', _i = 0; _i < tmaps.length; _i++) {
                          var item = tmaps[_i];

                          if (item && '' != item) {
                            item = JSON.parse(item);
                            dmmap = item.data.mapID;
                            console.log('\u9700\u8981\u4fdd\u5b58\u5f53\u524d\u5730\u56fe=111111>' + JSON.stringify(dmmap));
                            ok = true;
                          }
                        }

                        if (!ok)
                          ControlApiModule.operateMap(
                            _this4.state.deviceId,
                            'save',
                            JSON.stringify({
                              type: 'local',
                              mapId: dmmap,
                            })
                          ).then(function (t) {
                            console.log(
                              '\u4fdd\u5b58\u5730\u56fe\u8fd4\u56de' + JSON.stringify(t),
                              'dmmap:' + dmmap,
                              'deviceId:' + _this4.state.deviceId,
                              'this.state.mapId:' + _this4.state.mapId
                            );
                            if (t && 200 == t.data.code) {
                              if (undefined != t.data.data.code && 0 == t.data.data.code) console.log('\u4fdd\u5b58\u591a\u5730\u56fe\u6210\u529f1');
                            } else console.log((t.localMsg, t.localMsg));
                          });
                      }

                      if (_this4.state.index <= 3)
                        _this4.setState({
                          index: _this4.state.index + 1,
                        });
                    } else if (
                      tmaps.length != _mmpps.length &&
                      _mmpps.length >= 4 &&
                      (console.log('maps:\u6570\u636e\u5f02\u5e38'), console.log('this.state.index: ' + _this4.state.index), _this4.state.index <= 3)
                    ) {
                      _this4.setState({
                        index: _this4.state.index + 1,
                      });

                      for (var ok = false, dmmap = '', _i2 = 0; _i2 < tmaps.length; _i2++) {
                        var item = tmaps[_i2];

                        if (item && '' != item) {
                          item = JSON.parse(item);
                          dmmap = item.data.mapID;
                          console.log('\u9700\u8981\u6e05\u7406\u5f53\u524d\u5730\u56fe=111111>' + JSON.stringify(dmmap));
                          ok = true;
                        }
                      }

                      if (!ok)
                        ControlApiModule.operateMap(
                          _this4.state.deviceId,
                          'delete',
                          JSON.stringify({
                            type: 'local',
                            mapId: dmmap,
                          })
                        ).then(function (t) {
                          console.log('\u5220\u9664\u5f53\u524d\u5730\u56fe\u8fd4\u56de11111111' + JSON.stringify(t) + '\nitem.mapID:' + dmmap);

                          _this4._getDeviceAttributes('delete map');
                        });
                    }

                    _this4.setState({
                      index: 0,
                    });
                  } catch (t) {}

                  _this4.setState({
                    mapInfo: tmapInfo,
                  });

                  var msgData = dd.data;

                  if (
                    (msgData.curPath,
                    msgData.hisPath,
                    msgData.mode &&
                      (console.log(
                        '=======dddddd==333333\u76d1\u542c\u8fd4\u56de \u5305\u542b\u6709\u8bbe\u5907\u72b6\u6001\u6570\u636e==dddddd=========== ' + JSON.stringify(msgData.mode),
                        'msg.deviceId:' + msg.deviceId,
                        'his.state.mapId:' + _this4.state.mapId
                      ),
                      ('charge' != msgData.mode && 'backcharge' != msgData.mode && 'findchargerpause' != msgData.mode && 'fullcharge' != msgData.mode && 'idle' != msgData.mode) ||
                        _this4.checkStateToSaveMap()),
                    msgData.hasOwnProperty('areaList'))
                  ) {
                    var areaList = msgData.areaList;

                    if ((console.log('\u533a\u57df\u6570\u636e' + JSON.stringify(areaList)), areaList.hasOwnProperty('autoAreaValue'))) {
                      var autoAreaValue = areaList.autoAreaValue;

                      _this4.setState({
                        canSaveNums: autoAreaValue.length,
                      });
                    }
                  }

                  var map = '',
                    v1 = -1,
                    mmap = '';

                  try {
                    map = JSON.parse(msgData.map);
                    v1 = map.data.mapId;
                    console.log('\u8e6d\u4e2a++===v1===>>' + JSON.stringify(v1));
                  } catch (error) {
                    if ((console.log('pps+++23e124214123413333324123+++======>>' + JSON.stringify(msgData)), msgData.map && '' != msgData.map)) {
                      mmap = msgData.map;
                      var x = encodeURIComponent(mmap);
                      mmap = decodeURIComponent(x);

                      try {
                        map = eval('(' + mmap + ')');
                        v1 = map.data.mapId;
                        console.log('map\u89e3\u6790\u6210\u529f>>33>>' + v1);
                      } catch (error) {
                        console.log('\u9519\u8bef\u7684\u6570\u636emsgData\uff1f\uff1f\uff1f' + JSON.stringify(msg));
                        mmap = mmap.replace('{"vertexs":]', '{"vertexs":[]');
                        map = eval('(' + mmap + ')');
                        v1 = map.data.mapId;
                        console.log('map\u89e3\u6790\u5931\u8d25\u274c' + JSON.stringify(error), 'v1:' + v1);
                      }
                    }
                  }

                  console.log('this.state.mapID:' + _this4.state.mapId, 'v1:' + v1);
                  if (-1 != _this4.state.mapId && _this4.state.mapId != v1)
                    _this4.setState(
                      {
                        showDatas: null,
                      },
                      function () {
                        _this4.setState({
                          map: map,
                        });
                      }
                    );
                  else
                    _this4.setState({
                      map: map,
                    });
                  console.log('this.state.mapId:' + _this4.state.mapId, 'v1:' + v1);

                  _this4.setState(
                    {
                      mapId: -1 != v1 ? v1 : _this4.state.mapId,
                    },
                    function () {
                      if (args) {
                        var t = Math.round(new Date().getTime() / 1e3).toString();
                        console.log('\u5f53\u524d\u65f6\u95f4\u6233:1111111=>' + t, 'this.state.mapId:' + _this4.state.mapId, 'v1:' + v1);
                        var o = {
                          time: t,
                          mapId: v1,
                          iotId: _this4.state.deviceId,
                        };
                        module593.default.save('createMutilMap', o);
                      }
                    }
                  );

                  for (var tempArr = [], specialID = 0, mmpps = tmapInfo.maps, _i3 = 0; _i3 < tmaps.length; _i3++) {
                    var item = tmaps[_i3];

                    if (item && '' != item) {
                      item = JSON.parse(item);
                      var dmmap = item.data.map;

                      if ('EH8=' == dmmap || '' == dmmap) {
                        var mid = item.data.mapID,
                          tag = '' + mid;

                        if (
                          (console.log('\u9700\u8981\u6e05\u7406\u5f53\u524d\u5730\u56fe=>' + JSON.stringify(tag)),
                          (specialID = mid),
                          console.log('specialID dmmap\u5730\u56fe\u6570\u636e=====>>' + JSON.stringify(item)),
                          undefined != mmpps && mmpps.length >= 4)
                        ) {
                          var oo = false;
                          if (
                            (mmpps.map(function (t, o) {
                              console.log('wwwwww=' + JSON.stringify(t.mapId), 'mid:' + mid);

                              if (t.mapId == mid) {
                                oo = true;
                                ControlApiModule.operateMap(
                                  _this4.state.deviceId,
                                  'delete',
                                  JSON.stringify({
                                    type: 'local',
                                    mapId: tag,
                                  })
                                ).then(function (t) {
                                  console.log('\u5220\u9664\u5f53\u524d\u5730\u56fe\u8fd4\u56de11111111' + JSON.stringify(t) + '\nitem.mapID:' + tag);
                                });
                              }
                            }),
                            oo)
                          )
                            continue;
                        }

                        tempArr.push(_this4.getDevicesProper(JSON.stringify(item.data)));
                      } else tempArr.push(_this4.getDevicesProper(JSON.stringify(item.data)));
                    }
                  }

                  var that = _this4;
                  Promise.all(tempArr).then(function (t) {
                    that._displayMultiFloor(t, specialID, that);
                  });
                }
              }
            );
          },
          function (t) {},
          function () {}
        );
      },
    },
    {
      key: '_displayMultiFloor',
      value: function (t, o, n) {
        if (t && t.length > 0) {
          for (var l = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = c.item;
            u = (u = (u = u.replace(/\\\"/g, '"')).replace(/\"{/g, '{')).replace(/}\"/g, '}');
            c.item = JSON.parse(u);
            var p = c.item.mapID;
            if (p == o) c.map = 'EH8=';
            var f = c.map;

            if (f) {
              var v = '' + p,
                h = new Date();
              if (!(undefined == c.item.end && null == c.item.end)) h.setTime(1e3 * c.item.end);
              l.push({
                map: c.map,
                mapId: p,
                updateTime: h,
                mapCanShow: undefined != f,
                tag: v,
                restore: false,
                imgUrl: 'data:image/png;base64,' + f,
              });
            }
          }

          n.setState({
            mapData: l,
          });
        }
      },
    },
    {
      key: '_genExists',
      value: function () {
        var t = module920.default.cloneDeep(this.props.route.params.AppFunction);
        t.pathHiding = 0;
        t.pathHidingType = '';
        return React.default.createElement(
          ReactNative.View,
          {
            pointerEvents: 'box-none',
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
            },
          },
          React.default.createElement(module1342.default, {
            getPropertiesData: this.state.showDatas,
            status: false,
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
            },
            AppFunction: t,
            showPath: false,
          })
        );
      },
    },
    {
      key: '_genNotExists',
      value: function () {
        return React.default.createElement(ReactNative.View, {
          style: {},
        });
      },
    },
    {
      key: 'checkStateToSaveMap',
      value: function () {
        var t = this;
        if (Config.MutilMap)
          module593.default.get('createMutilMap').then(function (o) {
            if ((console.log('\u9996\u9875\u63a5\u6536\u5230\u6e05\u626b\u5b8c\u6210\uff1a' + JSON.stringify(o)), o)) {
              var n = {
                deviceId: o.iotId,
              };
              module1180.default('getDeviceAttributes', n, function (n) {
                if (n.data.hasOwnProperty('multiMapsInfo')) {
                  var l = n.data.multiMapsInfo;
                  if (undefined != l && null != l) l = l.replace(/\\\"/g, '"');
                  if (undefined != l && null != l) l = l.replace(/\"{/g, '{');
                  if (undefined != l && null != l) l = l.replace(/}\"/g, '}');
                  console.log('\u591a\u697c\u5c42\u5730\u56fe:' + l);
                  var s = JSON.parse(l);

                  if (undefined != n.data && null != n.data && undefined != n.data.map && null != n.data.map) {
                    var c = n.data.map;
                    if (undefined != c && null != c) c = c.replace(/\\\"/g, '"');
                    if (undefined != c && null != c) c = c.replace(/\"{/g, '{');
                    if (undefined != c && null != c) c = c.replace(/}\"/g, '}');
                    var u = JSON.parse(c);

                    if (null != u && undefined != u) {
                      var p = u.mapId,
                        f = s.maps;

                      if (f && f.length >= 3) {
                        for (var v = false, h = 0; h < f.length; h++) {
                          var _ = f[h];

                          if (_ && '' != _) {
                            var D = _.mapId;

                            if (p == D) {
                              v = true;
                              break;
                            }
                          }
                        }

                        if (!v) return void console.log('\u8d85\u8fc7\u4e09\u5f20\u56fe');
                      }

                      console.log('\u8bf7\u6c42\u4fdd\u5b58\u53d8\u91cf22\uff1a' + p);
                      ControlApiModule.operateMap(
                        o.iotId,
                        'save',
                        JSON.stringify({
                          type: 'local',
                          mapId: p,
                        })
                      ).then(function (n) {
                        console.log('\u4fdd\u5b58\u5730\u56fe\u8fd4\u56de11111' + JSON.stringify(n), 'mapId:' + p, 'iotId:' + o.iotId);

                        if (n && 200 == n.code) {
                          module593.default.delete('createMutilMap', true);
                          console.log('\u4fdd\u5b58\u591a\u5730\u56fe\u6210\u529f');
                          t.loadData();
                        } else console.log((n.localMsg, n.localMsg));
                      });
                    }
                  }
                }
              });
            } else console.log('\u65e0\u4fdd\u5b58\u53d8\u91cf');
          });
      },
    },
    {
      key: '_saveMap',
      value: function (...args) {
        if (
          ((args = args ? args[0] : this.state.mapId), console.log('\u4fdd\u5b58\u5730\u56fecanSaveNums: ' + this.state.canSaveNums, 'smapId:' + args), 0 == this.state.canSaveNums)
        ) {
          module812.default(module594.default.t('afterSave'));
          return void this._getDeviceAttributes('after save map');
        }

        if ((console.log('\u4fdd\u5b58\u5730\u56fe\u5f53\u524dmapid:=>' + args, this.state.mapId), this.state.maps && this.state.maps.length >= 3)) {
          for (var l = false, s = 0; s < this.state.maps.length; s++) {
            var c = this.state.maps[s];
            if (c && '' != c)
              if (args == (c = JSON.parse(c)).data.mapID) {
                l = true;
                break;
              }
          }

          if (!l) return void module1096.default.info(module594.default.t('S1628756908'), 1, function () {}, false);

          this._canSaveMap(args);
        } else this._canSaveMap(args);
      },
    },
    {
      key: '_canSaveMap',
      value: function (t) {
        var o = this;
        console.log('\u80fd\u4fdd\u5b58\u5f53\u524d\u5730\u56fesmapId:' + t);
        var n = module1096.default.loading('', 0),
          l = false;
        setTimeout(function () {
          if (!l) module403.default.remove(n);
        }, 1e4);
        var s = this.state.map;

        if ('EH8=' == s || '' == s) {
          module403.default.remove(n);

          this._saveMap(t);
        } else
          ControlApiModule.operateMap(
            this.state.deviceId,
            'save',
            JSON.stringify({
              type: 'local',
              mapId: t,
            })
          ).then(
            function (t) {
              console.log('\u4fdd\u5b58\u5f53\u524d\u5730\u56fe\u8fd4\u56de' + JSON.stringify(t));
              l = true;
              module403.default.remove(n);
              if (t && 200 == t.code)
                module1096.default.info(
                  module594.default.t('saveMSuccess'),
                  3,
                  function () {
                    o._getDeviceAttributes('save map success android');
                  },
                  false
                );
              else module812.default(module594.default.t('saveMfailed') + ' ' + JSON.stringify(t.localMsg));
            },
            function (t, o) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), (l = true), module403.default.remove(n), '[object Error]' == Object.prototype.toString.call(t))) {
                var s = '';
                Object.keys(t).map(function (o) {
                  if ('message' == o) s = t[o];
                });
                module1096.default.info(s, 1, undefined, false);
              }
            }
          );
      },
    },
    {
      key: '_setCurrentMap',
      value: function (t) {
        var o = this,
          n = module1096.default.loading('', 0),
          l = false;
        setTimeout(function () {
          if (!l) module403.default.remove(n);
        }, 1e4);
        ControlApiModule.operateMap(
          this.state.deviceId,
          'setMap',
          JSON.stringify({
            type: 'local',
            mapId: t,
          })
        ).then(
          function (t) {
            l = true;
            module403.default.remove(n);
            console.log('\u4f7f\u7528\u5f53\u524d\u5730\u56fe\u8fd4\u56de' + JSON.stringify(t));
            if (t && 200 == t.code)
              module1096.default.info(
                module594.default.t('ums'),
                2,
                function () {
                  o._getDeviceAttributes('use map android');
                },
                false
              );
            else module812.default(module594.default.t('umf') + t.localMsg);
          },
          function (t, o) {
            if (((l = true), module403.default.remove(n), (t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
              var s = '';
              Object.keys(t).map(function (o) {
                if ('message' == o) s = t[o];
              });
              module1096.default.info(s, 1, undefined, false);
            }
          }
        );
      },
    },
    {
      key: '_setCurrentMapInfo',
      value: function (t, o) {
        var n = this,
          l = {
            tag: o,
            mapId: t,
          };
        ControlApiModule.operateMap(this.state.deviceId, 'setMapInfo', JSON.stringify(l)).then(
          function (t) {
            console.log('\u8bbe\u7f6e\u5f53\u524d\u5730\u56fe\u8fd4\u56de' + JSON.stringify(t));
            if (t && t.data && 200 == t.data.code && t.data.data && undefined != t.data.data.code && 0 == t.data.data.code)
              module1096.default.info(
                module594.default.t('ems'),
                2,
                function () {
                  n._getDeviceAttributes('set mapinfo success');
                },
                false
              );
            else
              module1096.default.info(
                module594.default.t('ems') + t.data.data.code,
                2,
                function () {
                  n._getDeviceAttributes('set mapinfo failed');
                },
                false
              );
          },
          function (t, o) {
            if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
              var n = '';
              Object.keys(t).map(function (o) {
                if ('message' == o) n = t[o];
              });
              module1096.default.info(n, 1, undefined, false);
            }
          }
        );
      },
    },
    {
      key: 'beautify_time',
      value: function (t) {
        var o = Math.round(new Date() / 1e3) - t,
          n = o > 0 ? '\u524d' : '\u540e';
        o = Math.abs(o);

        for (
          var l = ['\u5e74', '\u4e2a\u6708', '\u661f\u671f', '\u5929', '\u5c0f\u65f6', '\u5206\u949f', '\u79d2'], s = [31536e3, 2592e3, 604800, 86400, 3600, 60, 1], c = 0;
          c < 7;
          c++
        ) {
          var u = Math.floor(o / s[c]);
          if (0 != u) return u + l[c] + n;
        }
      },
    },
    {
      key: '_renderItem',
      value: function (t) {
        var o,
          n = this,
          l = t.item,
          s = t.key,
          c = new Date(l.updateTime) / 1e3;
        o = formatDateString(c);
        return React.default.createElement(
          ReactNative.View,
          {
            style: {
              backgroundColor: '#F7F9FC',
              alignItems: 'center',
            },
            key: s,
          },
          React.default.createElement(ReactNative.View, {
            style: {
              height: 10,
            },
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                marginHorizontal: 10,
                justifyContent: 'center',
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  height: 44,
                  width: SCREEN_WIDTH - 20,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                },
              },
              React.default.createElement(
                ReactNative.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    console.log('\u7f16\u8f91' + n.state.editable);
                    n.setState({
                      editable: !n.state.editable,
                    });
                  },
                  hitSlop: {
                    left: 30,
                    right: 200,
                    top: 30,
                    bottom: 30,
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      height: 44,
                      flexDirection: 'row',
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                  },
                  React.default.createElement(ReactNative.TextInput, {
                    placeholder: l.tag,
                    fontSize: 10,
                    editable: false,
                    maxLength: 64,
                    placeholderTextColor: '#000',
                    enablesReturnKeyAutomatically: true,
                    returnKeyType: 'done',
                    onSubmitEditing: ReactNative.Keyboard.dismiss,
                    clear: true,
                    onChangeText: function (t) {
                      if (n.state.currentName !== t)
                        n.setState({
                          currentName: t,
                        });
                    },
                    onEndEditing: function (t) {
                      if (n.state.currentName != l.tag) n._setCurrentMapInfo(l.mapId, n.state.currentName);
                    },
                    onBlur: function (t) {},
                    style: {
                      justifyContent: 'center',
                      marginLeft: 5,
                      width: SCREEN_WIDTH / 2 - 30,
                    },
                    autoCapitalize: 'none',
                    autoCorrect: false,
                  })
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flex: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      backgroundColor: 'transparent',
                      marginRight: 10,
                      textAlign: 'right',
                      alignItems: 'center',
                      fontSize: 10,
                    },
                  },
                  o
                )
              )
            )
          ),
          React.default.createElement(
            ReactNative.TouchableWithoutFeedback,
            {
              onPress: function () {},
            },
            React.default.createElement(ReactNative.Image, {
              style: {
                flex: 1,
                alignItems: 'center',
                width: 1.3 * module588.default.setSpText(200),
                height: 1.3 * module588.default.setSpText(251),
                borderRadius: 8,
              },
              imageStyle: {
                borderRadius: 8,
              },
              source: {
                uri: l.imgUrl,
              },
            })
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                flexDirection: 'column',
                position: 'absolute',
                bottom: 25,
                right: 25,
              },
            },
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  console.log('\u4f7f\u7528\u5730\u56fe');

                  n._setCurrentMap(l.mapId);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'column',
                    width: module588.default.setSpText(160),
                    height: module588.default.setSpText(44),
                    borderRadius: module588.default.setSpText(16),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1428'),
                  resizeMode: 'cover',
                  style: {
                    width: 22,
                    height: 22,
                  },
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      color: '#000',
                      fontSize: 12,
                      textAlign: 'center',
                    },
                  },
                  module594.default.t('use')
                )
              )
            ),
            React.default.createElement(ReactNative.View, {
              style: {
                height: 10,
              },
            }),
            React.default.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: function () {
                  console.log('\u70b9\u51fb\u4e86\u5730\u56fe111');

                  n._deleteMap(l.mapId);
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'column',
                    width: module588.default.setSpText(160),
                    height: module588.default.setSpText(44),
                    borderRadius: module588.default.setSpText(16),
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1393'),
                  resizeMode: 'cover',
                  style: {
                    width: 22,
                    height: 22,
                  },
                }),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      color: '#000',
                      fontSize: 12,
                      textAlign: 'center',
                    },
                  },
                  module594.default.t('deleted')
                )
              )
            )
          ),
          React.default.createElement(ReactNative.View, {
            style: {
              height: 10,
              backgroundColor: '#33333',
            },
          })
        );
      },
    },
    {
      key: 'removeMapId',
      value: function (t) {
        var o = this,
          n = 0,
          l = this.state.mapData,
          s = false;

        for (var c in l)
          if (l[c].mapId == t) {
            n = c;
            s = true;
            break;
          }

        this.state.mapData.splice(n, 1);
        this.setState(
          {
            mapData: this.state.mapData,
          },
          function () {}
        );
        if (s)
          module1096.default.info(
            module594.default.t('dms'),
            3,
            function () {
              o._getDeviceAttributes('remove map');
            },
            false
          );
        else module812.default(module594.default.t('dmf') + ' no this mapid');
      },
    },
    {
      key: '_deleteMap',
      value: function (t) {
        var o = this;
        module1110.default(function () {
          var n = module1096.default.loading('', 0),
            l = false;
          setTimeout(function () {
            if (!l) module403.default.remove(n);
          }, 1e4);
          console.log('\u8bf7\u6c42\u5220\u9664\u5730\u56fetmapid:' + t, 'this.state.deviceId:' + o.state.deviceId);
          ControlApiModule.operateMap(
            o.state.deviceId,
            'delete',
            JSON.stringify({
              type: 'local',
              mapId: t,
            })
          ).then(
            function (s) {
              console.log('\u5220\u9664\u5f53\u524d\u5730\u56fe\u8fd4\u56de' + JSON.stringify(s));
              l = true;
              module403.default.remove(n);
              if (s && 200 == s.code) o.removeMapId(t);
              else module812.default(module594.default.t('dmf') + s.localMsg);
              o.setState({
                showDelte: !o.state.showDelte,
              });
            },
            function (t, o) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), (l = true), module403.default.remove(n), '[object Error]' == Object.prototype.toString.call(t))) {
                var s = '';
                Object.keys(t).map(function (o) {
                  if ('message' == o) s = t[o];
                });
                module1096.default.info(s, 1, undefined, false);
              }
            }
          );
        });
      },
    },
    {
      key: '_createMap',
      value: function () {
        var t = this;
        if (
          (this.state.maps.map(function (t, o) {
            if (t && '' != t) 1;
          }),
          console.log('\u5730\u56fe\u6570\u91cf' + JSON.stringify(this.state.maps)),
          this.state.maps && this.state.maps.length >= 3)
        )
          module1096.default.info(module594.default.t('S1628756908'), 1, function () {}, false);
        else {
          console.log('\u8bf7\u6c42\u521b\u5efa\u591a\u5730\u56fe' + this.state.deviceId);
          var o = module1096.default.loading('', 0),
            n = false;
          setTimeout(function () {
            if (!n) {
              module403.default.remove(o);
              console.log('\u8bf7\u6c42\u521b\u5efa\u591a\u5730\u56fe\u957f\u65f6\u95f4\u6ca1\u6709\u56de\u8c03');
            }
          }, 1e4);
          ControlApiModule.operateMap(this.state.deviceId, 'create', null).then(
            function (l) {
              if ((console.log('\u521b\u5efa\u5730\u56fe\u8fd4\u56de' + JSON.stringify(l)), l && 200 == l.code)) {
                n = true;
                module403.default.remove(o);
                var s = Math.round(new Date().getTime() / 1e3).toString();
                console.log('\u521b\u5efa\u591a\u5730\u56fe\u5f53\u524d\u65f6\u95f4\u6233:=>' + s);
                module593.default.delete('createMutilMap').then(function (o) {
                  t._getDeviceAttributes('create map', true);

                  module1096.default.info(module594.default.t('maping'), 2, function () {}, false);
                });
              } else module1096.default.info(l.localMsg ? l.localMsg : l.message, 1, function () {}, false);
            },
            function (t, l) {
              if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
                var s = '';
                Object.keys(t).map(function (o) {
                  if ('message' == o) s = t[o];
                });
                n = true;
                module403.default.remove(o);
                module1096.default.info(s, 1, undefined, false);
              }
            }
          );
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        if (this.state.renderPlaceholderOnly) return this._renderPlaceholderView();
        var o = -1;
        return React.default.createElement(
          ReactNative.SafeAreaView,
          {
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
              position: 'relative',
            },
          },
          React.default.createElement(ReactNative.StatusBar, {
            translucent: false,
            backgroundColor: '#fff',
            barStyle: 'dark-content',
          }),
          React.default.createElement(
            ReactNative.ScrollView,
            {
              style: {
                flex: 1,
                width: '100%',
                height: SCREEN_HEIGHT - module588.statusBarHeight - 20 - 44,
                backgroundColor: '#F7F9FC',
                position: 'relative',
              },
            },
            React.default.createElement(ReactNative.View, {
              style: {
                flex: 1,
                width: '100%',
                height: 152,
              },
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: '#F7F9FC',
                  flex: 1,
                  position: 'relative',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'box-none',
                  style: {
                    flex: 1,
                    height: module588.default.setSpText(250) + 10 + 88 + 10 + 10,
                  },
                },
                null != this.state.showDatas && 'MutilMapController' == this.props.route.name ? this._genExists() : this._genNotExists()
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flexDirection: 'column',
                    position: 'absolute',
                    bottom: 25,
                    height: 44,
                    right: 25,
                    backgroundColor: '#F7F9FC',
                  },
                },
                React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  {
                    onPress: function () {
                      console.log('\u70b9\u51fb\u4e86\u5730\u56fe');

                      t._saveMap(t.state.mapId);
                    },
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flexDirection: 'column',
                        backgroundColor: '#F7F9FC',
                        width: module588.default.setSpText(160),
                        height: module588.default.setSpText(44),
                        borderRadius: module588.default.setSpText(16),
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      },
                    },
                    React.default.createElement(ReactNative.Image, {
                      source: require('./1422'),
                      resizeMode: 'cover',
                      style: {
                        width: 22,
                        height: 22,
                      },
                    }),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          color: '#000',
                          fontSize: 12,
                          textAlign: 'center',
                        },
                      },
                      module594.default.t('save')
                    )
                  )
                )
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                  position: 'absolute',
                  width: '100%',
                  backgroundColor: '#F7F9FC',
                },
              },
              React.default.createElement(ReactNative.View, {
                style: {
                  height: 10,
                  width: '100%',
                  backgroundColor: '#F7F9FC',
                },
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    height: 88,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      marginLeft: 15,
                      color: 'rgb(66,152,198)',
                    },
                  },
                  module594.default.t('saveMap')
                ),
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      marginTop: 10,
                      marginLeft: 15,
                      fontSize: 12,
                    },
                  },
                  module594.default.t('tipsMap')
                )
              ),
              React.default.createElement(ReactNative.View, {
                style: {
                  height: 10,
                  backgroundColor: '#F7F9FC',
                },
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                    marginHorizontal: 10,
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: {
                      height: 44,
                      backgroundColor: '#FFFFFF',
                      justifyContent: 'center',
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: {
                        marginLeft: 15,
                        color: 'rgb(66,152,198)',
                      },
                    },
                    module594.default.t('cMap')
                  )
                )
              )
            ),
            React.default.createElement(ReactNative.View, {
              style: {
                height: 10,
                backgroundColor: '#F7F9FC',
              },
            }),
            React.default.createElement(
              ReactNative.View,
              {
                pointerEvents: 'box-none',
                style: {
                  flex: 1,
                  backgroundColor: '#F7F9FC',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'box-none',
                  style: {
                    height: 44,
                    backgroundColor: '#FFFFFF',
                    justifyContent: 'center',
                    borderRadius: 8,
                    marginHorizontal: 10,
                  },
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: {
                      height: 44,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                    },
                    onPress: function () {
                      if (t.state.maps && t.state.maps.length >= 3) module1096.default.info(module594.default.t('S1628756908'), 1, function () {}, false);
                      else t._createMap();
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      pointerEvents: 'none',
                      style: {
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: 44,
                        padding: 10,
                        fontSize: 18,
                      },
                    },
                    module594.default.t('createMap')
                  )
                )
              ),
              React.default.createElement(ReactNative.View, {
                style: {
                  height: 10,
                  backgroundColor: '#F7F9FC',
                },
              })
            ),
            this.state.mapData.map(function (n, l) {
              if (n && '' != n && n.mapCanShow) {
                o += 1;
                return t._renderItem({
                  item: n,
                  key: l,
                  index: o,
                });
              } else return null;
            }),
            React.default.createElement(ReactNative.View, {
              style: {
                height: 10,
                backgroundColor: '#F7F9FC',
              },
            })
          )
        );
      },
    },
  ]);
  return module1428;
})(React.default.Component);

exports.MutilMapController = module1422;
var _default = module1422;
exports.default = _default;
