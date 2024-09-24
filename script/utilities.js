function gotoPage(id) {
  console.log(document.getElementById("donation-section"));
  window.location.href = "./" + id;
}

//common function-1
function toggleLayout(id, buttonId) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("flex");

  document.getElementById("history-button").classList.add("not-selected");
  document.getElementById("donation-button").classList.add("not-selected");

  document.getElementById("history-button").classList.remove("selected");
  document.getElementById("donation-button").classList.remove("selected");

  document.getElementById(buttonId).classList.remove("not-selected");
  document.getElementById(buttonId).classList.add("selected");
}

// Common function-2
function donateMoney(inputId, collectionField, successMessage) {
  let availableMoney = parseFloat(
    document.getElementById("current-balance").innerText
  );
  let donateText = document.getElementById(inputId).value;
  console.log(donateText, typeof donateText);
  if (isNaN(donateText) || donateText == "") {
    showAlert("Donation amount should be a number.");
    return;
  }
  let donateBalance = parseFloat(donateText);
  if (donateBalance <= 0) {
    showAlert("Donated money should be positive.");
    return;
  }

  if (availableMoney < donateBalance) {
    showAlert("You don't have enough money.");
    return;
  }
  let totalCollection = parseFloat(
    document.getElementById(collectionField).innerText
  );
  availableMoney -= donateBalance;
  totalCollection += donateBalance;
  if (parseInt(availableMoney) != availableMoney) {
    availableMoney = availableMoney.toFixed(2);
  }

  if (parseInt(totalCollection) != totalCollection) {
    totalCollection = totalCollection.toFixed(2);
  }
  document.getElementById(collectionField).innerText = totalCollection;
  document.getElementById("current-balance").innerText = availableMoney;
  document.getElementById(inputId).value = "";
  addTransaction(donateBalance + " Taka " + successMessage);
  showPopUp();
}

function showAlert(message) {
  alert(message);
}

function addTransaction(headingMessage) {
  const transaction = document.createElement("div");
  const heading = document.createElement("h2");
  const transactionTime = document.createElement("p");
  const transactionHistory = document.getElementById(
    "history-section-container"
  );
  transaction.classList.add("transaction");
  heading.classList.add("transaction-heading");
  transaction.classList.add("transaction-time");

  heading.innerText = headingMessage;
  const currentDate = "Date : " + new Date().toString();
  transactionTime.innerText = currentDate;

  transaction.appendChild(heading);
  transaction.appendChild(transactionTime);
  transactionHistory.appendChild(transaction);
}

function showPopUp() {
  const opener = document.getElementById("successModal");
  opener.showModal();
}
