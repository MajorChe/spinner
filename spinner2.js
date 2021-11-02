let arr = ['/','-','\\','|'];
const func = (arr) => {
  let n = 0;
  for (let item in arr) {
    setTimeout(() => {
      if (item == arr.length - 1) {
        process.stdout.write(`\r${arr[item]}   \n`);
      }else {
        process.stdout.write(`\r${arr[item]}   `);
      }
    }, n);
    n = n + 300;
  }
};
func(arr);
// let x = 0;
// while (x < 3) {
//   func(arr);
//   x++
// }
