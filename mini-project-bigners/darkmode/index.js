var modBtn = document.getElementById("darkModeBtn")
modBtn.onclick = function(){
    document.body.classList.toggle("darkMode")
    if(document.body.classList.contains("darkMode")){
        document.getElementById("darkModeBtn").classList.remove('fa-moon')
        document.getElementById("darkModeBtn").classList.add('fa-sun')
    }
    else{
        document.getElementById("darkModeBtn").classList.add('fa-moon')
        document.getElementById("darkModeBtn").classList.remove('fa-sun')

    }
}
