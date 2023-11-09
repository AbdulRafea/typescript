let numbers : number[] = [1, 2, 3, 4, 5];

// Produce an index error by accessing an index that does not exist
// @ts-ignore
document.write(numbers[10]);
document.write("<br> <br>")
// The error produced will be "undefined" since the element does not exist
// We will correct the error by accessing a valid index
// @ts-ignore
document.write(numbers[4]);

Output:
      undefined

      5
