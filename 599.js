exports.syncUniqueId = v;
exports.getMacAddress = U;
exports.getMacAddressSync = E;
exports.getReadableVersion = ge;
exports.hasNotch = Ut;
exports.getTotalDiskCapacityOld = Tn;
exports.getTotalDiskCapacityOldSync = Vn;
exports.getFreeDiskStorageOld = Ln;
exports.getFreeDiskStorageOldSync = Nn;
exports.isLandscape = Jn;
exports.isLandscapeSync = Qn;
exports.hasSystemFeature = gr;
exports.hasSystemFeatureSync = pr;
exports.getDeviceToken = Mr;
exports.useBatteryLevel = Cr;
exports.useBatteryLevelIsLow = Lr;
exports.usePowerState = Nr;
exports.useIsHeadphonesConnected = Gr;
exports.useFirstInstallTime = Kr;
exports.useDeviceName = Hr;
exports.useHasSystemFeature = xr;
exports.useIsEmulator = Ur;
exports.useManufacturer = Er;
Object.defineProperty(exports, 'AsyncHookResult', {
  enumerable: true,
  get: function () {
    return S.AsyncHookResult;
  },
});
Object.defineProperty(exports, 'DeviceType', {
  enumerable: true,
  get: function () {
    return S.DeviceType;
  },
});
Object.defineProperty(exports, 'LocationProviderInfo', {
  enumerable: true,
  get: function () {
    return S.LocationProviderInfo;
  },
});
Object.defineProperty(exports, 'PowerState', {
  enumerable: true,
  get: function () {
    return S.PowerState;
  },
});

var n,
  module12 = require('./12'),
  regeneratorRuntime = require('regenerator-runtime'),
  React = require('react'),
  ReactNative = require('react-native'),
  module600 = require('./600'),
  module601 = require('./601'),
  module602 = require('./602'),
  module604 = require('./604'),
  S = require(d[9]),
  P = function () {
    return module604.getSupportedPlatformInfoSync({
      defaultValue: 'unknown',
      memoKey: 'uniqueId',
      supportedPlatforms: ['android', 'ios', 'windows'],
      getter: function () {
        return module602.default.uniqueId;
      },
    });
  };

function v() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 6;
              break;
            }

            t.next = 3;
            return regeneratorRuntime.default.awrap(module602.default.syncUniqueId());

          case 3:
            n = t.sent;
            t.next = 7;
            break;

          case 6:
            n = P();

          case 7:
            return t.abrupt('return', n);

          case 8:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

exports.getUniqueId = P;
var w = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'instanceId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getInstanceId();
    },
    syncGetter: function () {
      return module602.default.getInstanceIdSync();
    },
    defaultValue: 'unknown',
  }),
  I = module12.default(w, 2),
  b = I[0],
  F = I[1];
exports.getInstanceIdSync = F;
exports.getInstanceId = b;
var k = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'serialNumber',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getSerialNumber();
    },
    syncGetter: function () {
      return module602.default.getSerialNumberSync();
    },
    defaultValue: 'unknown',
  }),
  A = module12.default(k, 2),
  h = A[0],
  D = A[1];
exports.getSerialNumberSync = D;
exports.getSerialNumber = h;
var T = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'androidId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getAndroidId();
    },
    syncGetter: function () {
      return module602.default.getAndroidIdSync();
    },
    defaultValue: 'unknown',
  }),
  V = module12.default(T, 2),
  B = V[0],
  M = V[1];
exports.getAndroidIdSync = M;
exports.getAndroidId = B;
var O = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.getIpAddress();
    },
    syncGetter: function () {
      return module602.default.getIpAddressSync();
    },
    defaultValue: 'unknown',
  }),
  C = module12.default(O, 2),
  L = C[0],
  N = C[1];
exports.getIpAddressSync = N;
exports.getIpAddress = L;
var G = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module602.default.isCameraPresent();
    },
    syncGetter: function () {
      return module602.default.isCameraPresentSync();
    },
    defaultValue: false,
  }),
  K = module12.default(G, 2),
  H = K[0],
  x = K[1];

