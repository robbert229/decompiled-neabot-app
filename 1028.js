for (
  var module1029 = require('./1029'),
    n = module1029({
      x: null,
    }),
    u = module1029({
      y: null,
    }),
    V = module1029({
      z: null,
    }),
    o = module1029({
      w: null,
    }),
    Q = module1029({
      transformRotateRadians: null,
    }),
    v = {
      transformRotateRadians: true,
      transformScale: true,
      transformTranslate: true,
    },
    l = {
      transformRotateRadians: [0, 0, 0, 1],
      transformTranslate: [0, 0, 0],
      transformScale: [1, 1, 1],
    },
    x = /([^\s,]+)/g,
    f = function (t, n) {
      var u = t.slice(t.indexOf('(') + 1, t.indexOf(')')).match(x) || [],
        V = u
          .map(function (t) {
            return '\\b' + t + '\\b';
          })
          .join('|'),
        o = new RegExp(V, 'g');
      return t
        .substring(t.indexOf('{') + 1, t.lastIndexOf('}'))
        .replace(o, function (t) {
          var V = u.indexOf(t);
          return n[V];
        })
        .split('\n');
    },
    s = {
      unroll:
        'function(matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {\n    m0 = matVar[0];\n    m1 = matVar[1];\n    m2 = matVar[2];\n    m3 = matVar[3];\n    m4 = matVar[4];\n    m5 = matVar[5];\n    m6 = matVar[6];\n    m7 = matVar[7];\n    m8 = matVar[8];\n    m9 = matVar[9];\n    m10 = matVar[10];\n    m11 = matVar[11];\n    m12 = matVar[12];\n    m13 = matVar[13];\n    m14 = matVar[14];\n    m15 = matVar[15];\n  }',
      matrixDiffers:
        'function(retVar, matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {\n    retVar = retVar ||\n    m0 !== matVar[0] ||\n    m1 !== matVar[1] ||\n    m2 !== matVar[2] ||\n    m3 !== matVar[3] ||\n    m4 !== matVar[4] ||\n    m5 !== matVar[5] ||\n    m6 !== matVar[6] ||\n    m7 !== matVar[7] ||\n    m8 !== matVar[8] ||\n    m9 !== matVar[9] ||\n    m10 !== matVar[10] ||\n    m11 !== matVar[11] ||\n    m12 !== matVar[12] ||\n    m13 !== matVar[13] ||\n    m14 !== matVar[14] ||\n    m15 !== matVar[15];\n  }',
      transformScale:
        'function(matVar, opVar) {\n    // Scaling matVar by opVar\n    var x = opVar[0];\n    var y = opVar[1];\n    var z = opVar[2];\n    matVar[0] = matVar[0] * x;\n    matVar[1] = matVar[1] * x;\n    matVar[2] = matVar[2] * x;\n    matVar[3] = matVar[3] * x;\n    matVar[4] = matVar[4] * y;\n    matVar[5] = matVar[5] * y;\n    matVar[6] = matVar[6] * y;\n    matVar[7] = matVar[7] * y;\n    matVar[8] = matVar[8] * z;\n    matVar[9] = matVar[9] * z;\n    matVar[10] = matVar[10] * z;\n    matVar[11] = matVar[11] * z;\n    matVar[12] = matVar[12];\n    matVar[13] = matVar[13];\n    matVar[14] = matVar[14];\n    matVar[15] = matVar[15];\n  }',
      transformTranslate:
        'function(matVar, opVar) {\n    // Translating matVar by opVar\n    var x = opVar[0];\n    var y = opVar[1];\n    var z = opVar[2];\n    matVar[12] = matVar[0] * x + matVar[4] * y + matVar[8] * z + matVar[12];\n    matVar[13] = matVar[1] * x + matVar[5] * y + matVar[9] * z + matVar[13];\n    matVar[14] = matVar[2] * x + matVar[6] * y + matVar[10] * z + matVar[14];\n    matVar[15] = matVar[3] * x + matVar[7] * y + matVar[11] * z + matVar[15];\n  }',
      transformRotateRadians:
        "function(matVar, q) {\n    // Rotating matVar by q\n    var xQuat = q[0], yQuat = q[1], zQuat = q[2], wQuat = q[3];\n    var x2Quat = xQuat + xQuat;\n    var y2Quat = yQuat + yQuat;\n    var z2Quat = zQuat + zQuat;\n    var xxQuat = xQuat * x2Quat;\n    var xyQuat = xQuat * y2Quat;\n    var xzQuat = xQuat * z2Quat;\n    var yyQuat = yQuat * y2Quat;\n    var yzQuat = yQuat * z2Quat;\n    var zzQuat = zQuat * z2Quat;\n    var wxQuat = wQuat * x2Quat;\n    var wyQuat = wQuat * y2Quat;\n    var wzQuat = wQuat * z2Quat;\n    // Step 1: Inlines the construction of a quaternion matrix ('quatMat')\n    var quatMat0 = 1 - (yyQuat + zzQuat);\n    var quatMat1 = xyQuat + wzQuat;\n    var quatMat2 = xzQuat - wyQuat;\n    var quatMat4 = xyQuat - wzQuat;\n    var quatMat5 = 1 - (xxQuat + zzQuat);\n    var quatMat6 = yzQuat + wxQuat;\n    var quatMat8 = xzQuat + wyQuat;\n    var quatMat9 = yzQuat - wxQuat;\n    var quatMat10 = 1 - (xxQuat + yyQuat);\n    // quatMat3/7/11/12/13/14 = 0, quatMat15 = 1\n\n    // Step 2: Inlines multiplication, takes advantage of constant quatMat cells\n    var a00 = matVar[0];\n    var a01 = matVar[1];\n    var a02 = matVar[2];\n    var a03 = matVar[3];\n    var a10 = matVar[4];\n    var a11 = matVar[5];\n    var a12 = matVar[6];\n    var a13 = matVar[7];\n    var a20 = matVar[8];\n    var a21 = matVar[9];\n    var a22 = matVar[10];\n    var a23 = matVar[11];\n\n    var b0  = quatMat0, b1 = quatMat1, b2 = quatMat2;\n    matVar[0] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[1] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[2] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[3] = b0 * a03 + b1 * a13 + b2 * a23;\n    b0 = quatMat4; b1 = quatMat5; b2 = quatMat6;\n    matVar[4] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[5] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[6] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[7] = b0 * a03 + b1 * a13 + b2 * a23;\n    b0 = quatMat8; b1 = quatMat9; b2 = quatMat10;\n    matVar[8] = b0 * a00 + b1 * a10 + b2 * a20;\n    matVar[9] = b0 * a01 + b1 * a11 + b2 * a21;\n    matVar[10] = b0 * a02 + b1 * a12 + b2 * a22;\n    matVar[11] = b0 * a03 + b1 * a13 + b2 * a23;\n  }",
    },
    y = {
      transformScale:
        'function(matVar, opVar) {\n    // Scaling matVar known to be identity by opVar\n    matVar[0] = opVar[0];\n    matVar[1] = 0;\n    matVar[2] = 0;\n    matVar[3] = 0;\n    matVar[4] = 0;\n    matVar[5] = opVar[1];\n    matVar[6] = 0;\n    matVar[7] = 0;\n    matVar[8] = 0;\n    matVar[9] = 0;\n    matVar[10] = opVar[2];\n    matVar[11] = 0;\n    matVar[12] = 0;\n    matVar[13] = 0;\n    matVar[14] = 0;\n    matVar[15] = 1;\n  }',
      transformTranslate:
        'function(matVar, opVar) {\n    // Translating matVar known to be identity by opVar;\n    matVar[0] = 1;\n    matVar[1] = 0;\n    matVar[2] = 0;\n    matVar[3] = 0;\n    matVar[4] = 0;\n    matVar[5] = 1;\n    matVar[6] = 0;\n    matVar[7] = 0;\n    matVar[8] = 0;\n    matVar[9] = 0;\n    matVar[10] = 1;\n    matVar[11] = 0;\n    matVar[12] = opVar[0];\n    matVar[13] = opVar[1];\n    matVar[14] = opVar[2];\n    matVar[15] = 1;\n  }',
      transformRotateRadians:
        "function(matVar, q) {\n\n    // Rotating matVar which is known to be identity by q\n    var xQuat = q[0], yQuat = q[1], zQuat = q[2], wQuat = q[3];\n    var x2Quat = xQuat + xQuat;\n    var y2Quat = yQuat + yQuat;\n    var z2Quat = zQuat + zQuat;\n    var xxQuat = xQuat * x2Quat;\n    var xyQuat = xQuat * y2Quat;\n    var xzQuat = xQuat * z2Quat;\n    var yyQuat = yQuat * y2Quat;\n    var yzQuat = yQuat * z2Quat;\n    var zzQuat = zQuat * z2Quat;\n    var wxQuat = wQuat * x2Quat;\n    var wyQuat = wQuat * y2Quat;\n    var wzQuat = wQuat * z2Quat;\n    // Step 1: Inlines the construction of a quaternion matrix ('quatMat')\n    var quatMat0 = 1 - (yyQuat + zzQuat);\n    var quatMat1 = xyQuat + wzQuat;\n    var quatMat2 = xzQuat - wyQuat;\n    var quatMat4 = xyQuat - wzQuat;\n    var quatMat5 = 1 - (xxQuat + zzQuat);\n    var quatMat6 = yzQuat + wxQuat;\n    var quatMat8 = xzQuat + wyQuat;\n    var quatMat9 = yzQuat - wxQuat;\n    var quatMat10 = 1 - (xxQuat + yyQuat);\n    // quatMat3/7/11/12/13/14 = 0, quatMat15 = 1\n\n    // Step 2: Inlines the multiplication with identity matrix.\n    var b0  = quatMat0, b1 = quatMat1, b2 = quatMat2;\n    matVar[0] = b0;\n    matVar[1] = b1;\n    matVar[2] = b2;\n    matVar[3] = 0;\n    b0 = quatMat4; b1 = quatMat5; b2 = quatMat6;\n    matVar[4] = b0;\n    matVar[5] = b1;\n    matVar[6] = b2;\n    matVar[7] = 0;\n    b0 = quatMat8; b1 = quatMat9; b2 = quatMat10;\n    matVar[8] = b0;\n    matVar[9] = b1;\n    matVar[10] = b2;\n    matVar[11] = 0;\n    matVar[12] = 0;\n    matVar[13] = 0;\n    matVar[14] = 0;\n    matVar[15] = 1;\n  }",
    },
    b = function (t, n) {
      return (
        '  if (!didChange) {\n    var prevVal = result.' +
        t +
        ';\n    result.' +
        t +
        ' = ' +
        n +
        ';\n    didChange = didChange  || (' +
        n +
        ' !== prevVal);\n  } else {\n    result.' +
        t +
        ' = ' +
        n +
        ';\n  }\n'
      );
    },
    c = function (t, n, u, V) {
      var o = ('round' in t),
        Q = t.round,
        v = '  ratio = (value - ' + t.min + ') / ' + (t.max - t.min) + ';\n';
      if (!t.extrapolate) v += '  ratio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);\n';
      v += '  ' + V + ' = ' + (o ? 'Math.round(' + Q + ' * ' : '') + '(' + n + ' * (1 - ratio) + ' + u + ' * ratio)' + (o ? ') / ' + Q : '') + ';\n';
      return v;
    },
    z = function (t) {
      return c(t, t.from, t.to, 'nextScalarVal');
    },
    q = function (t) {
      return '  nextScalarVal = ' + JSON.stringify(t.value) + ';\n';
    },
    p = function (t) {
      return '  nextScalarVal = value >= ' + t.threshold + ' ? ' + t.to + ' : ' + t.from + ';\n';
    },
    M = function (t) {
      return t + 'ReuseOp';
    },
    w = function (t) {
      var n = '';

      for (var u in t) v[u] && (n += 'var ' + M(u) + ' = [];\n');

      return n;
    },
    h = function (t) {
      return '\n' + t.join('\n') + '\n';
    },
    S = function (t, n, u, V) {
      var o = M(n) + '[' + V + ']';
      return undefined !== t.from[u] && undefined !== t.to[u]
        ? '  ' + t.from[u] !== t.to[u]
          ? c(t, t.from[u], t.to[u], o)
          : o + ' = ' + t.from[u] + ';'
        : '  ' + o + ' = ' + l[n][V] + ';';
    },
    R = [],
    O = 0;
  O < 16;
  O++
)
  R.push('m' + O);

