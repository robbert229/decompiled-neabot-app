module.exports = function (s, t, n, o, c) {
  s.config = t;
  if (n) s.code = n;
  s.request = o;
  s.response = c;
  s.isAxiosError = true;

  s.toJSON = function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
    };
  };

  return s;
};
