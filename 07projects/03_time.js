// Get the HTML element with id="clock" (where the time will be shown)
const clock = document.getElementById('clock');
// Alternative way to select the same element:
// const clock = document.querySelector('#clock')

// Run this function every 1000 milliseconds (1 second)
setInterval(function () {
  // Create a new Date object to get the current date and time
  let date = new Date();

  // Convert the time to a readable format (e.g. 10:45:32 AM)
  // console.log(date.toLocaleTimeString()); // (for debugging, prints in console)

  // Update the content of the clock element with the current time
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // refresh every 1 second
