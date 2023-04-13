/* js code */
// Get the modal
var modal = document.getElementById("confirmModal");

// Get the button that opens the modal
var cancelBtn = document.getElementById("cancelBtn");

// Get the No and Yes buttons in the modal
var noBtn = document.getElementById("noBtn");
var yesBtn = document.getElementById("yesBtn");

// When the user clicks the Cancel button, open the modal
cancelBtn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks No, close the modal
noBtn.onclick = function() {
modal.style.display = "none";
}

// When the user clicks Yes, update the modal and close it after 2 seconds
yesBtn.onclick = function() {
var modalContent = document.querySelector(".modal-content");
modalContent.innerHTML = "<h2>Subscription successfully cancelled!</h2>";
setTimeout(function() {
modal.style.display = "none";
cancelBtn.innerHTML = "Cancelled";
}, 2000);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
