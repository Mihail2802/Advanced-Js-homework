

let numArr = [4, -9, -98, -1, 444, 3, -555];

for (i = 0; i < numArr.length; i++) {
  numArr[i] = Number(numArr[i].toString().replace("-", ""));
}
console.log(numArr);