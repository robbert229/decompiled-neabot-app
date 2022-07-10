var module11 = require('./11'),
  module1493 = require('./1493'),
  module820 = require('./820'),
  o = module11.default({}, module1493.DefaultTheme, {
    id: 1,
    dark: false,
    roundness: 7,
    colors: module11.default({}, module1493.DefaultTheme.colors, {
      primary: '#5c80bc',
      accent: '#a5be00',
      background: module820.default.issabeline,
      text: module820.default.panegrey,
      placeholder: module820.default.ashgrey,
      header: '#ffffff',
      headerTitle: module820.default.white,
      surface: module820.default.white,
      primaryText: module820.default.darkgunmetal,
      bottom: module820.default.white,
    }),
    barStyle: {
      default: 'dark-content',
    },
  });

exports.default = o;
