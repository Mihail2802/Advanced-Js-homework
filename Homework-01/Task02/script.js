let numberToBeDevided = Number(
    prompt(`please enter the number you want to devide`)
  );
  let NumberDevided = [];
  let aNumberToBedevided = numberToBeDevided.toString();
  
  for (let i = 0; i < aNumberToBedevided.length; i += 1) {
    NumberDevided.push(aNumberToBedevided.charAt(i));
  }
  console.log(`number devided is ${NumberDevided}`);