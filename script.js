// Create an arry of 50 random numbers range between 1 to 100 programmatically
// const arr = [];
// for(let i = 1; i<=50; i++){
//     const num = Math.floor(Math.random()*100) + 1;
//     arr.push(num);
   
// }
// console.log(arr);

// sort an array in decending order
// arr.sort((a,b)=>{
//     return b-a;
// });


// get the total valur of the array
// const total = arr.reduce((accumulator, value)=>{
//     return accumulator + value;
// },0);
// console.log(total);

// Palindrome
// function 
function palFunction(str)
{
    // convert the string into an array using string.split()function
    const arrValue = string.split("");
    
// 
    const reveArrVal = arrValue.reverse();
    const revString = reveArrVal.join("");
    if(string == revString){
        alert("this is a palindrome");
    }
    else{
        alert("this is not a palindrome");
    }
}
const string = prompt("enter the string to check");
const value = palFunction(string);
console.log(value);