
function min(a, b){
    if(a < b){
        return a;
    } else {
        return b;
    }
}

const minArrow = (a, b) => a < b ? a : b;

console.log(min(10, 20));      