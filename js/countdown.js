/* const d = new Date();
        document.getElementById("demo").innerHTML = d; */

        /* const now = new Date();
        const time = now.getTime();
        console.log(time);

        const d = new Date('December 08, 2022 12:00:00');
        console.log(d.getTime()); */



        const d = new Date(2018, 11, 24, 10, 33, 30,);
        document.getElementById("demo").innerHTML = d;





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
       