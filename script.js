function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

setTimeout(function() {
document.getElementById("prank").innerHTML = "Your system has been hacked. Please check your bank account and system for the damage that has been done";
}, 5000);
