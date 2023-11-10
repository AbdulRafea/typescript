const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  let ordinal: string;

  if (number === 1) {
    ordinal = "1st";
  } else if (number === 2) {
    ordinal = "2nd";
  } else if (number === 3) {
    ordinal = "3rd";
  } else {
    ordinal = `${number}th`;
  }

  console.log(ordinal);
}

Output:
      1st
      2nd
      3rd
      4th
      5th
      6th
      7th
      8th
      9th
