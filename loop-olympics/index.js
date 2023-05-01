
//--Preliminaries--//

//1.                     // 10 isnt shown because its not inclusive meaning <= 10 
// for (var i = 0; i < 10; i++){    
//     console.log(i)
// }

//2.                    // i = 9 then decrements by 1(i--) with each iteration till reaches 0
// for (var i = 9; i >= 0; i--){     
//     console.log(i)
// }

//3.
// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

//--Bronze--//

//1.                    // create empty array,then use for loop to iterate 0->9,during each iteration itll push that number to an array using the push method
// var arr = [];

// for (var i = 0; i < 10; i++){
//     arr.push(i);
// }

// console.log(arr);


//2.                   // this loop increments by 2 every iteration(everyloop) until it reaches 100, but having console.log in the loop itll output the current value of (i) only if its even number
// for (var i = 0; i <= 100; i += 2){      
//     console.log(i);
// }


//3.                  // loop starts at first element of fruit array then adds everyother fruit to the eOF arr, loops until i is = to .length of fruit array, then increments by 2 each time (i++) selecting then eOF
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// const everyOtherFruit = [];

// for (var i = 0; i < fruit.length; i+= 2){
//     everyOtherFruit.push(fruit[i]);
// }

// console.log(everyOtherFruit);