const exampleArr = [12, 45, 88, "Mihail", undefined , "SEDC", 41 , true];
let NumberOnlyData = [];

for(i = 0 ; i <exampleArr.length; i++) {
    if(typeof exampleArr[i] === "number"){
        NumberOnlyData.push(exampleArr[i])
    }
}
console.log(NumberOnlyData)