var React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = l(o);
    if (n && n.has(t)) return n.get(t);
    var c = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(c, s, f);
        else c[s] = t[s];
      }

    c.default = t;
    if (n) n.set(t, c);
    return c;
  })(require('react')),
  ReactNative = require('react-native'),
  n = ['name', 'style', 'children', 'size', 'color'];

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (l = function (t) {
    return t ? n : o;
  })(t);
}

function c() {
  return (c =
    Object.assign ||
    function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = arguments[o];

        for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
      }

      return t;
    }).apply(this, arguments);
}

function u(t, o) {
  if (null == t) return {};
  var n,
    l,
    c = s(t, o);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);

    for (l = 0; l < u.length; l++) {
      n = u[l];
      if (!(o.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(t, n) && (c[n] = t[n]);
    }
  }

  return c;
}

function s(t, o) {
  if (null == t) return {};
  var n,
    l,
    c = {},
    u = Object.keys(t);

  for (l = 0; l < u.length; l++) {
    n = u[l];
    if (!(o.indexOf(n) >= 0)) c[n] = t[n];
  }

  return c;
}

function f(t, o) {
  if (!(t instanceof o)) throw new TypeError('Cannot call a class as a function');
}

function p(t, o) {
  for (var n = 0; n < o.length; n++) {
    var l = o[n];
    l.enumerable = l.enumerable || false;
    l.configurable = true;
    if ('value' in l) l.writable = true;
    Object.defineProperty(t, l.key, l);
  }
}

function b(t, o) {
  if ('function' != typeof o && null !== o) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true,
    },
  });
  if (o) h(t, o);
}

function h(t, o) {
  return (h =
    Object.setPrototypeOf ||
    function (t, o) {
      t.__proto__ = o;
      return t;
    })(t, o);
}