var T = function (t) {
    var n = ['  var transform = result.transform !== undefined ? result.transform : (result.transform = [{ matrix: [] }]);  var transformMatrix = transform[0].matrix;'];
    n.push.apply(n, f(s.unroll, ['transformMatrix'].concat(R)));

    for (var u = 0; u < t.length; u++) {
      var V = t[u];
      if (0 === u) n.push.apply(n, f(y[V], ['transformMatrix', M(V)]));
      else n.push.apply(n, f(s[V], ['transformMatrix', M(V)]));
    }

    n.push.apply(n, f(s.matrixDiffers, ['didChange', 'transformMatrix'].concat(R)));
    return n;
  },
  C = {
    transformTranslate: true,
    transformRotateRadians: true,
    transformScale: true,
  },
  I = function (t) {
    var v = [],
      l = 'return (function() {\n';

    for (var x in ((l += w(t)), (l += 'return function(result, value) {\n'), (l += '  var didChange = false;\n'), (l += '  var nextScalarVal;\n'), (l += '  var ratio;\n'), t)) {
      var f = t[x];
      if ('linear' === f.type) {
        if (C[x]) {
          v.push(x);
          var s = [S(f, x, n, 0), S(f, x, u, 1), S(f, x, V, 2)];
          if (x === Q) s.push(S(f, x, o, 3));
          l += h(s);
        } else {
          l += z(f);
          l += b(x, 'nextScalarVal');
        }
      } else
        'constant' === f.type
          ? ((l += q(f)), (l += b(x, 'nextScalarVal')))
          : 'step' === f.type
          ? ((l += p(f)), (l += b(x, 'nextScalarVal')))
          : 'identity' === f.type && ((l += '  nextScalarVal = value;\n'), (l += b(x, 'nextScalarVal')));
    }

    if (v.length) l += h(T(v));
    l += '  return didChange;\n';
    l += '};\n';
    l += '})()';
    return l;
  };

module.exports = function (t) {
  var n = null;
  return function (u, V) {
    if (null === n) n = Function(I(t))();
    return n(u, V);
  };
};