function U() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', module602.default.getMacAddress());

          case 4:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 6;
              break;
            }

            return t.abrupt('return', '02:00:00:00:00:00');

          case 6:
            return t.abrupt('return', 'unknown');

          case 7:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function E() {
  return 'android' === ReactNative.Platform.OS ? module602.default.getMacAddressSync() : 'ios' === ReactNative.Platform.OS ? '02:00:00:00:00:00' : 'unknown';
}

exports.isCameraPresentSync = x;
exports.isCameraPresent = H;

var R = function () {
  return module604.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    memoKey: 'deviceId',
    getter: function () {
      return module602.default.deviceId;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getDeviceId = R;

var _ = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'manufacturer',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return 'ios' == ReactNative.Platform.OS ? Promise.resolve('Apple') : module602.default.getSystemManufacturer();
    },
    syncGetter: function () {
      return 'ios' == ReactNative.Platform.OS ? 'Apple' : module602.default.getSystemManufacturerSync();
    },
    defaultValue: 'unknown',
  }),
  q = module12.default(_, 2),
  j = q[0],
  W = q[1];

exports.getManufacturerSync = W;
exports.getManufacturer = j;

var z = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'model',
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    getter: function () {
      return module602.default.model;
    },
  });
};

exports.getModel = z;

var J = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'brand',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module602.default.brand;
    },
  });
};

exports.getBrand = J;

var Q = function () {
  return module604.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    memoKey: 'systemName',
    getter: function () {
      return ReactNative.Platform.select({
        ios: module602.default.systemName,
        android: 'Android',
        windows: 'Windows',
        default: 'unknown',
      });
    },
  });
};

exports.getSystemName = Q;

var X = function () {
  return module604.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    getter: function () {
      return module602.default.systemVersion;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'systemVersion',
  });
};

exports.getSystemVersion = X;
var Y = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'buildId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.getBuildId();
    },
    syncGetter: function () {
      return module602.default.getBuildIdSync();
    },
    defaultValue: 'unknown',
  }),
  Z = module12.default(Y, 2),
  $ = Z[0],
  ee = Z[1];
exports.getBuildIdSync = ee;
exports.getBuildId = $;
var te = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'apiLevel',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getApiLevel();
    },
    syncGetter: function () {
      return module602.default.getApiLevelSync();
    },
    defaultValue: -1,
  }),
  ne = module12.default(te, 2),
  re = ne[0],
  ae = ne[1];
exports.getApiLevelSync = ae;
exports.getApiLevel = re;

var oe = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'bundleId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module602.default.bundleId;
    },
  });
};

exports.getBundleId = oe;
var ue = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'installerPackageName',
    supportedPlatforms: ['android', 'windows'],
    getter: function () {
      return module602.default.getInstallerPackageName();
    },
    syncGetter: function () {
      return module602.default.getInstallerPackageNameSync();
    },
    defaultValue: 'unknown',
  }),
  de = module12.default(ue, 2),
  se = de[0],
  ie = de[1];
exports.getInstallerPackageNameSync = ie;
exports.getInstallerPackageName = se;

var le = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'appName',
    defaultValue: 'unknown',
    getter: function () {
      return module602.default.appName;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getApplicationName = le;

var ce = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'buildNumber',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.buildNumber;
    },
    defaultValue: 'unknown',
  });
};

exports.getBuildNumber = ce;

var fe = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'version',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.appVersion;
    },
  });
};

function ge() {
  return fe() + '.' + ce();
}

exports.getVersion = fe;
var pe = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'deviceName',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.getDeviceName();
    },
    syncGetter: function () {
      return module602.default.getDeviceNameSync();
    },
    defaultValue: 'unknown',
  }),
  ye = module12.default(pe, 2),
  me = ye[0],
  Se = ye[1];
