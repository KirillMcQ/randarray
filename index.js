function randarray(size, dtype) {
  var arr = new Array(size);
  for (var i = 0; i < size; i++) {
    if (dtype == "int") {
      arr[i] = Math.floor(Math.random() * 100);
    } else if (dtype == "float") {
      arr[i] = Math.random() * 100.0;
    } else if (dtype == "string") {
      arr[i] = "string" + i;
    } else if (dtype == "bool") {
      arr[i] = Math.random() > 0.5;
    } else if (dtype == "null") {
      arr[i] = null;
    } else if (dtype == "undefined") {
      arr[i] = undefined;
    } else if (dtype == "nan") {
      arr[i] = NaN;
    }
  }
  return arr;
}

module.exports = randarray;
