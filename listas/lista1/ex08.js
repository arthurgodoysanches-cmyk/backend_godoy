function T8x8() {
  let T = "";
  
  for (let L = 0; L < 8; L++) {
    for (let C = 0; C < 8; C++) {
      if ((L + C) % 2 === 0) {
        T += "   ";
      } else {
        T += " # ";
      }
    }
     T += "\n"; 
  }
  
  return T;
}

console.log(T8x8());