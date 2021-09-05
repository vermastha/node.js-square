// const square={
//     area: (a)=> (a*a),
//     perimeter: (a)=> (4*a)
// }
const squares=require('./square')

const calsquare=(a)=>{
    console.log(`the value of a is ${a} and its area is ` +squares.areas(a))
    console.log(`the value of a is ${a} and its perimeter is ` +squares.perimeters(a))
}
calsquare(5);
console.log(__filename)
console.log(__dirname)