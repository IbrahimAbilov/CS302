// 1.Multiply 12 with 8, and console the result:
let result = 8*12
console.log(result);

// 2.Divide 10 by 2 add result to variables x, and console x:
let result1 = 10/2
let x = result1+5
console.log(result1);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
let num = 20;
let num1 = 17;
console.log(num+num1); 

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

  let name = 'Ibrahim';
  let surName = 'Abilov';
  let year = 2002; 
  console.log(name + surName + year);

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

////// TASK 2 //////////////

let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(a);
console.log(c); 
console.log(d); 
console.log(b); 

////////////// TASK 3 //////////////

let z = 2;
let y = 1 + (a *= 2);
console.log(y);

////////////// TASK 4 //////////////

console.log('test1', test); 
{
    let test = "salam"
    console.log('test2', test); 
}
console.log('test3', test);  


console.log('test1', test);  
{
    var test = "sagol"
    console.log('test2', test); 
}

console.log('test3', test); 



////////////// TASK 5 //////////////

//Find the type of all the following cases

let name2 = "Ibrahim"
let surname = 'Abilov' //string
let year3 = 2002 //number 
let city;
let qualification = null
let obj = { name2: 'Ibrahim' }  //objekt
let arr = ['a', 'b', 'c']  // Array


////////////// TASK 6 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"


const obj1 = {
    email: 'ibrahimeab@code.edu.az',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Jafar Khandan',
            education: {
                uniname: "Unec",
            }
        }
    }
}

console.log(obj1);
console.log(obj1.info.gender);
console.log(obj1.info.loc.city);
delete obj1.info.loc.street
console.log(obj1.info.loc.education.uniname='BDU');
console.log();
// console.log(obj1.info.loc.street = 'Nizami 23');


// // 3.Console gender
// // 4.Console city
// // 5.Delete street 
// 6.Delete email, then add email inside the 'info'
// // 7.Change uni name to 'BDU'
// 8.Add degree:'bachelor' to education
// 9.Change street 'Nizami 23'
// 10.Find length of 'obj' (length property doesnt work with object, find another way)


