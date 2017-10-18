//js to add up all values in an array

var sum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); // 6