var module564 = require('./564'),
  module1494 = require('./1494'),
  module1502 = require('./1502'),
  o = {
    dark: false,
    roundness: 4,
    colors: {
      primary: '#6200ee',
      accent: '#03dac4',
      background: '#f6f6f6',
      surface: module1494.white,
      error: '#B00020',
      text: module1494.black,
      onSurface: '#000000',
      disabled: module564.default(module1494.black).alpha(0.26).rgb().string(),
      placeholder: module564.default(module1494.black).alpha(0.54).rgb().string(),
      backdrop: module564.default(module1494.black).alpha(0.5).rgb().string(),
      notification: module1494.pinkA400,
    },
    fonts: module1502.default(),
    animation: {
      scale: 1,
    },
  };

exports.default = o;
