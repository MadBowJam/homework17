//Task 1
var myNum = 10,
    myStr = 'строка',
    myBool = true;
var myArr = [1,2,3,4,5];
var myObj = {
      first: 'First Name',
      last: 'Last Name',
    };
console.log('Task 1:', myNum, myStr, myBool, myArr, myObj);

//Task 2
var decimal2 = myNum.toFixed(2);
console.log('Task 2:', decimal2);

//Task 3
var i = 0;
++i;
i++;
console.log('Task 3.0:', i);
--i;
i--;
console.log('Task 3.1:', i);

//Task 4
var myTest = 20;
console.log('Task 4:', myTest += myNum,
                       myTest -= myNum,
                       myTest *= myNum,
                       myTest /= myNum,
                       myTest %= myNum);

//Task 5
var myPi = Math.PI;
var myRound = Math.floor(89.279),
    myRandom = Math.round(Math.random() * 11);
    myPow = Math.pow(3, 5);
console.log('Task 5:', myPi, myRound, myRandom, myPow);

//Task 6
var strObj = {
  str: "Мама мыла раму, рама мыла маму",
};
strObj.length = strObj.str.length;
console.log('Task 6:', strObj);

//Task 7
var isRamaPos = strObj.str.includes('рама');
console.log('Task 7:', isRamaPos);

//Task 8
var strReplace = strObj.str.replace('мыла', 'моет')
                           .replace('рама', 'Рама')
                           .replace('мыла', 'держит');
console.log('Task 8:', strReplace);

//Task 9
console.log('Task 9:', strReplace.toUpperCase(), strReplace.toLowerCase());