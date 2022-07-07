


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(spacebar) {
  if (spacebar.keyCode == 32) {
    goToLocation('/feed');
  }
};

window.addEventListener("keydown", checkKeyPress);

window.addEventListener("click", function(){ goToLocation('/feed')});