exports.getDeviceNameSync = Se;
exports.getDeviceName = me;
var Pe = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.getUsedMemory();
    },
    syncGetter: function () {
      return module602.default.getUsedMemorySync();
    },
    defaultValue: -1,
  }),
  ve = module12.default(Pe, 2),
  we = ve[0],
  Ie = ve[1];
exports.getUsedMemorySync = Ie;
exports.getUsedMemory = we;

var be = function () {
  return module604.getSupportedPlatformInfoAsync({
    memoKey: 'userAgent',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module602.default.getUserAgent();
    },
  });
};

exports.getUserAgent = be;

var Fe = function () {
  return module604.getSupportedPlatformInfoSync({
    memoKey: 'userAgent',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module602.default.getUserAgentSync();
    },
  });
};

exports.getUserAgentSync = Fe;
var ke = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.getFontScale();
    },
    syncGetter: function () {
      return module602.default.getFontScaleSync();
    },
    defaultValue: -1,
  }),
  Ae = module12.default(ke, 2),
  he = Ae[0],
  De = Ae[1];
exports.getFontScaleSync = De;
exports.getFontScale = he;
var Te = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'bootloader',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getBootloader();
    },
    syncGetter: function () {
      return module602.default.getBootloaderSync();
    },
    defaultValue: 'unknown',
  }),
  Ve = module12.default(Te, 2),
  Be = Ve[0],
  Me = Ve[1];
exports.getBootloaderSync = Me;
exports.getBootloader = Be;
var Oe = module604.getSupportedPlatformInfoFunctions({
    getter: function () {
      return module602.default.getDevice();
    },
    syncGetter: function () {
      return module602.default.getDeviceSync();
    },
    defaultValue: 'unknown',
    memoKey: 'device',
    supportedPlatforms: ['android'],
  }),
  Ce = module12.default(Oe, 2),
  Le = Ce[0],
  Ne = Ce[1];
exports.getDeviceSync = Ne;
exports.getDevice = Le;
var Ge = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'display',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getDisplay();
    },
    syncGetter: function () {
      return module602.default.getDisplaySync();
    },
    defaultValue: 'unknown',
  }),
  Ke = module12.default(Ge, 2),
  He = Ke[0],
  xe = Ke[1];
exports.getDisplaySync = xe;
exports.getDisplay = He;
var Ue = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'fingerprint',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getFingerprint();
    },
    syncGetter: function () {
      return module602.default.getFingerprintSync();
    },
    defaultValue: 'unknown',
  }),
  Ee = module12.default(Ue, 2),
  Re = Ee[0],
  _e = Ee[1];
exports.getFingerprintSync = _e;
exports.getFingerprint = Re;
var qe = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'hardware',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getHardware();
    },
    syncGetter: function () {
      return module602.default.getHardwareSync();
    },
    defaultValue: 'unknown',
  }),
  je = module12.default(qe, 2),
  We = je[0],
  ze = je[1];
exports.getHardwareSync = ze;
exports.getHardware = We;
var Je = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'host',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getHost();
    },
    syncGetter: function () {
      return module602.default.getHostSync();
    },
    defaultValue: 'unknown',
  }),
  Qe = module12.default(Je, 2),
  Xe = Qe[0],
  Ye = Qe[1];
exports.getHostSync = Ye;
exports.getHost = Xe;
var Ze = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'product',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getProduct();
    },
    syncGetter: function () {
      return module602.default.getProductSync();
    },
    defaultValue: 'unknown',
  }),
  $e = module12.default(Ze, 2),
  et = $e[0],
  tt = $e[1];
exports.getProductSync = tt;
exports.getProduct = et;
var nt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'tags',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getTags();
    },
    syncGetter: function () {
      return module602.default.getTagsSync();
    },
    defaultValue: 'unknown',
  }),
  rt = module12.default(nt, 2),
  at = rt[0],
  ot = rt[1];
exports.getTagsSync = ot;
exports.getTags = at;
var ut = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'type',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getType();
    },
    syncGetter: function () {
      return module602.default.getTypeSync();
    },
    defaultValue: 'unknown',
  }),
  dt = module12.default(ut, 2),
  st = dt[0],
  it = dt[1];
