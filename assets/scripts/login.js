function doLogin(){
    var name = document.getElementById("userid").value;
    var password = document.getElementById("pwd").value;
    console.log(name , password);
    var message = "";
    if(name===password){
        console.log("valid userid and password");
        location.href = "dashboard.html";
    }
    else{
        message = "Invalid username and password";
        document.getElementById("error").innerText = message;
    }
}

function reset(){
    document.getElementById("userid").value = "";
    document.getElementById("pwd").value = "";
}

// function showPassword(){
//     var password = document.getElementById("pwd").value;
//     console.log(password);
//     var pass = document.getElementById("pwd");
//     pass.innerHTML = password;
// }