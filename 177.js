var module11 = require('./11'),
  module61 = require('./61'),
  module44 = require('./44'),
  module178 = require('./178'),
  module3 = require('./3'),
  module179 = require('./179'),
  module180 = require('./180'),
  module75 = require('./75'),
  module181 = require('./181'),
  module182 = require('./182'),
  module78 = require('./78'),
  module5 = require('./5');

var C = false;

function E(n) {
  var t = module44.getConstants();
  if (t.ViewManagerNames || t.LazyViewManagersEnabled) n = T(n, module44.getDefaultEventTypes());
  else {
    n.bubblingEventTypes = T(n.bubblingEventTypes, t.genericBubblingEventTypes);
    n.directEventTypes = T(n.directEventTypes, t.genericDirectEventTypes);
  }
}

function T(n, t) {
  if (!t) return n;
  if (!n) return t;

  for (var s in t)
    if (t.hasOwnProperty(s)) {
      var o = t[s];

      if (n.hasOwnProperty(s)) {
        var u = n[s];
        if ('object' == typeof o && 'object' == typeof u) o = T(u, o);
      }

      n[s] = o;
    }

  return n;
}

function w(n) {
  switch (n) {
    case 'CATransform3D':
      return module179;

    case 'CGPoint':
      return module180;

    case 'CGSize':
      return module78;

    case 'UIEdgeInsets':
      return module178;
  }

  return null;
}

function I(n) {
  switch (n) {
    case 'CGColor':
    case 'UIColor':
      return module75;

    case 'CGColorArray':
    case 'UIColorArray':
      return module181;

    case 'CGImage':
    case 'UIImage':
    case 'RCTImageSource':
      return module182;

    case 'Color':
      return module75;

    case 'ColorArray':
      return module181;
  }

  return null;
}

module.exports = function (o) {
  var c = module44.getViewManagerConfig(o);
  module3(null != c && null != c.NativeProps, 'requireNativeComponent: "%s" was not found in the UIManager.', o);

  for (var l = c.baseModuleName, v = c.bubblingEventTypes, b = c.directEventTypes, p = c.NativeProps; l; ) {
    var f = module44.getViewManagerConfig(l);

    if (f) {
      v = module11({}, f.bubblingEventTypes, v);
      b = module11({}, f.directEventTypes, b);
      p = module11({}, f.NativeProps, p);
      l = f.baseModuleName;
    } else {
      module5(false, 'Base module "%s" does not exist', l);
      l = null;
    }
  }

  var T = {};

  for (var N in p) {
    var M = p[N],
      P = w(M),
      h = I(M);
    T[N] = (null == P && null == h) || {
      diff: P,
      process: h,
    };
  }

  T.style = module61;
  module11(c, {
    uiViewClassName: o,
    validAttributes: T,
    bubblingEventTypes: v,
    directEventTypes: b,
  });

  if (!C) {
    E(c);
    C = true;
  }

  return c;
};
