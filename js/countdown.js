/* const d = new Date();
        document.getElementById("demo").innerHTML = d; */

        /* const now = new Date();
        const time = now.getTime();
        console.log(time);

        const d = new Date('December 08, 2022 12:00:00');
        console.log(d.getTime()); */



/*         const d = new Date(2018, 11, 24, 10, 33, 30,);
        document.getElementById("demo").innerHTML = d; */





        /* Example main function from Internet */

// Set the date we're counting down to
var countDownDate = new Date("Dec 8, 2022 15:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}
// Exercises


let d;

d = new Date();
d = new Date(111255454525);
d = new Date("2022-12-12T14:00:00");
d = new Date(2022, 11, 2, 11, 30, 22, 0);
d = new Date();

console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.toString());

d.setUTCMinutes(15);
d.setUTCDate(15);
d.setUTCHours(13);
d.setUTCFullYear(2023);


console.log(d.toString()); 

console.log(d.toISOString());

console.log(d.toLocaleString());
// TEst getDate over

// start try getelemntbyId

let fieldOne = document.getElementById('first-field');
fieldOne.innerHTML = '<strong>00</strong';

let fieldTwo = document.getElementById('second-field');
fieldTwo.innerHTML = '<strong>00</strong';

let fieldThree = document.getElementById('third-field');
fieldThree.innerHTML = '<strong>00</strong';


// Test get element by id inner HTML

const myDiv = document.getElementById('my-div');

myDiv.innerHTML = '<b>this is the content</b>';