exports.getTypeSync = it;
exports.getType = st;
var lt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'baseOs',
    supportedPlatforms: ['android', 'web', 'windows'],
    getter: function () {
      return module602.default.getBaseOs();
    },
    syncGetter: function () {
      return module602.default.getBaseOsSync();
    },
    defaultValue: 'unknown',
  }),
  ct = module12.default(lt, 2),
  ft = ct[0],
  gt = ct[1];
exports.getBaseOsSync = gt;
exports.getBaseOs = ft;
var pt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'previewSdkInt',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getPreviewSdkInt();
    },
    syncGetter: function () {
      return module602.default.getPreviewSdkIntSync();
    },
    defaultValue: -1,
  }),
  yt = module12.default(pt, 2),
  mt = yt[0],
  St = yt[1];
exports.getPreviewSdkIntSync = St;
exports.getPreviewSdkInt = mt;
var Pt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'securityPatch',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getSecurityPatch();
    },
    syncGetter: function () {
      return module602.default.getSecurityPatchSync();
    },
    defaultValue: 'unknown',
  }),
  vt = module12.default(Pt, 2),
  wt = vt[0],
  It = vt[1];
exports.getSecurityPatchSync = It;
exports.getSecurityPatch = wt;
var bt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'codeName',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getCodename();
    },
    syncGetter: function () {
      return module602.default.getCodenameSync();
    },
    defaultValue: 'unknown',
  }),
  Ft = module12.default(bt, 2),
  kt = Ft[0],
  At = Ft[1];
exports.getCodenameSync = At;
exports.getCodename = kt;
var ht = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'incremental',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getIncremental();
    },
    syncGetter: function () {
      return module602.default.getIncrementalSync();
    },
    defaultValue: 'unknown',
  }),
  Dt = module12.default(ht, 2),
  Tt = Dt[0],
  Vt = Dt[1];
exports.getIncrementalSync = Vt;
exports.getIncremental = Tt;
var Bt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'emulator',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.isEmulator();
    },
    syncGetter: function () {
      return module602.default.isEmulatorSync();
    },
    defaultValue: false,
  }),
  Mt = module12.default(Bt, 2),
  Ot = Mt[0],
  Ct = Mt[1];
exports.isEmulatorSync = Ct;
exports.isEmulator = Ot;

var Lt = function () {
  return module604.getSupportedPlatformInfoSync({
    defaultValue: false,
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'tablet',
    getter: function () {
      return module602.default.isTablet;
    },
  });
};

exports.isTablet = Lt;
var Nt,
  Gt = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module602.default.isPinOrFingerprintSet();
    },
    syncGetter: function () {
      return module602.default.isPinOrFingerprintSetSync();
    },
    defaultValue: false,
  }),
  Kt = module12.default(Gt, 2),
  Ht = Kt[0],
  xt = Kt[1];

function Ut() {
  if (undefined === Nt) {
    var t = J(),
      n = z();
    Nt =
      -1 !==
      module601.default.findIndex(function (o) {
        return o.brand.toLowerCase() === t.toLowerCase() && o.model.toLowerCase() === n.toLowerCase();
      });
  }

  return Nt;
}

exports.isPinOrFingerprintSetSync = xt;
exports.isPinOrFingerprintSet = Ht;
var Et = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.hasGms();
    },
    syncGetter: function () {
      return module602.default.hasGmsSync();
    },
    defaultValue: false,
  }),
  Rt = module12.default(Et, 2),
  _t = Rt[0],
  qt = Rt[1];
exports.hasGmsSync = qt;
exports.hasGms = _t;
var jt = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.hasHms();
    },
    syncGetter: function () {
      return module602.default.hasHmsSync();
    },
    defaultValue: false,
  }),
  Wt = module12.default(jt, 2),
  zt = Wt[0],
  Jt = Wt[1];
