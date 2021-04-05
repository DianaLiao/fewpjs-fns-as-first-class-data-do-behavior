/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let timeInfo = time.split(":");
  let hour = parseInt(timeInfo[0]);
  let minute = parseInt(timeInfo[1]);
  
  // if (hour < 12){
  //   return "Good Morning";
  // } else if (hour > 17){
  //   return "Good Evening";
  // } else {
  //   return "Good Afternoon";
  // }

  // why doesn't this work?
  let message;
  if (hour < 12){
    message = "Good Morning";
  } else if (hour > 17){
    message = "Good Evening";
  } else {
    message = "Good Afternoon";
  }

  return message;

}

/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}