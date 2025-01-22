// for-of loop me value aati h

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings ="helloooow"
//  for (const greet of greetings) {
//     console.log(`${greet}`);
    
//  }

///***************MAP */
const map = new Map(); // unique key , same no nhi assign krta
map.set("IN","India")
map.set("usa","united States") 
// console.log(map);

for (const [key,value] of map) {
 console.log(key,":-",value);
 
    
}