exports.hasHmsSync = Jt;
exports.hasHms = zt;
var Qt = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'firstInstallTime',
    supportedPlatforms: ['android', 'windows'],
    getter: function () {
      return module602.default.getFirstInstallTime();
    },
    syncGetter: function () {
      return module602.default.getFirstInstallTimeSync();
    },
    defaultValue: -1,
  }),
  Xt = module12.default(Qt, 2),
  Yt = Xt[0],
  Zt = Xt[1];
exports.getFirstInstallTimeSync = Zt;
exports.getFirstInstallTime = Yt;
var $t = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'installReferrer',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module602.default.getInstallReferrer();
    },
    syncGetter: function () {
      return module602.default.getInstallReferrerSync();
    },
    defaultValue: 'unknown',
  }),
  en = module12.default($t, 2),
  tn = en[0],
  nn = en[1];
exports.getInstallReferrerSync = nn;
exports.getInstallReferrer = tn;
var rn = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'lastUpdateTime',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getLastUpdateTime();
    },
    syncGetter: function () {
      return module602.default.getLastUpdateTimeSync();
    },
    defaultValue: -1,
  }),
  an = module12.default(rn, 2),
  on = an[0],
  un = an[1];
exports.getLastUpdateTimeSync = un;
exports.getLastUpdateTime = on;
var dn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getPhoneNumber();
    },
    syncGetter: function () {
      return module602.default.getPhoneNumberSync();
    },
    defaultValue: 'unknown',
  }),
  sn = module12.default(dn, 2),
  ln = sn[0],
  cn = sn[1];
exports.getPhoneNumberSync = cn;
exports.getPhoneNumber = ln;
var fn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module602.default.getCarrier();
    },
    syncGetter: function () {
      return module602.default.getCarrierSync();
    },
    defaultValue: 'unknown',
  }),
  gn = module12.default(fn, 2),
  pn = gn[0],
  yn = gn[1];
exports.getCarrierSync = yn;
exports.getCarrier = pn;
var mn = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'totalMemory',
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.getTotalMemory();
    },
    syncGetter: function () {
      return module602.default.getTotalMemorySync();
    },
    defaultValue: -1,
  }),
  Sn = module12.default(mn, 2),
  Pn = Sn[0],
  vn = Sn[1];
exports.getTotalMemorySync = vn;
exports.getTotalMemory = Pn;
var wn = module604.getSupportedPlatformInfoFunctions({
    memoKey: 'maxMemory',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module602.default.getMaxMemory();
    },
    syncGetter: function () {
      return module602.default.getMaxMemorySync();
    },
    defaultValue: -1,
  }),
  In = module12.default(wn, 2),
  bn = In[0],
  Fn = In[1];
exports.getMaxMemorySync = Fn;
exports.getMaxMemory = bn;
var kn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.getTotalDiskCapacity();
    },
    syncGetter: function () {
      return module602.default.getTotalDiskCapacitySync();
    },
    defaultValue: -1,
  }),
  An = module12.default(kn, 2),
  hn = An[0],
  Dn = An[1];

function Tn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module602.default.getTotalDiskCapacityOld());

          case 2:
            if ('ios' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'web' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', hn());

          case 4:
            return t.abrupt('return', -1);

          case 5:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Vn() {
  return 'android' === ReactNative.Platform.OS
    ? module602.default.getTotalDiskCapacityOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Dn()
    : -1;
}

exports.getTotalDiskCapacitySync = Dn;
exports.getTotalDiskCapacity = hn;
var Bn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.getFreeDiskStorage();
    },
    syncGetter: function () {
      return module602.default.getFreeDiskStorageSync();
    },
    defaultValue: -1,
  }),
  Mn = module12.default(Bn, 2),
  On = Mn[0],
  Cn = Mn[1];

