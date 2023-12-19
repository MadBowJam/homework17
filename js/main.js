//Task 1
let myNum = 10,
    myStr = 'строка',
    myBool = true;
let myArr = [1,2,3,4,5];
let myObj = {
      first: 'First Name',
      last: 'Last Name',
    };
console.log('Task 1:', myNum, myStr, myBool, myArr, myObj);

//Task 2
let decimal2 = myNum.toFixed(2);
console.log('Task 2:', decimal2);

//Task 3
let i = 0;
++i;
i++;
console.log('Task 3.0:', i);
--i;
i--;
console.log('Task 3.1:', i);

//Task 4
let myTest = 20;
console.log('Task 4:', myTest += myNum,
                       myTest -= myNum,
                       myTest *= myNum,
                       myTest /= myNum,
                       myTest %= myNum);

//Task 5
const myPi = Math.PI;
let myRound = Math.floor(89.279),
    myRandom = Math.floor(Math.random() * 11);
    myPow = Math.pow(3, 5);
console.log('Task 5:', myPi, myRound, myRandom, myPow);

//Task 6
let strObj = {
  str: "Мама мила раму, рама мила маму",
};
strObj.length = strObj.str.length;
console.log('Task 6:', strObj);

//Task 7
let isRamaPos = strObj.str.includes('рама');
console.log('Task 7:', isRamaPos);

//Task 8
strObj.str = 'Мама моет раму, Рама держит маму';
let strReplace = strObj.str;
console.log('Task 8:', strReplace);

//Task 9
console.log('Task 9:', strReplace.toUpperCase(), strReplace.toLowerCase());