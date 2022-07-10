var module11 = require('./11'),
  module564 = require('./564'),
  module1501 = require('./1501'),
  module1494 = require('./1494'),
  f = module11.default({}, module1501.default, {
    dark: true,
    mode: 'adaptive',
    colors: module11.default({}, module1501.default.colors, {
      primary: '#BB86FC',
      accent: '#03dac6',
      background: '#121212',
      surface: '#121212',
      error: '#CF6679',
      onSurface: '#FFFFFF',
      text: module1494.white,
      disabled: module564.default(module1494.white).alpha(0.38).rgb().string(),
      placeholder: module564.default(module1494.white).alpha(0.54).rgb().string(),
      backdrop: module564.default(module1494.black).alpha(0.5).rgb().string(),
      notification: module1494.pinkA100,
    }),
  });

exports.default = f;