function Ln() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module602.default.getFreeDiskStorageOld());

          case 2:
            if ('ios' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'web' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', On());

          case 4:
            return t.abrupt('return', -1);

          case 5:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Nn() {
  return 'android' === ReactNative.Platform.OS
    ? module602.default.getFreeDiskStorageOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Cn()
    : -1;
}

exports.getFreeDiskStorageSync = Cn;
exports.getFreeDiskStorage = On;
var Gn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.getBatteryLevel();
    },
    syncGetter: function () {
      return module602.default.getBatteryLevelSync();
    },
    defaultValue: -1,
  }),
  Kn = module12.default(Gn, 2),
  Hn = Kn[0],
  xn = Kn[1];
exports.getBatteryLevelSync = xn;
exports.getBatteryLevel = Hn;
var Un = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['ios', 'android', 'windows', 'web'],
    getter: function () {
      return module602.default.getPowerState();
    },
    syncGetter: function () {
      return module602.default.getPowerStateSync();
    },
    defaultValue: {},
  }),
  En = module12.default(Un, 2),
  Rn = En[0],
  _n = En[1];
exports.getPowerStateSync = _n;
exports.getPowerState = Rn;
var qn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module602.default.isBatteryCharging();
    },
    syncGetter: function () {
      return module602.default.isBatteryChargingSync();
    },
    defaultValue: false,
  }),
  jn = module12.default(qn, 2),
  Wn = jn[0],
  zn = jn[1];

function Jn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', Promise.resolve(Qn()));

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Qn() {
  var t = ReactNative.Dimensions.get('window'),
    n = t.height;
  return t.width >= n;
}

exports.isBatteryChargingSync = zn;
exports.isBatteryCharging = Wn;
var Xn = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module602.default.isAirplaneMode();
    },
    syncGetter: function () {
      return module602.default.isAirplaneModeSync();
    },
    defaultValue: false,
  }),
  Yn = module12.default(Xn, 2),
  Zn = Yn[0],
  $n = Yn[1];
exports.isAirplaneModeSync = $n;
exports.isAirplaneMode = Zn;

var er = function () {
  return 'windows' === ReactNative.Platform.OS
    ? 'Desktop'
    : module604.getSupportedPlatformInfoSync({
        memoKey: 'deviceType',
        supportedPlatforms: ['android', 'ios'],
        defaultValue: 'unknown',
        getter: function () {
          return module602.default.deviceType;
        },
      });
};

exports.getDeviceType = er;

exports.getDeviceTypeSync = function () {
  return 'windows' === ReactNative.Platform.OS
    ? 'Desktop'
    : module604.getSupportedPlatformInfoSync({
        memoKey: 'deviceType',
        supportedPlatforms: ['android', 'ios'],
        defaultValue: 'unknown',
        getter: function () {
          return module602.default.deviceType;
        },
      });
};

var tr = module604.getSupportedPlatformInfoFunctions({
    memoKey: '_supportedAbis',
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module602.default.getSupportedAbis();
    },
    syncGetter: function () {
      return module602.default.getSupportedAbisSync();
    },
    defaultValue: [],
  }),
  nr = module12.default(tr, 2),
  rr = nr[0],
  ar = nr[1];
exports.supportedAbisSync = ar;
exports.supportedAbis = rr;
var or = module604.getSupportedPlatformInfoFunctions({
    memoKey: '_supported32BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getSupported32BitAbis();
    },
    syncGetter: function () {
      return module602.default.getSupported32BitAbisSync();
    },
    defaultValue: [],
  }),
  ur = module12.default(or, 2),
  dr = ur[0],
  sr = ur[1];
exports.supported32BitAbisSync = sr;
exports.supported32BitAbis = dr;
var ir = module604.getSupportedPlatformInfoFunctions({
    memoKey: '_supported64BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getSupported64BitAbis();
    },
    syncGetter: function () {
      return module602.default.getSupported64BitAbisSync();
    },
    defaultValue: [],
  }),
  lr = module12.default(ir, 2),
  cr = lr[0],
  fr = lr[1];

