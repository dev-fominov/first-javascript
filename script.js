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