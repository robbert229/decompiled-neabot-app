var o = function (o) {
  if (o.ok) console.log('%c API_RESPONSE! %c' + o.config.url, 'background: #222; color: #bada55; font-size:16px', 'background:red;color:white;');
  else console.log('%c API_RESPONSE! %c' + o.config.url, 'background: #222; color: #ff7788; font-size:16px', 'background:red;color:white;');
  console.log(o.data);
};

exports.default = o;
