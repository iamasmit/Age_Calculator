function validateForm() {
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var errorMessage = "";

  // Validate month
  if (month < 1 || month > 12) {
    errorMessage += "Month must be between 1 and 12.<br>";
  }

  // Validate year
  if (year.length !== 4 || isNaN(year)) {
    errorMessage += "Year must be a 4-digit number.<br>";
  }

  // Validate date
  if (date < 1 || date > 31) {
    errorMessage += "Date must be between 1 and 31.<br>";
  } else {
    // Validate the date against the month and year
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      monthDays[1] = 29; // February in a leap year
    }
    if (date > monthDays[month - 1]) {
      errorMessage += `Date must be between 1 and ${
        monthDays[month - 1]
      } for the selected month.<br>`;
    }
  }

  // Display errors if any
  if (errorMessage) {
    document.getElementById("error-message").innerHTML = errorMessage;
    return false; // Prevent form submission
  }

  age(); // If validation passes, calculate age
  return false; // Prevent form submission to stay on the page
}

function age() {
  var d1 = document.getElementById("date").value;
  var m1 = document.getElementById("month").value;
  var y1 = document.getElementById("year").value;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
