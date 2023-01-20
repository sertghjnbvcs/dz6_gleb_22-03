function reverseStr(str) {
    let newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
alert(reverseStr('Привет мир!'));


function getAverage(...args) {
    console.log(args)
    let sum = args.reduce((a,b)=> a+=b)
    console.log(sum/args.length)
}
getAverage(5,6,5,4,5,5,6,5,4,4)