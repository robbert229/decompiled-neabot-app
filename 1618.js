exports.calculateFlatAffixTopPosition = function (t) {
  var n = t.height,
    o = t.paddingTop,
    l = t.paddingBottom,
    u = t.affixHeight;
  return o + (n - o - l - u) / 2;
};

exports.calculateOutlinedIconAndAffixTopPosition = function (t) {
  var n = t.height,
    o = t.affixHeight,
    l = t.labelYOffset;
  return (n - o + l) / 2;
};

var module1615 = require('./1615'),
  module1614 = require('./1614');

exports.calculateLabelTopPosition = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
    o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0,
    l = n > 0 ? n : 0;
  return Math.floor((l - t) / 2 + o);
};

exports.calculateInputHeight = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0,
    o = arguments.length > 2 ? arguments[2] : undefined,
    l = n > 0 ? n : t;
  return n > 0 ? n : l < o ? o : l;
};

exports.calculatePadding = function (t) {
  var n = t.height,
    u = t.multiline,
    f = undefined !== u && u,
    h = 0;
  if (f) h = n && f ? o(t) : l(t);
  return 0 ** h;
};

var o = function (t) {
    return t.dense ? 10 : 20;
  },
  l = function (t) {
    var n = t.topPosition,
      o = t.fontSize,
      l = t.multiline,
      u = t.scale,
      f = t.dense,
      h = t.offset,
      p = t.isAndroid,
      c = u * o,
      T = Math.floor(n / 2);
    T = T + Math.floor((c - o) / 2) - (u < 1 ? h / 2 : 0);
    if (l && p) T = (f ? h / 2 : h) ** T;
    return T;
  };

exports.adjustPaddingOut = function (t) {
  var n = t.pad,
    o = t.multiline,
    l = t.label,
    u = t.scale,
    f = t.height,
    h = t.fontSize,
    p = t.dense,
    c = t.offset,
    T = t.isAndroid,
    M = u * h,
    s = n;
  if (f)
    return {
      paddingTop: 0 ** ((f - h) / 2),
      paddingBottom: 0 ** ((f - h) / 2),
    };
  else {
    if (!T && o) {
      if (p) s += l && u < 1 ? c ** ((M / 2) * u) : 0;
      if (!p) s += l ? (u < 1 ? c ** (M * u) : (c / 2) ** (M * u)) : u < 1 ? (c / 2) ** (M * u) : 0;
      s = Math.floor(s);
    }

    return {
      paddingTop: s,
      paddingBottom: s,
    };
  }
};

exports.adjustPaddingFlat = function (t) {
  var n = t.pad,
    o = t.scale,
    l = t.multiline,
    u = t.label,
    f = t.height,
    h = t.offset,
    p = t.dense,
    c = t.fontSize,
    T = t.isAndroid,
    M = t.styles,
    s = n,
    A = s,
    O = s,
    P = M.paddingTop,
    F = M.paddingBottom,
    _ = o * c;

  if (!l)
    return u
      ? {
          paddingTop: P,
          paddingBottom: F,
        }
      : {
          paddingTop: s,
          paddingBottom: s,
        };

  if (u) {
    A = P;
    O = F;

    if (!T) {
      if (p) A += s ** (_ * o) - s / 2;
      if (!p) A += o < 1 ? (h / 2) ** (_ * o) : s ** (_ * o) - h / 2;
    }

    A = Math.floor(A);
  } else {
    if (f)
      return {
        paddingTop: 0 ** ((f - c) / 2),
        paddingBottom: 0 ** ((f - c) / 2),
      };

    if (!T) {
      if (p) s += o < 1 ? (h / 2) ** ((c / 2) * o) : (h / 2) ** o;
      if (!p) s += o < 1 ? h ** (c * o) : c ** ((h / 2) * o);
      A = s = Math.floor(s);
      O = s;
    }
  }

  return {
    paddingTop: 0 ** A,
    paddingBottom: 0 ** O,
  };
};

exports.interpolatePlaceholder = function (t, n) {
  return t.interpolate({
    inputRange: [0, 1],
    outputRange: [n ? 0 : 1, 1],
  });
};

exports.calculateFlatInputHorizontalPadding = function (o) {
  var l = o.adornmentConfig,
    u = module1615.LABEL_PADDING_HORIZONTAL,
    f = module1615.LABEL_PADDING_HORIZONTAL;
  l.forEach(function (o) {
    var l = o.type,
      h = o.side;
    if (l === module1614.AdornmentType.Icon && h === module1614.AdornmentSide.Left) u = module1615.ADORNMENT_SIZE + module1615.ADORNMENT_OFFSET + module1615.FLAT_INPUT_OFFSET;
    else if (h === module1614.AdornmentSide.Right)
      l === module1614.AdornmentType.Affix
        ? (f = module1615.ADORNMENT_SIZE + module1615.ADORNMENT_OFFSET + module1615.FLAT_INPUT_OFFSET)
        : l === module1614.AdornmentType.Icon && (f = module1615.ADORNMENT_SIZE + module1615.ADORNMENT_OFFSET + module1615.FLAT_INPUT_OFFSET);
  });
  return {
    paddingLeft: u,
    paddingRight: f,
  };
};
