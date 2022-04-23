// let fruit = 'banana, apple, orange, blackberry'
// console.log(`fruit string length is ${fruit.length}`)
// console.log(fruit.split(','));
// console.log(fruit.split(''));

// array
let fruits = ["banana", "apple", "orange", "blackberry"];
// console.log(fruits)
// fruits[3] = 'pear';
// console.log(fruits)
// fruits.push('na')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
fruits.shift('orange');
console.log(fruits)
fruits.unshift('kiwi');
console.log(fruits)
// console.log(fruits)
let vegetable = ['helw','asdf','uoiasdfh']
let all = fruits.concat(vegetable);
console.log(all)
console.log(all.reverse())

// sort
let somenum = [32,33,32,53,24,52,35,23,32,325,53,,23,32,32]
console.log(somenum.sort(function(a, b){return a - b}));


//objects in jsavascript
//dictionaries in python


let student = {
    first:'ravi',last:'pal',
    second:{heiilo:'arvi',tes:'hellos i am test funciton'},
    info: function(){

        return (this.second.tes)
    } 

}

console.log(student)
console.log("its object")
console.log(student.first)
console.log(student.second.tes)
var x = (student.info())
console.log(x)
student[first]