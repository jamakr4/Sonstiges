function fadeOutAside() {
    var aside = document.getElementById('aside');
    aside.classList.add('fade-out');
    setTimeout(function() {
      aside.style.display = 'none'; // Hide the aside after animation
      document.getElementById('b').style.display = 'block'; // Show the 'Show' button
    }, 500); // Duration of fade-out animation in milliseconds
  }
  
  function fadeInAside() {
    var aside = document.getElementById('aside');
    aside.style.display = 'block'; // Show the aside
    aside.classList.remove('fade-out'); // Remove the fade-out class
    document.getElementById('b').style.display = 'none'; // Hide the 'Show' button
  }




// Ab hier Funktionen für den Taschenrechner
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}