const blogButton = document.getElementById("blog-button");
const donation = document.getElementById("donation-button");
const history = document.getElementById("history-button");

const donateButton1 = document.getElementById("donateButton1");

const donateButton2 = document.getElementById("donateButton2");

const donateButton3 = document.getElementById("donateButton3");
// listeners
blogButton.addEventListener("click", function (event) {
  gotoPage("blog.html");
  console.log(event);
});

history.addEventListener("click", function () {
  toggleLayout("history-section", "history-button");
});

donation.addEventListener("click", function () {
  toggleLayout("donation-section", "donation-button");
});

donateButton1.addEventListener("click", function () {
  donateMoney(
    "inputField1",
    "totalCollection1",
    " is Donated in Donate for Flood at Noakhali, Bangladesh"
  );
});

donateButton2.addEventListener("click", function () {
  donateMoney(
    "inputField2",
    "totalCollection2",
    " is Donated in Donate for Flood Relief in Feni,Bangladesh"
  );
});

donateButton3.addEventListener("click", function () {
  donateMoney(
    "inputField3",
    "totalCollection3",
    " is Donated in Aid for Injured in the Quota Movement"
  );
});
