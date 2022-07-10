require('./606');

var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = Se(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module413 = require('./413'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module593 = require('./593'),
  module594 = require('./594'),
  module944 = require('./944'),
  module1064 = require('./1064'),
  module1066 = require('./1066'),
  module1244 = require('./1244'),
  module1301 = require('./1301'),
  module1304 = require('./1304'),
  module1310 = require('./1310'),
  module1311 = require('./1311'),
  module1250 = require('./1250'),
  module1313 = require('./1313'),
  module1314 = require('./1314'),
  module1321 = require('./1321'),
  module1337 = require('./1337'),
  module1339 = require('./1339'),
  module1341 = require('./1341'),
  module1379 = require('./1379'),
  module1394 = require('./1394'),
  module1403 = require('./1403'),
  module1404 = require('./1404'),
  module1408 = require('./1408'),
  module1409 = require('./1409'),
  module1410 = require('./1410'),
  module1424 = require('./1424'),
  module1429 = require('./1429'),
  module1432 = require('./1432'),
  module1435 = require('./1435'),
  module1439 = require('./1439'),
  module1443 = require('./1443'),
  module1444 = require('./1444'),
  module1445 = require('./1445'),
  module1449 = require('./1449'),
  module1451 = require('./1451'),
  module1452 = require('./1452'),
  module1453 = require('./1453'),
  module1454 = require('./1454'),
  module1467 = require('./1467'),
  module1469 = require('./1469'),
  module1471 = require('./1471'),
  module1472 = require('./1472'),
  module1473 = require('./1473'),
  module1475 = require('./1475'),
  module1476 = require('./1476'),
  module1479 = require('./1479'),
  module1480 = require('./1480'),
  module1481 = require('./1481'),
  module1482 = require('./1482'),
  module1484 = require('./1484'),
  module1485 = require('./1485'),
  module1657 = require('./1657'),
  module1259 = require('./1259');

function Se(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (Se = function (t) {
    return t ? o : n;
  })(t);
}

function ge() {
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

ReactNative.NativeModules.RNAliyunModule;

var we = module413.createStackNavigator(),
  module1256 = (function (t) {
    module35.default(ye, t);

    var Se = ye,
      module1256 = ge(),
      ve = function () {
        var t,
          n = module34.default(Se);

        if (module1256) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function ye(t) {
      var o;
      module24.default(this, ye);
      (o = ve.call(this, t)).state = {
        RouteName: null,
        marginDemo: 0,
        languageTitle: module594.default.t('languages'),
      };
      o.isLogin();
      o.storeChange = o.storeChange.bind(module39.default(o));
      return o;
    }

    module25.default(ye, [
      {
        key: 'storeChange',
        value: function () {
          this.setState({
            languageTitle: module594.default.t('languages'),
          });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
            setTimeout(function () {
              t.storeChange();
            }, 10);
          });
          if ('android' === ReactNative.Platform.OS)
            this.setState({
              marginDemo: 45,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.onChangeLanguageUI) this.onChangeLanguageUI.emitter.removeAllListeners('onChangeLanguageUI');
        },
      },
      {
        key: 'isLogin',
        value: function () {
          var t = this;
          module593.default.get('userData').then(function (n) {
            if (n) {
              if ('android' == ReactNative.Platform.OS) module1259.default.initAliIoTSmart();
              module593.default.save('initAliyunOK', true);
              t.setState({
                RouteName: 'tabNav',
              });
            } else {
              module593.default.delete('initAliyunOK', true);
              t.setState({
                RouteName: 'loginScreen',
              });
            }
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return this.state.RouteName ? (
            <we.Navigator
              initialRouteName={this.state.RouteName}
              screenOptions={{
                headerStyle: {
                  backgroundColor: module944.Theme.backgroundColor,
                  elevation: 0,
                  shadowOpacity: 0,
                },
                headerTintColor: '#11243D',
                headerBackTitle: ' ',
                headerTitleStyle: {
                  alignSelf: 'center',
                  fontSize: module588.default.setSpText(16),
                  marginRight: module588.default.setSpText(this.state.marginDemo),
                },
                headerBackImage: function () {
                  return (
                    <ReactNative.Image
                      source={require('./1256')}
                      style={{
                        width: module588.default.setSpText(22),
                        height: module588.default.setSpText(22),
                        marginLeft: module588.default.setSpText(8),
                      }}
                    />
                  );
                },
                cardStyleInterpolator: module413.CardStyleInterpolators.forHorizontalIOS,
              }}
            >
              <we.Screen
                name="loginScreen"
                component={module1244.default}
                options={{
                  title: module594.default.t('loginBtn'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="tabNav"
                component={module1066.default}
                options={{
                  title: module594.default.t('indexIndex'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="registeredScreen"
                component={module1301.default}
                options={{
                  title: module594.default.t('registered'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="userAgreement"
                component={module1304.default}
                options={{
                  title: module594.default.t('userAgreement'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="passwordScreen"
                component={module1310.default}
                options={{
                  title: module594.default.t('confirmPassword'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="userData"
                component={module1311.default}
                options={{
                  title: module594.default.t('basicInformation'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="countryCode"
                component={module1250.default}
                options={{
                  title: module594.default.t('codeText'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="changePassword"
                component={module1313.default}
                options={{
                  title: module594.default.t('retrievePassword'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="networkList"
                component={module1314.default}
                options={{
                  title: module594.default.t('selectEquipment'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="networkWifi"
                component={module1321.default}
                options={{
                  title: module594.default.t('hotWifi'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="wifiHelp"
                component={module1337.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="location"
                component={module1339.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="cleanIndex"
                component={module1341.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="restrictedArea"
                component={module1379.default}
                options={{
                  title: module594.default.t('restrictedArea'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="partitionMap"
                component={module1394.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="cleanNew"
                component={module1403.default}
                options={{
                  title: module594.default.t('deviceMessage'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="reservation"
                component={module1404.default}
                options={{
                  title: module594.default.t('scheduleCleaning'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="setUp"
                component={module1408.default}
                options={{
                  title: module594.default.t('appointmentSetting'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="doNotTime"
                component={module1409.default}
                options={{
                  title: module594.default.t('addDoNotDisturb'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="more"
                component={module1410.default}
                options={{
                  title: module594.default.t('moreFeatures'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="mapControl"
                component={module1424.default}
                options={{
                  title: module594.default.t('mapManagement'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="shareIt"
                component={module1429.default}
                options={{
                  title: module594.default.t('shared'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="qrCode"
                component={module1432.default}
                options={{
                  title: module594.default.t('qrCodeSharing'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="addShareIt"
                component={module1435.default}
                options={{
                  title: module594.default.t('addShare'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="sweepRecording"
                component={module1439.default}
                options={{
                  title: module594.default.t('cleanUpRecords'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="recordingDetails"
                component={module1443.default}
                options={{
                  title: module594.default.t('cleaningDetails'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="supplies"
                component={module1444.default}
                options={{
                  title: module594.default.t('consumablesRecord'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="suppliesLi"
                component={module1445.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="firmwareUpdata"
                component={module1449.default}
                options={{
                  title: module594.default.t('firmwareUpgrade'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="deviceInfor"
                component={module1451.default}
                options={{
                  title: module594.default.t('deviceInformation'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="voice"
                component={module1452.default}
                options={{
                  title: module594.default.t('voicePackage'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="dustCollection"
                component={module1453.default}
                options={{
                  title: module594.default.t('DustCollectionFunction'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="remoteControl"
                component={module1454.default}
                options={{
                  title: module594.default.t('remoteControl'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="operationGuide"
                component={module1467.default}
                options={{
                  title: module594.default.t('operationGuide'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="updateApp"
                component={module1469.default}
                options={{
                  title: module594.default.t('appUpdata'),
                  headerShown: false,
                }}
              />
              <we.Screen
                name="language"
                component={module1471.default}
                options={{
                  title: this.state.languageTitle,
                  headerShown: true,
                }}
              />
              <we.Screen
                name="myGuide"
                component={module1472.default}
                options={{
                  title: module594.default.t('operationGuide'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="feedBack"
                component={module1473.default}
                options={{
                  title: module594.default.t('feedback'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="feedackLi"
                component={module1475.default}
                options={{
                  title: module594.default.t('M1629376908'),
                  headerShown: true,
                  headerRight: function () {
                    return <module1064.default />;
                  },
                }}
              />
              <we.Screen
                name="feedbackdetails"
                component={module1476.default}
                options={{
                  title: module594.default.t('F1629376929'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="aboutUs"
                component={module1479.default}
                options={{
                  title: module594.default.t('aboutUs'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="replaceName"
                component={module1480.default}
                options={{
                  title: module594.default.t('changeUsername'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="managementName"
                component={module1481.default}
                options={{
                  title: module594.default.t('accountManagement'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="logoutName"
                component={module1482.default}
                options={{
                  title: module594.default.t('cancelAccount'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="webView"
                component={module1484.default}
                options={{
                  title: '',
                  headerShown: false,
                }}
              />
              <we.Screen
                name="MutilMapController"
                component={module1485.default}
                options={{
                  title: module594.default.t('M1628487937'),
                  headerShown: true,
                }}
              />
              <we.Screen
                name="ReNameMap"
                component={module1657.default}
                options={{
                  title: module594.default.t('areaName'),
                  headerShown: true,
                }}
              />
            </we.Navigator>
          ) : (
            <ReactNative.View />
          );
        },
      },
    ]);
    return ye;
  })(React.Component);

exports.App = module1256;
var ve = module1256;
exports.default = ve;
