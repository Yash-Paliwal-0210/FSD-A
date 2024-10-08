// var x = 12
// let y=13
// // let y=15

// function display(){
//     var x=10
//     let y=15
//     // alert("hello",x);
//     console.log("yash",x) 
//     console.log("yash",y) 
// }

// display()


function validate(){
        let x = document.getElementById("username")
        let y = document.getElementById("password")
        let p1 =document.getElementById("result")
        if(x.value === "admin" && y.value === "admin"){
            p1.innerText("Welcome")
            // alert("logged in")
            
        }
        else{
            p1.innerText("Invalid id pass")
            // alert("wrong id pass")
            
        }
}