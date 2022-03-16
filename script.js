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