// console.log("this run first");
// console.log("this run second");
// console.log("this run third");



// console.log("first");

// //this cause a delay
// setTimeout(function(){
//   console.log("second");
// }, 1000);



// console.log("third");

//so while the second one is delayed we want the third one to run. here is a coffee example

//CUSTOMER1
// console.log("can i order a latte");
// console.log("i can had to it the barista");

// setTimeout(function coffeeReady(){
//   console.log("your latte is ready");
// }, 4000);

// //Cusomter2
// console.log("can i order a esspresso");
// console.log("i can had to it the barista");

// setTimeout(function coffeeReady(){
//   console.log("your espresso is ready");
// }, 2000);


//so even though customer 2 ordered after customer1, order two takes less time to make so is ready first.



//why we are running a callback is so we can run the fuction

function getTweetsAsync(callback){
//get the tweets
var tweets = "These are the tweets";
setTimeout (function(){
  callback(tweets);
}, 1000)


}

var myTweetsReceived = null;
getTweetsAsync(function(tweets){
 myTweetsReceived = tweets;
})

console.log(myTweetsReceived);

//this will come back null as the timer make line58 execute before the the tweet can be recieved








