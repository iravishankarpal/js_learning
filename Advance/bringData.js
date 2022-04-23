// random joke api 
var url = "https://api.icndb.com/jokes/random";
// with promise function 
let promise = document.getElementById("promise");
promise.addEventListener("click", function () {

    getquote().then(function (response) {
        var data = JSON.parse(response);
        var quote = data.value.joke;
        var quote_div = document.getElementById("promise-result");
        quote_div.innerHTML = quote;
  
    }).catch(function (error) {
        console.log(error);
    });
})

function getquote() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            if (this.status == 200) {
                console.log(this.Response)
                resolve(this.response);
            }
            else {
                reject(this.status);
            }
        };
        xhr.send();
    });
}



// with fetch function
let fetch_btn = document.getElementById("fetch");
fetch_btn.addEventListener("click", function () {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var quote = data.value.joke;
            var quote_div = document.getElementById("fetch-result");
            quote_div.innerHTML = quote;
        })
        .catch(function (error) {
            console.log(error);
        });
})

// with async function
let async_btn = document.getElementById("async");
async_btn.addEventListener("click", async function () {
    try {
        var response = await fetch(url);
        var data = await response.json();
        var quote = data.value.joke;
        var quote_div = document.getElementById("async-result");
        quote_div.innerHTML = quote;
    }
    catch (error) {
        console.log(error);
    }
})



