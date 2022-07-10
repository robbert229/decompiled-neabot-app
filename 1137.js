var regeneratorRuntime = require('regenerator-runtime'),
  u = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  module1138 = require('./1138'),
  module1140 = require('./1140'),
  module1141 = require('./1141'),
  ReactNative = require('react-native'),
  module1143 = require('./1143'),
  module526 = require('./526');

function D() {
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

var ReactNative = require('react-native').NativeModules.CodePush,
  module1144 = require('./1144')(ReactNative);

function k() {
  var t,
    u,
    module25,
    module35,
    module37,
    c,
    f,
    y,
    module526,
    D = arguments;
  return regeneratorRuntime.default.async(
    function (k) {
      for (;;)
        switch ((k.prev = k.next)) {
          case 0:
            t = D.length > 0 && undefined !== D[0] ? D[0] : null;
            u = D.length > 1 && undefined !== D[1] ? D[1] : null;
            k.next = 4;
            return regeneratorRuntime.default.awrap(v());

          case 4:
            module25 = k.sent;
            module35 = t
              ? module11.default({}, module25, {
                  deploymentKey: t,
                })
              : module25;
            module37 = _(module1141.default, module35);
            k.next = 9;
            return regeneratorRuntime.default.awrap(module.exports.getCurrentPackage());

          case 9:
            if ((c = k.sent)) f = c;
            else {
              f = {
                appVersion: module35.appVersion,
              };
              if ('ios' === ReactNative.Platform.OS && module35.packageHash) f.packageHash = module35.packageHash;
            }
            k.next = 13;
            return regeneratorRuntime.default.awrap(module37.queryUpdateWithCurrentPackage(f));

          case 13:
            if (!(!(y = k.sent) || y.updateAppVersion || (c && y.packageHash === c.packageHash) || ((!c || c._isDebugOnly) && module35.packageHash === y.packageHash))) {
              k.next = 19;
              break;
            }

            if (y && y.updateAppVersion) {
              module1143.default('An update is available but it is not targeting the binary version of your app.');
              if (u && 'function' == typeof u) u(y);
            }

            return k.abrupt('return', null);

          case 19:
            module526 = module11.default({}, y, module1144.remote(module37.reportStatusDownload));
            k.next = 22;
            return regeneratorRuntime.default.awrap(ReactNative.isFailedUpdate(module526.packageHash));

          case 22:
            module526.failedInstall = k.sent;
            module526.deploymentKey = t || module25.deploymentKey;
            return k.abrupt('return', module526);

          case 25:
          case 'end':
            return k.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

var R,
  v = function () {
    return regeneratorRuntime.default.async(
      function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if (!R) {
                t.next = 4;
                break;
              }

              return t.abrupt('return', R);

            case 4:
              if (!T) {
                t.next = 8;
                break;
              }

              return t.abrupt('return', T);

            case 8:
              t.next = 10;
              return regeneratorRuntime.default.awrap(ReactNative.getConfiguration());

            case 10:
              R = t.sent;
              return t.abrupt('return', R);

            case 12:
            case 'end':
              return t.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  };

function N(t) {
  var u;
  return regeneratorRuntime.default.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            o.next = 2;
            return regeneratorRuntime.default.awrap(ReactNative.getUpdateMetadata(t || G.UpdateState.RUNNING));

          case 2:
            if (!(u = o.sent)) {
              o.next = 11;
              break;
            }

            u = module11.default({}, module1144.local, u);
            o.next = 7;
            return regeneratorRuntime.default.awrap(ReactNative.isFailedUpdate(u.packageHash));

          case 7:
            u.failedInstall = o.sent;
            o.next = 10;
            return regeneratorRuntime.default.awrap(ReactNative.isFirstRun(u.packageHash));

          case 10:
            u.isFirstRun = o.sent;

          case 11:
            return o.abrupt('return', u);

          case 12:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function _(t, n) {
  var u = new module.exports.AcquisitionSdk(t, n);

  u.queryUpdateWithCurrentPackage = function (t) {
    return new Promise(function (n, o) {
      module.exports.AcquisitionSdk.prototype.queryUpdateWithCurrentPackage.call(u, t, function (t, u) {
        if (t) o(t);
        else n(u);
      });
    });
  };

  u.reportStatusDeploy = function (t, n, o, s) {
    return new Promise(function (l, c) {
      module.exports.AcquisitionSdk.prototype.reportStatusDeploy.call(u, t, n, o, s, function (t) {
        if (t) c(t);
        else l();
      });
    });
  };

  u.reportStatusDownload = function (t) {
    return new Promise(function (n, o) {
      module.exports.AcquisitionSdk.prototype.reportStatusDownload.call(u, t, function (t) {
        if (t) o(t);
        else n();
      });
    });
  };

  return u;
}

var x,
  T,
  I = function () {
    var t;
    if (!x)
      x = regeneratorRuntime.default.async(
        function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                u.next = 2;
                return regeneratorRuntime.default.awrap(ReactNative.notifyApplicationReady());

              case 2:
                u.next = 4;
                return regeneratorRuntime.default.awrap(ReactNative.getNewStatusReport());

              case 4:
                if ((t = u.sent)) U(t);
                return u.abrupt('return', t);

              case 7:
              case 'end':
                return u.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    return x;
  };

function U(t, u) {
  var o, s, l, module34, p, module1138;
  return regeneratorRuntime.default.async(
    function (y) {
      for (;;)
        switch ((y.prev = y.next)) {
          case 0:
            y.next = 2;
            return regeneratorRuntime.default.awrap(v());

          case 2:
            if (((o = y.sent), (s = t.previousLabelOrAppVersion), (l = t.previousDeploymentKey || o.deploymentKey), (y.prev = 5), !t.appVersion)) {
              y.next = 15;
              break;
            }

            if ((module1143.default('Reporting binary update (' + t.appVersion + ')'), o.deploymentKey)) {
              y.next = 10;
              break;
            }

            throw new Error('Deployment key is missed');

          case 10:
            module34 = _(module1141.default, o);
            y.next = 13;
            return regeneratorRuntime.default.awrap(module34.reportStatusDeploy(null, null, s, l));

          case 13:
            y.next = 27;
            break;

          case 15:
            if (((p = t.package.label), 'DeploymentSucceeded' !== t.status)) {
              y.next = 20;
              break;
            }

            module1143.default('Reporting CodePush update success (' + p + ')');
            y.next = 23;
            break;

          case 20:
            module1143.default('Reporting CodePush update rollback (' + p + ')');
            y.next = 23;
            return regeneratorRuntime.default.awrap(ReactNative.setLatestRollbackInfo(t.package.packageHash));

          case 23:
            o.deploymentKey = t.package.deploymentKey;
            module1138 = _(module1141.default, o);
            y.next = 27;
            return regeneratorRuntime.default.awrap(module1138.reportStatusDeploy(t.package, t.status, s, l));

          case 27:
            ReactNative.recordStatusReported(t);
            if (u) ReactNative.AppState.removeEventListener('change', u);
            y.next = 36;
            break;

          case 31:
            y.prev = 31;
            y.t0 = y.catch(5);
            module1143.default('Report status failed: ' + JSON.stringify(t));
            ReactNative.saveStatusReportForRetry(t);

            if (!u) {
              u = function (t) {
                var o;
                return regeneratorRuntime.default.async(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          if ('active' === t) {
                            s.next = 2;
                            break;
                          }

                          return s.abrupt('return');

                        case 2:
                          s.next = 4;
                          return regeneratorRuntime.default.awrap(ReactNative.getNewStatusReport());

                        case 4:
                          if ((o = s.sent)) U(o, u);
                          else ReactNative.AppState.removeEventListener('change', u);

                        case 6:
                        case 'end':
                          return s.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise
                );
              };

              ReactNative.AppState.addEventListener('change', u);
            }

          case 36:
          case 'end':
            return y.stop();
        }
    },
    null,
    null,
    [[5, 31]],
    Promise
  );
}

function w(t, u) {
  var o, s, l, c, f;
  return regeneratorRuntime.default.async(
    function (y) {
      for (;;)
        switch ((y.prev = y.next)) {
          case 0:
            if (((o = u.rollbackRetryOptions), t && t.failedInstall && u.ignoreFailedUpdates)) {
              y.next = 4;
              break;
            }

            return y.abrupt('return', false);

          case 4:
            if (o) {
              y.next = 6;
              break;
            }

            return y.abrupt('return', true);

          case 6:
            if (L((o = 'object' != typeof o ? G.DEFAULT_ROLLBACK_RETRY_OPTIONS : module11.default({}, G.DEFAULT_ROLLBACK_RETRY_OPTIONS, o)))) {
              y.next = 9;
              break;
            }

            return y.abrupt('return', true);

          case 9:
            y.next = 11;
            return regeneratorRuntime.default.awrap(ReactNative.getLatestRollbackInfo());

          case 11:
            if (O((s = y.sent), t.packageHash)) {
              y.next = 15;
              break;
            }

            module1143.default('The latest rollback info is not valid.');
            return y.abrupt('return', true);

          case 15:
            if (((c = (l = o).delayInHours), (f = l.maxRetryAttempts), !((Date.now() - s.time) / 36e5 >= c && f >= s.count))) {
              y.next = 20;
              break;
            }

            module1143.default('Previous rollback should be ignored due to rollback retry options.');
            return y.abrupt('return', false);

          case 20:
            return y.abrupt('return', true);

          case 21:
          case 'end':
            return y.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function O(t, n) {
  return t && t.time && t.count && t.packageHash && t.packageHash === n;
}

function L(t) {
  if ('number' != typeof t.delayInHours) {
    module1143.default("The 'delayInHours' rollback retry parameter must be a number.");
    return false;
  } else if ('number' != typeof t.maxRetryAttempts) {
    module1143.default("The 'maxRetryAttempts' rollback retry parameter must be a number.");
    return false;
  } else return !(t.maxRetryAttempts < 1) || (module1143.default("The 'maxRetryAttempts' rollback retry parameter cannot be less then 1."), false);
}

var C = false,
  M = function () {
    C = false;
  },
  G,
  F = function () {
    var t,
      n,
      u = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
      o = arguments.length > 1 ? arguments[1] : undefined,
      s = arguments.length > 2 ? arguments[2] : undefined,
      l = arguments.length > 3 ? arguments[3] : undefined;

    if (
      ('function' == typeof o &&
        (t = function () {
          try {
            o.apply(undefined, arguments);
          } catch (t) {
            module1143.default('An error has occurred : ' + t.stack);
          }
        }),
      'function' == typeof s &&
        (n = function () {
          try {
            s.apply(undefined, arguments);
          } catch (t) {
            module1143.default('An error has occurred: ' + t.stack);
          }
        }),
      C)
    ) {
      if ('function' == typeof t) t(G.SyncStatus.SYNC_IN_PROGRESS);
      else module1143.default('Sync already in progress.');
      return Promise.resolve(G.SyncStatus.SYNC_IN_PROGRESS);
    }

    C = true;
    var c = K(u, t, n, l);
    c.then(M).catch(M);
    return c;
  };

function K() {
  var t,
    u,
    module25,
    module35,
    module37,
    module34,
    module1138,
    module1141,
    S,
    b,
    D = arguments;
  return regeneratorRuntime.default.async(
    function (E) {
      for (;;)
        switch ((E.prev = E.next)) {
          case 0:
            t = D.length > 0 && undefined !== D[0] ? D[0] : {};
            u = D.length > 1 ? D[1] : undefined;
            module25 = D.length > 2 ? D[2] : undefined;
            module35 = D.length > 3 ? D[3] : undefined;
            module34 = module11.default(
              {
                deploymentKey: null,
                ignoreFailedUpdates: true,
                rollbackRetryOptions: null,
                installMode: G.InstallMode.ON_NEXT_RESTART,
                mandatoryInstallMode: G.InstallMode.IMMEDIATE,
                minimumBackgroundDuration: 0,
                updateDialog: null,
              },
              t
            );
            u =
              'function' == typeof u
                ? u
                : function (t) {
                    switch (t) {
                      case G.SyncStatus.CHECKING_FOR_UPDATE:
                        module1143.default('Checking for update.');
                        break;

                      case G.SyncStatus.AWAITING_USER_ACTION:
                        module1143.default('Awaiting user action.');
                        break;

                      case G.SyncStatus.DOWNLOADING_PACKAGE:
                        module1143.default('Downloading package.');
                        break;

                      case G.SyncStatus.INSTALLING_UPDATE:
                        module1143.default('Installing update.');
                        break;

                      case G.SyncStatus.UP_TO_DATE:
                        module1143.default('App is up to date.');
                        break;

                      case G.SyncStatus.UPDATE_IGNORED:
                        module1143.default('User cancelled the update.');
                        break;

                      case G.SyncStatus.UPDATE_INSTALLED:
                        if (module37 == G.InstallMode.ON_NEXT_RESTART) module1143.default('Update is installed and will be run on the next app restart.');
                        else if (module37 == G.InstallMode.ON_NEXT_RESUME)
                          module34.minimumBackgroundDuration > 0
                            ? module1143.default(
                                'Update is installed and will be run after the app has been in the background for at least ' + module34.minimumBackgroundDuration + ' seconds.'
                              )
                            : module1143.default('Update is installed and will be run when the app next resumes.');
                        break;

                      case G.SyncStatus.UNKNOWN_ERROR:
                        module1143.default('An unknown error occurred.');
                    }
                  };
            E.prev = 6;
            E.next = 9;
            return regeneratorRuntime.default.awrap(G.notifyApplicationReady());

          case 9:
            u(G.SyncStatus.CHECKING_FOR_UPDATE);
            E.next = 12;
            return regeneratorRuntime.default.awrap(k(module34.deploymentKey, module35));

          case 12:
            module1138 = E.sent;

            module1141 = function () {
              var t;
              return regeneratorRuntime.default.async(
                function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        u(G.SyncStatus.DOWNLOADING_PACKAGE);
                        s.next = 3;
                        return regeneratorRuntime.default.awrap(module1138.download(module25));

                      case 3:
                        t = s.sent;
                        module37 = t.isMandatory ? module34.mandatoryInstallMode : module34.installMode;
                        u(G.SyncStatus.INSTALLING_UPDATE);
                        s.next = 8;
                        return regeneratorRuntime.default.awrap(
                          t.install(module37, module34.minimumBackgroundDuration, function () {
                            u(G.SyncStatus.UPDATE_INSTALLED);
                          })
                        );

                      case 8:
                        return s.abrupt('return', G.SyncStatus.UPDATE_INSTALLED);

                      case 9:
                      case 'end':
                        return s.stop();
                    }
                },
                null,
                null,
                null,
                Promise
              );
            };

            E.next = 16;
            return regeneratorRuntime.default.awrap(w(module1138, module34));

          case 16:
            if (((S = E.sent), module1138 && !S)) {
              E.next = 31;
              break;
            }

            if (S) module1143.default('An update is available, but it is being ignored due to having been previously rolled back.');
            E.next = 21;
            return regeneratorRuntime.default.awrap(G.getCurrentPackage());

          case 21:
            if (!(b = E.sent) || !b.isPending) {
              E.next = 27;
              break;
            }

            u(G.SyncStatus.UPDATE_INSTALLED);
            return E.abrupt('return', G.SyncStatus.UPDATE_INSTALLED);

          case 27:
            u(G.SyncStatus.UP_TO_DATE);
            return E.abrupt('return', G.SyncStatus.UP_TO_DATE);

          case 29:
            E.next = 41;
            break;

          case 31:
            if (!module34.updateDialog) {
              E.next = 38;
              break;
            }

            if ('object' != typeof module34.updateDialog) module34.updateDialog = G.DEFAULT_UPDATE_DIALOG;
            else module34.updateDialog = module11.default({}, G.DEFAULT_UPDATE_DIALOG, module34.updateDialog);
            E.next = 35;
            return regeneratorRuntime.default.awrap(
              new Promise(function (t, n) {
                var o = null,
                  s = null,
                  l = [];

                if (module1138.isMandatory) {
                  o = module34.updateDialog.mandatoryUpdateMessage;
                  s = module34.updateDialog.mandatoryContinueButtonLabel;
                } else {
                  o = module34.updateDialog.optionalUpdateMessage;
                  s = module34.updateDialog.optionalInstallButtonLabel;
                  l.push({
                    text: module34.updateDialog.optionalIgnoreButtonLabel,
                    onPress: function () {
                      u(G.SyncStatus.UPDATE_IGNORED);
                      t(G.SyncStatus.UPDATE_IGNORED);
                    },
                  });
                }

                l.push({
                  text: s,
                  onPress: function () {
                    module1141().then(t, n);
                  },
                });
                if (module34.updateDialog.appendReleaseDescription && module1138.description) o += module34.updateDialog.descriptionPrefix + ' ' + module1138.description;
                u(G.SyncStatus.AWAITING_USER_ACTION);
                module1140.Alert.alert(module34.updateDialog.title, o, l);
              })
            );

          case 35:
            return E.abrupt('return', E.sent);

          case 38:
            E.next = 40;
            return regeneratorRuntime.default.awrap(module1141());

          case 40:
            return E.abrupt('return', E.sent);

          case 41:
            E.next = 48;
            break;

          case 43:
            throw ((E.prev = 43), (E.t0 = E.catch(6)), u(G.SyncStatus.UNKNOWN_ERROR), module1143.default(E.t0.message), E.t0);

          case 48:
          case 'end':
            return E.stop();
        }
    },
    null,
    null,
    [[6, 43]],
    Promise
  );
}

if (ReactNative) {
  G = function () {
    var t,
      n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
      ReactNative = require('react-native');

    try {
      t = require('react');
    } catch (t) {}

    if (!t) {
      try {
        t = ReactNative.React;
      } catch (t) {}

      if (!t) throw new Error("Unable to find the 'React' module.");
    }

    if (!t.Component)
      throw new Error(
        'Unable to find the "Component" class, please either:\n1. Upgrade to a newer version of React Native that supports it, or\n2. Call the codePush.sync API in your component instead of using the @codePush decorator'
      );

    var y = function (y) {
      var h = (function (h) {
        module35.default(E, h);

        var ReactNative = E,
          module1143 = D(),
          b = function () {
            var t,
              n = module34.default(ReactNative);

            if (module1143) {
              var u = module34.default(this).constructor;
              t = Reflect.construct(n, arguments, u);
            } else t = n.apply(this, arguments);

            return module37.default(this, t);
          };

        function E() {
          u.default(this, E);
          return b.apply(this, arguments);
        }

        module25.default(E, [
          {
            key: 'componentDidMount',
            value: function () {
              if (n.checkFrequency === G.CheckFrequency.MANUAL) G.notifyAppReady();
              else {
                var u,
                  o,
                  s,
                  l = this.refs.rootComponent;

                if (l && l.codePushStatusDidChange) {
                  u = l.codePushStatusDidChange;
                  if (l instanceof t.Component) u = u.bind(l);
                }

                if (l && l.codePushDownloadDidProgress) {
                  o = l.codePushDownloadDidProgress;
                  if (l instanceof t.Component) o = o.bind(l);
                }

                if (l && l.codePushOnBinaryVersionMismatch) {
                  s = l.codePushOnBinaryVersionMismatch;
                  if (l instanceof t.Component) s = s.bind(l);
                }

                G.sync(n, u, o, s);
                if (n.checkFrequency === G.CheckFrequency.ON_APP_RESUME)
                  ReactNative.AppState.addEventListener('change', function (t) {
                    if ('active' === t) G.sync(n, u, o);
                  });
              }
            },
          },
          {
            key: 'render',
            value: function () {
              var n = module11.default({}, this.props);
              if (y.prototype.render) n.ref = 'rootComponent';
              return t.createElement(y, n);
            },
          },
        ]);
        return E;
      })(t.Component);

      return module526.default(h, y);
    };

    return 'function' == typeof n ? y(n) : y;
  };

  module11.default(G, {
    AcquisitionSdk: module1138.AcquisitionManager,
    checkForUpdate: k,
    getConfiguration: v,
    getCurrentPackage: function () {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                t.next = 2;
                return regeneratorRuntime.default.awrap(N(G.UpdateState.LATEST));

              case 2:
                return t.abrupt('return', t.sent);

              case 3:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    getUpdateMetadata: N,
    log: module1143.default,
    notifyAppReady: I,
    notifyApplicationReady: I,
    restartApp: function () {
      var t,
        u = arguments;
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                t = u.length > 0 && undefined !== u[0] && u[0];
                ReactNative.restartApp(t);

              case 2:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    setUpTestDependencies: function (t, n, u) {
      if (t) module.exports.AcquisitionSdk = t;
      if (n) T = n;
      if (u) ReactNative = u;
    },
    sync: F,
    disallowRestart: ReactNative.disallow,
    allowRestart: ReactNative.allow,
    clearUpdates: ReactNative.clearUpdates,
    InstallMode: {
      IMMEDIATE: ReactNative.codePushInstallModeImmediate,
      ON_NEXT_RESTART: ReactNative.codePushInstallModeOnNextRestart,
      ON_NEXT_RESUME: ReactNative.codePushInstallModeOnNextResume,
      ON_NEXT_SUSPEND: ReactNative.codePushInstallModeOnNextSuspend,
    },
    SyncStatus: {
      UP_TO_DATE: 0,
      UPDATE_INSTALLED: 1,
      UPDATE_IGNORED: 2,
      UNKNOWN_ERROR: 3,
      SYNC_IN_PROGRESS: 4,
      CHECKING_FOR_UPDATE: 5,
      AWAITING_USER_ACTION: 6,
      DOWNLOADING_PACKAGE: 7,
      INSTALLING_UPDATE: 8,
    },
    CheckFrequency: {
      ON_APP_START: 0,
      ON_APP_RESUME: 1,
      MANUAL: 2,
    },
    UpdateState: {
      RUNNING: ReactNative.codePushUpdateStateRunning,
      PENDING: ReactNative.codePushUpdateStatePending,
      LATEST: ReactNative.codePushUpdateStateLatest,
    },
    DeploymentStatus: {
      FAILED: 'DeploymentFailed',
      SUCCEEDED: 'DeploymentSucceeded',
    },
    DEFAULT_UPDATE_DIALOG: {
      appendReleaseDescription: false,
      descriptionPrefix: ' Description: ',
      mandatoryContinueButtonLabel: 'Continue',
      mandatoryUpdateMessage: 'An update is available that must be installed.',
      optionalIgnoreButtonLabel: 'Ignore',
      optionalInstallButtonLabel: 'Install',
      optionalUpdateMessage: 'An update is available. Would you like to install it?',
      title: 'Update available',
    },
    DEFAULT_ROLLBACK_RETRY_OPTIONS: {
      delayInHours: 24,
      maxRetryAttempts: 1,
    },
  });
} else module1143.default("The CodePush module doesn't appear to be properly installed. Please double-check that everything is setup correctly.");

module.exports = G;