function gr(t) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              n.next = 2;
              break;
            }

            return n.abrupt('return', module602.default.hasSystemFeature(t));

          case 2:
            return n.abrupt('return', false);

          case 3:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function pr(t) {
  return 'android' === ReactNative.Platform.OS && module602.default.hasSystemFeatureSync(t);
}

exports.supported64BitAbisSync = fr;
exports.supported64BitAbis = cr;
var yr = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module602.default.getSystemAvailableFeatures();
    },
    syncGetter: function () {
      return module602.default.getSystemAvailableFeaturesSync();
    },
    defaultValue: [],
  }),
  mr = module12.default(yr, 2),
  Sr = mr[0],
  Pr = mr[1];
exports.getSystemAvailableFeaturesSync = Pr;
exports.getSystemAvailableFeatures = Sr;
var vr = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module602.default.isLocationEnabled();
    },
    syncGetter: function () {
      return module602.default.isLocationEnabledSync();
    },
    defaultValue: false,
  }),
  wr = module12.default(vr, 2),
  Ir = wr[0],
  br = wr[1];
exports.isLocationEnabledSync = br;
exports.isLocationEnabled = Ir;
var Fr = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module602.default.isHeadphonesConnected();
    },
    syncGetter: function () {
      return module602.default.isHeadphonesConnectedSync();
    },
    defaultValue: false,
  }),
  kr = module12.default(Fr, 2),
  Ar = kr[0],
  hr = kr[1];
exports.isHeadphonesConnectedSync = hr;
exports.isHeadphonesConnected = Ar;
var Dr = module604.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module602.default.getAvailableLocationProviders();
    },
    syncGetter: function () {
      return module602.default.getAvailableLocationProvidersSync();
    },
    defaultValue: {},
  }),
  Tr = module12.default(Dr, 2),
  Vr = Tr[0],
  Br = Tr[1];

function Mr() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module602.default.getDeviceToken());

          case 2:
            return t.abrupt('return', 'unknown');

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
}

exports.getAvailableLocationProvidersSync = Br;
exports.getAvailableLocationProviders = Vr;
var Or = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo);

