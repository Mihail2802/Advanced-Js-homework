const givenArr = [12, 45, 88, 1, 567, 3, 91];

let oddOnly = [];

for (i = 0 ; i < givenArr.length; i++) {
     if(givenArr[i] % 2 !== 0){
        oddOnly.push(givenArr[i])
     }
    }
console.log(oddOnly)