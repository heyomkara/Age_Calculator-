function calculateAge() {
    var dob = document.getElementById('dob').value;
    var currentDate = new Date();
    var birthDate = new Date(dob);
  
    if (!dob) {
      showError("Please enter a valid birth date.");
      return;
    }
  
    if (currentDate < birthDate) {
      showError("Birth date cannot be in the future.");
      return;
    }
  
    var ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    var ageMonth = currentDate.getMonth() - birthDate.getMonth();
    var ageDay = currentDate.getDate() - birthDate.getDate();
  
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
    }
  
    if (ageMonth < 0) {
      ageMonth = 12 + ageMonth;
    }
  
    if (ageDay < 0) {
      var lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
      ageDay = lastMonthDate.getDate() + ageDay;
      ageMonth--;
    }
  
    var result = "Your age is " + ageYear + " years, " + ageMonth + " months, and " + ageDay + " days.";
    showResult(result);
  }
  
  function showError(message) {
    var errorContainer = document.createElement("div");
    errorContainer.className = "error";
    errorContainer.innerText = message;
  
    var calculator = document.querySelector(".calculator");
    calculator.appendChild(errorContainer);
  
    setTimeout(function() {
      errorContainer.remove();
    }, 3000);
  }
  
  function showResult(result) {
    var resultElement = document.getElementById('result');
    resultElement.innerText = result;
  }
  