const array=["js", "css","javascript","python"]
// array.forEach( (item)=>{
//     console.log(item);
    
// })
// array.forEach(function(item){
// console.log(item);

// })

// const language =[{
//     name: 'English',
//     typeof:"string",
// },
// {
//     name: 'hindi',
//     typeof:"string",
// },
// {
//     name: 'spanish',
//     typeof:"string",
// }
// ]

// language.forEach((item)=>{
//     console.log(item.name, item.typeof);
    
// })


//filter 
// const aar=[1,2,3,4,5,6,7,8,9,10,11]
// let newarr=aar.filter((num)=>{ 
//     return num >4 })
// console.log(newarr);

// const arr = [1,2,3,4,5,6,7]
// const newarr = arr.filter((num)=> num>4)
// console.log(newarr);



// const books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
//     { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
//     { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" },
//     { title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Fiction" },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" }
// ];


// const newbooks = books.filter((books)=>{
//     return books.genre==="Fiction" && books.year===1951 
// })
// console.log(newbooks);


//Map

const num=[1,2,3,4,5,6,7,8]

// const newnum= num.map((num)=> num +10)
// const newnum = num.map((num)=> { return num +10})

const newnum = num.map((num)=> num*10 ) //chaining
.map((num)=> num +1) 
.filter((num)=>num>=50)
// console.log(newnum);



//reduce method
// const total = num.reduce(function(acc,curval){
//     console.log(`acc ${acc}, curval ${curval}`);
    
//   return acc + curval;

// },0)
//  const total = num.reduce((acc,curval)=> acc+curval,0)


const cart = [
    { itemname: "Laptop", price: 1000, quantity: 1 },
    { itemname: "Smartphone", price: 600, quantity: 2 },
    { itemname: "Headphones", price: 100, quantity: 1 }
];

const total = cart.reduce((acc,item)=>acc +item.price,0)
console.log(total);
