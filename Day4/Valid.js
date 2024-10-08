function validate(){
    let x = document.getElementById("username")
    let y = document.getElementById("password")
    let p1 =document.getElementById("result")
    if(x.length < 10 ) return false;
    if(y.length < 10 ) return false;
    return true
   
    
}