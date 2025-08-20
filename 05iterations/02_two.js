//for of 

const arr = [1, 2, 3, 4, 5];
for (const num of arr){
   // console.log(num);
}

const greeting = 'Hello';
for (const greet of greeting) {
    //console.log(`each char is ${greet}`);
}


//Maps : contais unique value,and maintains the order

const map= new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map);

for(const [key,value] of map){
    //console.log(key,'-',value);
}


