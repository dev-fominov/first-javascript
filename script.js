function wrap(value) {
  let wrapper_obj = [];
  wrapper_obj['value'] = value;
  return {
    value: value 
  };
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height;
  }
}

function lovefunc(flower1, flower2){
  if((flower1 % 2 == 0 ) && (flower2 % 2 == 0 ) || (flower1 % 2 != 0 ) && (flower2 % 2 != 0 ) ) {
    return false;
  } else {
    return true;
  }
}

function powersOfTwo(n){
  let arr = [];
  for(let i = 0; i <= n; i++ ) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + ' Chinese Yuan';
}

function pillars(num_pill, dist, width) {
  if(num_pill > 1){
    return num_pill*width - 2*width + (num_pill-1)*dist/0.01;
  } else {
    return 0;
  }
}

// 19.05.2022 
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
const stringToNumber = function(str){
  return JSON.parse(str);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num > 0 ? num*-1 : num
}

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
function between(a, b) {
  var foo = [];

  for (var i = a; i <= b; i++) {
     foo.push(i);
  }
  
  return foo;
}

// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end) {
  arr = []
  for(i = start;i <= end; i++){ 
    if(!(/[5]/i.test(i))) {
      arr.push(i)
    }
  }
  return arr.length;
}

// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
function incrementer(nums) { 
  arr = []
  nums.forEach((value, index) => {
    num = value + index + 1
    arr.push(String(num).length > 1 ? num % 10 : num)
  })
  return arr
}

// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1').trim()
}

// https://www.codewars.com/kata/5898761a9c700939ee000011/train/javascript
const cornerCircle = r => +((r*Math.sqrt(2)-r)/(1 + Math.sqrt(2))).toFixed(2)