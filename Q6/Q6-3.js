function myDigitalClock() {
  var date = new Date();
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var zone = "AM";

  if (hours >= 12) {
    zone = "PM";
    hours = hours - 12;
  }

  if (hours === 0) {
    hours = 12;
  }

  setInterval(() => {
    console.log(
      `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds} ${zone}`
    );

    if (seconds === 59) {
      seconds = 0;
      if (minutes === 59) {
        minutes = 0;
        if (hours === 12) {
          hours = 1;
        } else {
          hours++;
          if (hours === 12) {
            zone = zone === "PM" ? "AM" : "PM";
          }
        }
      } else minutes++;
    } else seconds++;
  }, 1000);
}

myDigitalClock();
