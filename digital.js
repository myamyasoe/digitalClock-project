let myTime = setInterval(localClock, 1000);

// let button =document.getElementById("button");
// button.innerHTML = myTime.toLocaleTimeString();

function localClock() {
  let Time = new Date();
  // console.log(Time);

  let day = Time.getDay();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "Saturday";
      break;
  }
  console.log(day);

  let dayOfWeek = document.getElementById("day");

  let clock = document.getElementById("clock");
  clock.innerHTML = Time.toLocaleTimeString();

  let date = document.getElementById("date");
  date.innerHTML = day + "," + Time.toLocaleDateString();
}
