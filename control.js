//1. Write a function that accepts an array of strings and console.logs each element using a for loop.

function food(arr){
for(let f=0; f<=arr.length-1; f++){//i<num.length-alternative

    console.log(arr[f]);
}
}

let arr=["pilau","matoke","okra","gwashe"];
food(arr);

//2. Write a function that accepts an array of numbers and uses the forEach() method 
//to console.log each number multiplied by 2.

function digit(num, i, arr){
  arr[i] = num * 2;
  console.log(numbers);
}
let numbers = [65, 44, 12, 4];
numbers.forEach(digit);


//3. Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
//and the last two added by 5. Console the array with the new values
let ages=[178,66,8,11,3,26,45,20];
let newarr=[];
function years(ages){
    for(let i=0; i<=ages.length-1; i++){
       // console.log(ages[i]*8);
        if(i===3){
            break; 
        }
        newarr.push(ages[i]*8)
    }
    for(let i=ages.length-2; i<=ages.length-1; i++){
        //console.log(ages[i]+5);
        if(i===ages.length-2){       
        }
        newarr.push(ages[i]+5)
    }
    console.log(newarr)
} 
years(ages);  


//4.Write a function that takes in the following array and use a while loop to iterate and 
//break when the item is equal to the fourth index

function digits(arrNum){
    let i=0;
while( i < arrNum.length-1){
    console.log(arrNum[i]);
    i++
    if(i===4){
        break; 
    } 
    //newdigits.push(arrNum[i]); 
}//How do you push this to a new array
//console.log(newdigits);
}
let newdigits=[];
let arrNum = [1,2,3,4,5,6,7,8,9];
digits(arrNum);


//5. Write a function that takes in a an array of strings and
// use a continue statement when the item is at the second index
function items(fruits){
    for(let x=0; x< fruits.length-1;x++){
        if(x===2){
            continue;
        }
        console.log(fruits[x])
       //ft.push(fruits[x]);
       //console.log(ft);
    }
}
let ft=[];
let fruits= ['apple','plum','banana','strawberries','kiwi']
items(fruits)