function y(t) {
  if (undefined === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}

function w() {
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

function v(t) {
  return (v = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}

var k = {
  'account-book': 59905,
  aim: 59906,
  alert: 59907,
  alibaba: 59908,
  'align-center': 59909,
  'align-left': 59910,
  'align-right': 59911,
  'alipay-circle': 59912,
  alipay: 59913,
  aliwangwang: 59914,
  aliyun: 59915,
  amazon: 59916,
  android: 59917,
  'ant-cloud': 59918,
  'ant-design': 59919,
  apartment: 59920,
  api: 59921,
  apple: 59922,
  'appstore-add': 59923,
  appstore: 59924,
  'area-chart': 59925,
  'arrow-down': 59926,
  'arrow-left': 59927,
  'arrow-right': 59928,
  'arrow-up': 59929,
  'arrows-alt': 59930,
  'audio-muted': 59931,
  audio: 59932,
  audit: 59933,
  backward: 59934,
  bank: 59935,
  'bar-chart': 59936,
  barcode: 59937,
  bars: 59938,
  'behance-square': 59939,
  behance: 59940,
  bell: 59941,
  'bg-colors': 59942,
  block: 59943,
  bold: 59944,
  book: 59945,
  'border-bottom': 59946,
  'border-horizontal': 59947,
  'border-inner': 59948,
  'border-left': 59949,
  'border-outer': 59950,
  'border-right': 59951,
  'border-top': 59952,
  'border-verticle': 59953,
  border: 59954,
  'borderless-table': 59955,
  'box-plot': 59956,
  branches: 59957,
  bug: 59958,
  build: 59959,
  bulb: 59960,
  calculator: 59961,
  calendar: 59962,
  camera: 59963,
  car: 59964,
  'caret-down': 59965,
  'caret-left': 59966,
  'caret-right': 59967,
  'caret-up': 59968,
  'carry-out': 59969,
  'check-circle': 59970,
  'check-square': 59971,
  check: 59972,
  chrome: 59973,
  'ci-circle': 59974,
  ci: 59975,
  clear: 59976,
  'clock-circle': 59977,
  'close-circle': 59978,
  'close-square': 59979,
  close: 59980,
  'cloud-download': 59981,
  'cloud-server': 59982,
  'cloud-sync': 59983,
  'cloud-upload': 59984,
  cloud: 59985,
  cluster: 59986,
  'code-sandbox': 59987,
  code: 59988,
  'codepen-circle': 59989,
  codepen: 59990,
  coffee: 59991,
  'column-height': 59992,
  'column-width': 59993,
  comment: 59994,
  compass: 59995,
  compress: 59996,
  'console-sql': 59997,
  contacts: 59998,
  container: 59999,
  control: 6e4,
  copy: 60001,
  'copyright-circle': 60002,
  copyright: 60003,
  'credit-card': 60004,
  crown: 60005,
  'customer-service': 60006,
  dash: 60007,
  dashboard: 60008,
  database: 60009,
  'delete-column': 60010,
  'delete-row': 60011,
  delete: 60012,
  'delivered-procedure': 60013,
  'deployment-unit': 60014,
  desktop: 60015,
  diff: 60016,
  dingding: 60017,
  dingtalk: 60018,
  disconnect: 60019,
  dislike: 60020,
  'dollar-circle': 60021,
  dollar: 60022,
  'dot-chart': 60023,
  'double-left': 60024,
  'double-right': 60025,
  'down-circle': 60026,
  'down-square': 60027,
  down: 60028,
  download: 60029,
  drag: 60030,
  'dribbble-square': 60031,
  dribbble: 60032,
  dropbox: 60033,
  edit: 60034,
  ellipsis: 60035,
  enter: 60036,
  environment: 60037,
  'euro-circle': 60038,
  euro: 60039,
  exception: 60040,
  'exclamation-circle': 60041,
  exclamation: 60042,
  'expand-alt': 60043,
  expand: 60044,
  experiment: 60045,
  export: 60046,
  'eye-invisible': 60047,
  eye: 60048,
  facebook: 60049,
  fall: 60050,
  'fast-backward': 60051,
  'fast-forward': 60052,
  'field-binary': 60053,
  'field-number': 60054,
  'field-string': 60055,
  'field-time': 60056,
  'file-add': 60057,
  'file-done': 60058,
  'file-excel': 60059,
  'file-exclamation': 60060,
  'file-gif': 60061,
  'file-image': 60062,
  'file-jpg': 60063,
  'file-markdown': 60064,
  'file-pdf': 60065,
  'file-ppt': 60066,
  'file-protect': 60067,
  'file-search': 60068,
  'file-sync': 60069,
  'file-text': 60070,
  'file-unknown': 60071,
  'file-word': 60072,
  'file-zip': 60073,
  file: 60074,
  filter: 60075,
  fire: 60076,
  flag: 60077,
  'folder-add': 60078,
  'folder-open': 60079,
  'folder-view': 60080,
  folder: 60081,
  'font-colors': 60082,
  'font-size': 60083,
  fork: 60084,
  form: 60085,
  'format-painter': 60086,
  forward: 60087,
  frown: 60088,
  'fullscreen-exit': 60089,
  fullscreen: 60090,
  function: 60091,
  'fund-projection-screen': 60092,
  'fund-view': 60093,
  fund: 60094,
  'funnel-plot': 60095,
  gateway: 60096,
  gif: 60097,
  gift: 60098,
  github: 60099,
  gitlab: 60100,
  global: 60101,
  gold: 60102,
  'google-plus': 60103,
  google: 60104,
  group: 60105,
  hdd: 60106,
  heart: 60107,
  'heat-map': 60108,
  highlight: 60109,
  history: 60110,
  home: 60111,
  hourglass: 60112,
  html5: 60113,
  idcard: 60114,
  ie: 60115,
  import: 60116,
  inbox: 60117,
  'info-circle': 60118,
  info: 60119,
  'insert-row-above': 60120,
  'insert-row-below': 60121,
  'insert-row-left': 60122,
  'insert-row-right': 60123,
  instagram: 60124,
  insurance: 60125,
  interaction: 60126,
  'issues-close': 60127,
  italic: 60128,
  key: 60129,
  laptop: 60130,
  layout: 60131,
  'left-circle': 60132,
  'left-square': 60133,
  left: 60134,
  like: 60135,
  'line-chart': 60136,
  'line-height': 60137,
  line: 60138,
  link: 60139,
  linkedin: 60140,
  'loading-3-quarters': 60141,
  loading: 60142,
  lock: 60143,
  login: 60144,
  logout: 60145,
  'mac-command': 60146,
  mail: 60147,
  man: 60148,
  'medicine-box': 60149,
  'medium-workmark': 60150,
  medium: 60151,
  meh: 60152,
  'menu-fold': 60153,
  'menu-unfold': 60154,
  menu: 60155,
  'merge-cells': 60156,
  message: 60157,
  'minus-circle': 60158,
  'minus-square': 60159,
  minus: 60160,
  mobile: 60161,
  'money-collect': 60162,
  monitor: 60163,
  more: 60164,
  'node-collapse': 60165,
  'node-expand': 60166,
  'node-index': 60167,
  notification: 60168,
  number: 60169,
  'one-to-one': 60170,
  'ordered-list': 60171,
  'paper-clip': 60172,
  partition: 60173,
  'pause-circle': 60174,
  pause: 60175,
  'pay-circle': 60176,
  percentage: 60177,
  phone: 60178,
  'pic-center': 60179,
  'pic-left': 60180,
  'pic-right': 60181,
  picture: 60182,
  'pie-chart': 60183,
  'play-circle': 60184,
  'play-square': 60185,
  'plus-circle': 60186,
  'plus-square': 60187,
  plus: 60188,
  'pound-circle': 60189,
  pound: 60190,
  poweroff: 60191,
  printer: 60192,
  profile: 60193,
  project: 60194,
  'property-safety': 60195,
  'pull-request': 60196,
  pushpin: 60197,
  qq: 60198,
  qrcode: 60199,
  'question-circle': 60200,
  question: 60201,
  'radar-chart': 60202,
  'radius-bottomleft': 60203,
  'radius-bottomright': 60204,
  'radius-setting': 60205,
  'radius-upleft': 60206,
  'radius-upright': 60207,
  read: 60208,
  reconciliation: 60209,
  'red-envelope': 60210,
  reddit: 60211,
  redo: 60212,
  reload: 60213,
  rest: 60214,
  retweet: 60215,
  'right-circle': 60216,
  'right-square': 60217,
  right: 60218,
  rise: 60219,
  robot: 60220,
  rocket: 60221,
  rollback: 60222,
  'rotate-left': 60223,
  'rotate-right': 60224,
  'safety-certificate': 60225,
  safety: 60226,
  save: 60227,
  scan: 60228,
  schedule: 60229,
  scissor: 60230,
  search: 60231,
  'security-scan': 60232,
  select: 60233,
  send: 60234,
  setting: 60235,
  shake: 60236,
  'share-alt': 60237,
  shop: 60238,
  'shopping-cart': 60239,
  shopping: 60240,
  shrink: 60241,
  sisternode: 60242,
  sketch: 60243,
  skin: 60244,
  skype: 60245,
  'slack-square': 60246,
  slack: 60247,
  sliders: 60248,
  'small-dash': 60249,
  smile: 60250,
  snippets: 60251,
  solution: 60252,
  'sort-ascending': 60253,
  'sort-descending': 60254,
  sound: 60255,
  'split-cells': 60256,
  star: 60257,
  'step-backward': 60258,
  'step-forward': 60259,
  stock: 60260,
  stop: 60261,
  strikethrough: 60262,
  subnode: 60263,
  'swap-left': 60264,
  'swap-right': 60265,
  swap: 60266,
  switcher: 60267,
  sync: 60268,
  table: 60269,
  tablet: 60270,
  tag: 60271,
  tags: 60272,
  'taobao-circle': 60273,
  taobao: 60274,
  team: 60275,
  thunderbolt: 60276,
  'to-top': 60277,
  tool: 60278,
  'trademark-circle': 60279,
  trademark: 60280,
  transaction: 60281,
  translation: 60282,
  trophy: 60283,
  twitter: 60284,
  underline: 60285,
  undo: 60286,
  ungroup: 60287,
  unlock: 60288,
  'unordered-list': 60289,
  'up-circle': 60290,
  'up-square': 60291,
  up: 60292,
  upload: 60293,
  usb: 60294,
  'user-add': 60295,
  'user-delete': 60296,
  'user-switch': 60297,
  user: 60298,
  'usergroup-add': 60299,
  'usergroup-delete': 60300,
  verified: 60301,
  'vertical-align-bottom': 60302,
  'vertical-align-middle': 60303,
  'vertical-align-top': 60304,
  'vertical-left': 60305,
  'vertical-right': 60306,
  'video-camera-add': 60307,
  'video-camera': 60308,
  wallet: 60309,
  warning: 60310,
  wechat: 60311,
  'weibo-circle': 60312,
  'weibo-square': 60313,
  weibo: 60314,
  'whats-app': 60315,
  wifi: 60316,
  windows: 60317,
  woman: 60318,
  yahoo: 60319,
  youtube: 60320,
  yuque: 60321,
  zhihu: 60322,
  'zoom-in': 60323,
  'zoom-out': 60324,
};
exports.outlineGlyphMap = k;

var O = (function (l) {
  b(P, React.PureComponent);

  var s = P,
    h = w(),
    O,
    j,
    x,
    q = function () {
      var t,
        o,
        n = v(s);

      if (h) {
        var l = v(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return !(o = t) || ('object' != typeof o && 'function' != typeof o) ? y(this) : o;
    };

  function P() {
    f(this, P);
    return q.apply(this, arguments);
  }

  O = P;
  if (
    (j = [
      {
        key: 'render',
        value: function () {
          var l = this.props,
            s = l.name,
            f = l.style,
            p = l.children,
            b = l.size,
            h = undefined === b ? 14 : b,
            y = l.color,
            w = undefined === y ? 'black' : y,
            v = u(l, n),
            O = {
              fontFamily: 'antoutline',
              fontWeight: 'normal',
              fontStyle: 'normal',
              fontSize: h,
              color: w,
            },
            j = s ? k[s] || '?' : '';
          if ('number' == typeof j) j = String.fromCharCode(j);
          return (
            <ReactNative.Text>
              {j}
              {p}
            </ReactNative.Text>
          );
        },
      },
    ])
  )
    p(O.prototype, j);
  if (x) p(O, x);
  return P;
})();

exports.default = O;
