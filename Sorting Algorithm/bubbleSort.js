const array = [10, 1, 0.1, 8, 22, 11, 9, 42, 345, 1142, 33, 0];
[10, 1, 0.1, 8, 22];
const sort = (array) => {
  // 1. primary
  //   for (let i = 0; i < array.length - 1; i++) {
  //     console.log("nation");
  //     for (let j = 0; j < array.length - i - 1; j++) {
  //       console.log("MF");
  //       let tem = 0;
  //       if (array[j] > array[j + 1]) {
  //         tem = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = tem;
  //       }
  //     }
  //   }
  //   2.upgraded
  //   for (let i = 0; i < array.length - 1; i++) {
  //     let isSorted = true;
  //     console.log("HA");
  //     for (let j = 0; j < array.length - i - 1; j++) {
  //       console.log("MF");
  //       let tem = 0;
  //       if (array[j] > array[j + 1]) {
  //         tem = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = tem;
  //         isSorted = false;
  //       }
  //     }
  //     if (isSorted) {
  //       break;
  //     }
  //   }
  //   3.final version
  //   let lastExchangeIndex,
  //     sortBorder = array.length - 1;
  //   for (let i = 0; i < array.length - 1; i++) {
  //     let isSorted = true;
  //     console.log("HA");
  //     for (let j = 0; j < sortBorder; j++) {
  //       console.log("MF");
  //       let tem = 0;
  //       if (array[j] > array[j + 1]) {
  //         tem = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = tem;
  //         isSorted = false;
  //         lastExchangeIndex = j;
  //       }
  //     }
  //     sortBorder = lastExchangeIndex;
  //     if (isSorted) {
  //       break;
  //     }
  //   }
  //   4.cocktail sort
  let tem = 0;
  for (let i = 0; i < array.length / 2; i++) {
    let isSorted = true;
    console.log("HA");
    for (let j = i; j < array.length - i - 1; j++) {
      console.log("MF");
      if (array[j] > array[j + 1]) {
        tem = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tem;
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
    //偶数轮之前，将isSorted重新标记为true
    isSorted = true;
    //偶数轮，从右向左比较
    for (let j = array.length - i - 1; j > i; j--) {
      console.log("nation");
      if (array[j] < array[j - 1]) {
        tem = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tem;
        //因为有元素交换，所以不有序设置isSorted为false
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
};
console.log(array);
sort(array);
console.log(array);
