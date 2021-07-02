/*
    JS EXERCISES

    21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe" +
    22) Create an object with properties such name, surname, email +
    23) Delete Email from the previously created object +
    24) Create an array with 10 strings in it +
    25) Print in the console every string in the previous array +
    26) Create an array with 100 random numbers in it + 
    27) Wrote a function to get the MAX and the MIN from the previously created array + 
    28) Create an array of arrays, in which every array has 10 random numbers +
    29) Create a function that gets 2 arrays and returns the longest one +
    30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values +
*/

let x = "John"
let y = "Doe"
// console.log(x + " <> " + y)

const object = {
    name: "Martyna",
    surname: "Sowinska",
    email: "martyna.sowinksa@hotmail.com"
}

delete object.email
// console.log(object)

let arrayTen = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

// console.log(arrayTen)

let arrayHundred = []
while(arrayHundred.length < 100){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arrayHundred.indexOf(r) === -1) arrayHundred.push(r)
}

function max(array){
    return Math.max.apply(0, array)
}

function min(array){
    return Math.min.apply(0, array)
}

// console.log(max(arrayHundred))
// console.log(min(arrayHundred))


let arrayOfArrays = []

for(let i = 0; i < 10; i++){    
    let arr = []
    for(let j=0; j < 10; j++){
        arr.push(Math.floor(Math.random()*10))
    }
    arrayOfArrays.push(arr)
}

// console.log(arrayOfArrays[0])

// for(let i = 0; i < 10; i++){    
//     let arr = []
//     for(let j=0; j < 10; j++){
//         console.log(arrayOfArrays[i][j])
//     }
// }


function longestOne(arr1, arr2){
    if(arr1.length > arr2.length){
        return arr1
    }
    else {
        return arr2
    }
}

// console.log(longestOne([1, 2, 32, 4], [8, 9, 9, 11, 1, 1]))

function higherSumOfEl(arr1, arr2){
    let sum = 0
    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i]
    }
    let sum2 = 0
    for(let i = 0; i < arr2.length; i++){
        sum2 += arr2[i]
    }
    if(sum>sum2){
        return arr1
    }
    else{
        return arr2
    }
}

// console.log(higherSumOfEl([1, 1, 1], [1, 2, 3]))

/*
    DOM 

    31) Get element with ID "container" from the page
    32) Get every "td" from the page
    33) Create a cycle that prints the text inside every td of the page
    34) Write a function to change the heading of the page
    35) Write a function to add an extra row to the table
    36) Write a function to add the class "test" to each row in the table
    37) Write a function to add a red background to every link in the page
    38) Console log "Page loaded" when the page is correctly loaded
    39) Write a function to add new items to a UL
    40) Write a function to empty a list
*/

document.getElementById('container')

document.getAttribute('td')

