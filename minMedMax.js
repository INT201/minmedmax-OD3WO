const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let arr = [n1, n2, n3];
  if (n1<n2&&n1<n3) {
    if (n2<n3) {
      arr = [n1, n2, n3];
    } else {
      arr = [n1, n3, n2];
    }
  } else if (n2<n1&&n2<n3) {
    if (n1<n3) {
      arr = [n2, n1, n3];
    } else {
      arr = [n2, n3, n1];
    }
  } else {
    if (n1<n2) {
      arr = [n3, n1, n2];
    } else {
      arr = [n3, n2, n1];
    }
  }
  let obj = {min: arr[0], mid: arr[1], max: arr[2]}
  return obj;
} 
module.exports = minMedMax
// (minMedMax(-1, -8, 0));
