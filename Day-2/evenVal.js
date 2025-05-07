const CheckValues = require('is-even');

let answer = CheckValues("22");

if (!answer){                            // if i use the ! then you can write any way as you can in the console.log content   
    console.log(" Odd values ");        //if i replaces the console log content into even values then it will show the correct answer
}
else{
    console.log(" Even Value ");
}
