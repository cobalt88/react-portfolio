const string = "Hello World";

const countTheDoubles = (s) => {
  let input = s.toLowerCase();
  let inputArray = input.split("");
  let sortedArray = inputArray.sort();
  let singlesArray = [];
  let doublesArray = [];
  let tableArray = [];

  // sortedArray.forEach((element) => {
  //   if (!singlesArray.includes(element)) {
  //     singlesArray.push(element);
  //   } else {
  //     doublesArray.push(element);
  //   }
  // });

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      doublesArray.push(sortedArray[i]);
    }
  }

  console.log(doublesArray.length); //count of how many doubles
  console.log(doublesArray); //array of what letters are duplicated
  // console.log(tableArray); //array of what letters are duplicated and how many times
};

countTheDoubles(string);
