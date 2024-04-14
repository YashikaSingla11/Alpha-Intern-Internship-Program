// Function to get the next day at the same time
function getNextDaySameTime() {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    return nextDay;
  }
  
  // Set the date we're counting down to (next day at the same time)
  const countDownDate = getNextDaySameTime().getTime();
  
  // Update the countdown every 1 second
  const x = setInterval(function() {
  
    // Get the current date and time
    const now = new Date().getTime();
  
    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;
  
    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the corresponding elements
    document.getElementById("days").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
  
    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
  
