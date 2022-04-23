var url = "https://api.icndb.com/jokes/random";



// todo with promise


var promiseBtn = document.getElementById("promiseBtn");
promiseBtn.addEventListener("click",  ()=> {
  var Pro = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        console.log(this.status);
        reject(this.status);
      }
    };
    xhr.send();
  });
  Pro.then( (response) => {

    var data = JSON.parse(response);
     document.getElementById("promise-result").innerHTML =  data.value.joke;
  }).catch((error) => {
    console.log(error);
  });
});

// * always use samllcase in parameters and in argumnet 
// ?  complete code of xhr the full it 
// todo fetch methond

var fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", () => {
  fetch(url).then((Response) => Response.json())
    .then((data) => {
      var fetchResult_div = document.getElementById("fetch-result");
      fetchResult_div.innerHTML = data.value.joke;
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

// todo async method
var asyncBtn = document.getElementById("asyncBtn");
asyncBtn.addEventListener("click", async () => {
  var response = await fetch(url);
  var data = await response.json();
  document.getElementById("async-result").innerHTML = data.value.joke;
});
