var module1135 = require('./1135'),
  module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module915 = require('./915'),
  module588 = require('./588'),
  module593 = require('./593'),
  module594 = require('./594');

function x() {
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

var E = (function (t) {
  module35.default(k, t);

  var module588 = k,
    E = x(),
    b = function () {
      var t,
        n = module34.default(module588);

      if (E) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    var n;
    module24.default(this, k);
    (n = b.call(this, t)).state = {
      isChanged: false,
      oldName: '',
      replaceName: '',
      userId: '',
    };
    return n;
  }

  module25.default(k, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        module593.default.get('userData').then(function (n) {
          t.setState({
            userId: n.userId,
            oldName: n.userName,
          });
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        module403.default.remove('');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'editUserInfo',
      value: function () {
        var t = this;

        if (!this.state.replaceName) {
          module1096.default.info(module594.default.t('newName'));
          return false;
        }

        if (this.state.replaceName == this.state.oldName) {
          module1096.default.info(module594.default.t('newName'));
          return false;
        }

        var n = module1096.default.loading();
        module915.default.editUserName(this.state.userId, this.state.replaceName).then(function (u) {
          module403.default.remove(n);

          if (0 == u.code || 200 == u.code) {
            module1096.default.info(module594.default.t('ediltSuccess'), 1, undefined, false);
            module593.default.get('userData').then(function (n) {
              n.userName = t.state.replaceName;
              module593.default.save('userData', n).then(function (n) {
                ReactNative.DeviceEventEmitter.emit('myLoginUser');
                ReactNative.DeviceEventEmitter.emit('loginIndex');
                ReactNative.DeviceEventEmitter.emit('management');
                t.props.navigation.goBack();
              });
            });
          } else module1096.default.info(u.localMsg ? u.localMsg : u.message, 1, undefined, false);
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          ReactNative.SafeAreaView,
          {
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
              position: 'relative',
            },
          },
          React.default.createElement(
            ReactNative.ScrollView,
            {
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                  backgroundColor: '#F7F9FC',
                },
              },
              React.default.createElement(ReactNative.StatusBar, {
                translucent: false,
                hidden: this.state.isNoticeShow,
                backgroundColor: Theme.background,
                barStyle: Theme.barStyle,
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: T.modify,
                },
                React.default.createElement(
                  ReactNative.TextInput,
                  {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    value: this.state.replaceName,
                    onChangeText: function (n) {
                      t.setState({
                        isChanged: true,
                        replaceName: n,
                      });
                    },
                    placeholder: module594.default.t('newName'),
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    editable: true,
                    maxLength: 32,
                    placeholderTextColor: '#CCCCCC',
                    enablesReturnKeyAutomatically: true,
                    style: T.replaceInput,
                  },
                  this.state.replaceName.length >= 0 && this.state.isChanged ? null : this.state.oldName
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: T.replaceBtnBox,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    style: T.replaceBtn,
                    onPress: function () {
                      t.editUserInfo();
                    },
                  },
                  module594.default.t('btnConfirm')
                )
              )
            )
          )
        );
      },
    },
  ]);
  return k;
})(React.default.Component);

exports.replaceName = E;
var T = ReactNative.StyleSheet.create({
    replaceBtnBox: {
      paddingHorizontal: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(10),
    },
    modify: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(10),
      marginTop: module588.default.setSpText(10),
    },
    replaceInput: {
      paddingVertical: 0,
    },
  }),
  b = E;
exports.default = b;
