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