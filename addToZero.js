// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function toZero (arr) {
    let result = false;
    for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (a !== b) {
                if (array[a] + array[b] === 0) {
                value = true;
        } 
        }
    }
    }
    console.log(result)
}