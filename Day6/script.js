// let ar = [1,2,3,2,33,45,46,4,8];
// let newar = ar.map( (x) => x*2);
// console.log(newar);

// let newar = ar.filter( (x) => x%2 == 0 ).map( (x) => 3*x );

// let newar = ar.reduce( (x,y) => x+y , 0);
// console.log(newar)  

// let newar = ar.filter( (x) => x%2 == 0).map( (x) => x*4).reduce( (x,y) => x+y ,0);

// console.log(newar)

const students = [ {
    'name' : 'Alice',
    'score' : 10,
},
{
    'name' : 'Bob',
    'score' : 20,
},
{
    'name' : 'Rahul',
    'score' : 30,
},
{
    'name' : 'Rajan',
    'score' : 87,
},
];

let newar = students.filter( (x) => x.score>60 ).map( (x) => x.score*2).reduce( (x,y) => x +y ,0);
console.log(newar)

