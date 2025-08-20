//for in : with objects and arrays


const myObj= {
    js: "javascript",   
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObj) {
    //console.log(`Key: ${key}, Value: ${myObj[key]}`);
}

const numbers = [1, 2, 3, 4, 5];
for (const key in numbers) {
    //console.log(`Key: ${key}, Value: ${numbers[key]}`);
}

