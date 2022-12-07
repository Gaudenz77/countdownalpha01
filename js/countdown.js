/* var days;
var hours;
var minutes;
var seconds;

var seconds; 
var maxCountSec = 60;
var intervalIdSec;         // zum stoppen des Intervalls


function setDisplay1(sekunden) {  // kann String od Zahl sein
    document.getElementById("display1").innerText = sekunden;}

function startCountdownSec() {
    stopCountdownSec(); // falls es schomn eine Timer gibt: zuerst stoppen
    setDisplay1(maxCountSec); // Unterfunktion, 
    seconds = maxCountSec;   // Counter in Anfangszustand
    // Verwende die Referenz (namen) OHNE KLAMMER, da die Funktion nur geholt(ref) und untenals ausführung gesetzt wird
    intervalIdSec = setInterval(updateCounterSec, 1000); // jede sekunde zähler aktualisiert
}

function stopCountdownSec() {
    // javascript-eigene funktion
    clearInterval(intervalIdSec);
}

function updateCounterSec() {
    seconds = seconds - 1; // kurzform count--;
    // if done then stop updating
    if(seconds === 0) {
        //countdown fertig
        setDisplay1('Go!');
        stopCountdownSec();
    }
    else {
        // zeigt aktuellen Count
        setDisplay1(seconds);
    }    
}

var minutes; 
var maxCountMin = 60;
var intervalIdMin;


function setDisplay2(minuten) {  // kann String od Zahl sein
    document.getElementById("display2").innerText = minuten;}


function startCountdownMin() {
    stopCountdownMin(); // falls es schomn eine Timer gibt: zuerst stoppen
 
    setDisplay2(maxCountMin); // Unterfunktion, 
    minutes = maxCountMin;   // Counter in Anfangszustand

    // Verwende die Referenz (namen) OHNE KLAMMER, da die Funktion nur geholt(ref) und untenals ausführung gesetzt wird
 
    intervalIdMin = setInterval(updateCounterMin, 1000);
}

function stopCountdownMin() {
    // javascript-eigene funktion

    clearInterval(intervalIdMin);
}

function updateCounterMin() {


    minutes = minutes - 1; // kurzform count--;

    // if done then stop updating
    if(minutes === 0) {
        //countdown fertig
        setDisplay2('Go!');
        stopCountdownMin();
    }
    else {
        // zeigt aktuellen Count
        setDisplay2(minutes);
    }
    
} */

function getTimeValues() {
  var  hours = parseInt(document.getElementById("stunden").value);
  var  minutes = parseInt(document.getElementById("minuten").value);
  var  seconds = parseInt(document.getElementById("sekunden").value);


  console.log(seconds, minutes, hours);
  return false;
}

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





let sekunden = document.querySelector('#sekunden');

// Handle number changes
/* num.addEventListener('input', function () {
var a = document.getElementsByName("number");
}); */



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


}


// my layout //
let fieldOne = document.getElementById('first-field');
fieldOne.innerHTML = '<strong>00</strong';

let fieldTwo = document.getElementById('second-field');
fieldTwo.innerHTML = '<strong>00</strong';

let fieldThree = document.getElementById('third-field');
fieldThree.innerHTML = '<strong>00</strong';

let fieldFour = document.getElementById('fourth-field');
fieldFour.innerHTML = '<strong>00</strong';

let fieldFive = document.getElementById('fifth-field');
fieldFive.innerHTML = '<strong>00</strong';

let fieldSix = document.getElementById('sixth-field');
fieldSix.innerHTML = '<strong>00</strong';

/* window.onload=function(){
var myInput=document.createElement("input");
myInput.setAttribute("type","text");
myInput.setAttribute("id","minutes");

var myButton=document.createElement("input");
myButton.setAttribute("type","button");
myButton.setAttribute("value","Start Timer");

myButton.onclick=function(){
  startCounter();	
  
}
document.getElementById("inputArea").appendChild(myInput);
document.getElementById("inputArea").appendChild(myButton);

} */
