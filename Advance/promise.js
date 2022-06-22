let promiseConditon = true;

var myPromise = new Promise((fullfiled, rejected) => {
  if (promiseConditon) {
    fullfiled("promise is completed");
  } else {
    rejected("promise is rejected");
  }
});

myPromise
  .then((resoponse) => console.log(" promise success ", resoponse))
  .catch((rej) => console.log(rej));