function Cr() {
  var t = React.useState(null),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Hn());

            case 2:
              t = n.sent;
              c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Or.addListener('RNDeviceInfo_batteryLevelDidChange', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function Lr() {
  var t = React.useState(null),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Hn());

            case 2:
              t = n.sent;
              c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Or.addListener('RNDeviceInfo_batteryLevelIsLow', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function Nr() {
  var t = React.useState({}),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Rn());

            case 2:
              t = n.sent;
              c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Or.addListener('RNDeviceInfo_powerStateDidChange', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function Gr() {
  return module600.useOnEvent('RNDeviceInfo_headphoneConnectionDidChange', Ar, false);
}

function Kr() {
  return module600.useOnMount(Yt, -1);
}

function Hr() {
  return module600.useOnMount(me, 'unknown');
}

function xr(t) {
  var n = React.useCallback(
    function () {
      return gr(t);
    },
    [t]
  );
  return module600.useOnMount(n, false);
}

function Ur() {
  return module600.useOnMount(Ot, false);
}

function Er() {
  return module600.useOnMount(j, 'unknown');
}

var Rr = {
  getAndroidId: B,
  getAndroidIdSync: M,
  getApiLevel: re,
  getApiLevelSync: ae,
  getApplicationName: le,
  getAvailableLocationProviders: Vr,
  getAvailableLocationProvidersSync: Br,
  getBaseOs: ft,
  getBaseOsSync: gt,
  getBatteryLevel: Hn,
  getBatteryLevelSync: xn,
  getBootloader: Be,
  getBootloaderSync: Me,
  getBrand: J,
  getBuildId: $,
  getBuildIdSync: ee,
  getBuildNumber: ce,
  getBundleId: oe,
  getCarrier: pn,
  getCarrierSync: yn,
  getCodename: kt,
  getCodenameSync: At,
  getDevice: Le,
  getDeviceId: R,
  getDeviceName: me,
  getDeviceNameSync: Se,
  getDeviceSync: Ne,
  getDeviceToken: Mr,
  getDeviceType: er,
  getDisplay: He,
  getDisplaySync: xe,
  getFingerprint: Re,
  getFingerprintSync: _e,
  getFirstInstallTime: Yt,
  getFirstInstallTimeSync: Zt,
  getFontScale: he,
  getFontScaleSync: De,
  getFreeDiskStorage: On,
  getFreeDiskStorageOld: Ln,
  getFreeDiskStorageSync: Cn,
  getFreeDiskStorageOldSync: Nn,
  getHardware: We,
  getHardwareSync: ze,
  getHost: Xe,
  getHostSync: Ye,
  getIncremental: Tt,
  getIncrementalSync: Vt,
  getInstallerPackageName: se,
  getInstallerPackageNameSync: ie,
  getInstallReferrer: tn,
  getInstallReferrerSync: nn,
  getInstanceId: b,
  getInstanceIdSync: F,
  getIpAddress: L,
  getIpAddressSync: N,
  getLastUpdateTime: on,
  getLastUpdateTimeSync: un,
  getMacAddress: U,
  getMacAddressSync: E,
  getManufacturer: j,
  getManufacturerSync: W,
  getMaxMemory: bn,
  getMaxMemorySync: Fn,
  getModel: z,
  getPhoneNumber: ln,
  getPhoneNumberSync: cn,
  getPowerState: Rn,
  getPowerStateSync: _n,
  getPreviewSdkInt: mt,
  getPreviewSdkIntSync: St,
  getProduct: et,
  getProductSync: tt,
  getReadableVersion: ge,
  getSecurityPatch: wt,
  getSecurityPatchSync: It,
  getSerialNumber: h,
  getSerialNumberSync: D,
  getSystemAvailableFeatures: Sr,
  getSystemAvailableFeaturesSync: Pr,
  getSystemName: Q,
  getSystemVersion: X,
  getTags: at,
  getTagsSync: ot,
  getTotalDiskCapacity: hn,
  getTotalDiskCapacityOld: Tn,
  getTotalDiskCapacitySync: Dn,
  getTotalDiskCapacityOldSync: Vn,
  getTotalMemory: Pn,
  getTotalMemorySync: vn,
  getType: st,
  getTypeSync: it,
  getUniqueId: P,
  getUsedMemory: we,
  getUsedMemorySync: Ie,
  getUserAgent: be,
  getUserAgentSync: Fe,
  getVersion: fe,
  hasGms: _t,
  hasGmsSync: qt,
  hasHms: zt,
  hasHmsSync: Jt,
  hasNotch: Ut,
  hasSystemFeature: gr,
  hasSystemFeatureSync: pr,
  isAirplaneMode: Zn,
  isAirplaneModeSync: $n,
  isBatteryCharging: Wn,
  isBatteryChargingSync: zn,
  isCameraPresent: H,
  isCameraPresentSync: x,
  isEmulator: Ot,
  isEmulatorSync: Ct,
  isHeadphonesConnected: Ar,
  isHeadphonesConnectedSync: hr,
  isLandscape: Jn,
  isLandscapeSync: Qn,
  isLocationEnabled: Ir,
  isLocationEnabledSync: br,
  isPinOrFingerprintSet: Ht,
  isPinOrFingerprintSetSync: xt,
  isTablet: Lt,
  supported32BitAbis: dr,
  supported32BitAbisSync: sr,
  supported64BitAbis: cr,
  supported64BitAbisSync: fr,
  supportedAbis: rr,
  supportedAbisSync: ar,
  syncUniqueId: v,
  useBatteryLevel: Cr,
  useBatteryLevelIsLow: Lr,
  useDeviceName: Hr,
  useFirstInstallTime: Kr,
  useHasSystemFeature: xr,
  useIsEmulator: Ur,
  usePowerState: Nr,
  useManufacturer: Er,
  useIsHeadphonesConnected: Gr,
};
exports.default = Rr;
