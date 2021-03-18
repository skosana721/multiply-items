let array = [2, 3, 5];

const multiplyItem = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};
multiplyItem(array);
