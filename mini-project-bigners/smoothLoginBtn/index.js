document.getElementById('register').onclick =function() {moveToRegister()};
document.getElementById('login').onclick =function() {moveToLogin()};


function moveToRegister(){
     document.getElementById("login").classList.remove("hightlightBtn")
     document.getElementById('register').classList.add('hightlightBtn')
     document.getElementById('register-form').style.display = 'block'
     document.getElementById('login-form').style.display = 'none'
}

function moveToLogin(){
    document.getElementById("login").classList.add("hightlightBtn")
    document.getElementById('register').classList.remove('hightlightBtn')
    document.getElementById('login-form').style.display = 'block'
    document.getElementById('register-form').style.display = 'none'

}