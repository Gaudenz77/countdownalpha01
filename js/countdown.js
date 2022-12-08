var count; 
var maxCount = getTimeValues(); /* sekunden inputfield */;
var intervalId;

function getTimeValues() {
  let  hours = parseInt(document.getElementById("stunden").value);
  let  minutes = parseInt(document.getElementById("minuten").value);
  let  seconds = parseInt(document.getElementById("sekunden").value);
  let total = (hours * 60 * 60) + (minutes * 60) + seconds

  console.log(seconds, minutes, hours);
  console.log(total);
  return total;   
}


// my layout //
let fieldOne = document.getElementById('first-field');
fieldOne.innerHTML = '<strong>22</strong';

let fieldTwo = document.getElementById('second-field');
fieldTwo.innerHTML = '<strong>00</strong';

let fieldThree = document.getElementById('third-field');
fieldThree.innerHTML = '<strong>00</strong';

function setDisplay(info) {  // kann String od Zahl sein
    document.getElementById("display").innerText = info;
  }

function startTimer() {
  stopTimer(); // falls es schomn eine Timer gibt: zuerst stoppen
  setDisplay(maxCount); // Unterfunktion, 
  count = maxCount;   // Counter in Anfangszustand
  // Verwende die Referenz (namen) OHNE KLAMMER, da die Funktion nur geholt(ref) und untenals ausführung gesetzt wird
  intervalId = setInterval(updateCounter, 1000); // jede sekunde zähler aktualisiert

}

function stopTimer() {
  // javascript-eigene funktion
  clearInterval(intervalId);

}


function updateCounter() {
/* Stunden= count/3600
  Minuten= count/60 */
  console.log('count =', count);
  count = count - 1; // kurzform count--;
  setDisplay(count);

  let hours = Math.floor(count / 3600);
  let minutes = Math.floor((count % 3600) / 60);
  let seconds = count % 60;

console.log(hours, minutes, seconds);

  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
  
  function setHours(h){  // kann String od Zahl sein
    document.getElementById("Hours").innerText = h;
  }
  function setMinutes(m){  // kann String od Zahl sein
    document.getElementById("Minutes").innerText = m;
  }
  function setSeconds(s){  // kann String od Zahl sein
    document.getElementById("Seconds").innerText = s;
  }



  // if done then stop updating
  if(count <= 0) {
      //countdown fertig
      setDisplay('Go!');
      stopCountdown();
  }
  
  
}



















/* const comingYear = document.querySelector(".coming-year");
const birthDate = prompt("Enter birth date (1-31):");
const birthMonth = prompt("Enter birth month (1-12):");
const today = new Date();
var nextYear;
if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() + 1 > birthDate)) {
  nextYear = new Date().getFullYear() + 1;
}
else {
  nextYear = new Date().getFullYear();
}
comingYear.innerHTML = nextYear;
function countdown() {
  const remaining = new Date(`\${nextYear}-\${birthMonth}-\${birthDate} 00:00:00`) - new Date();
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(remaining / (1000 * 60)) % 60;
  const seconds = Math.floor(remaining / 1000) % 60;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}
countdown()
setInterval(countdown, 1000); */



/* let myTest = document.getElementById('demo');
myTest.innerHTML = '<strong>Test</strong';

const myName = "Gaudenz";

console.log(myName);

const thisDate = new Date();
console.log(thisDate); */



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
/* document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s "; */

// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);


//  I need:
const timeNeeded = new Date();
timeNeeded.getHours();
timeNeeded.getMinutes();
timeNeeded.getSeconds();
timeNeeded.getMilliseconds();
timeNeeded.getTime();

// and maybe:
let ms = Date.now();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

const myDate1 = Date.now();
console.log(myDate1);

// and then

function referenceTime /* startTimer??? */ (){
  if (deltaMilliSec >= (countdownMilliSec = startTimer))
  clearInterval(intervalId); /* countdown stopps */


}
/*
startMilliSec = Date.now();
currentMilliSec =  Date.now();
deltaMilliSec = (currentmilliSec - startmilliSec); 
countdownMilliSec = startTimer (input-no. input-field)



*/







/* example

let sekunden = document.querySelector('#sekunden');


var mySeconds;
var intervalHandle;

function resetPage(){
document.getElementById("inputArea").style.display="none";	


}
function tick(){
var timeDisplay=document.getElementById("time");

var min=Math.floor(mySeconds/60);
var sec=mySeconds-(min*60);

if (sec < 10) {
  sec="0"+sec;
}

var message=min.toString()+":"+sec;

timeDisplay.innerHTML=message;

if(mySeconds===0){
  alert("Done");
  clearInterval(intervalHandle);
  resetPage();
}
mySeconds--;


}
function startCounter(){
var myInput=document.getElementById("minutes").value;
if (isNaN(myInput)){
  alert("Type a valid number please");
  return;
}
mySeconds=myInput*60;

intervalHandle=setInterval(tick, 1000);

document.getElementById("inputArea").style.display="none";


} */

























