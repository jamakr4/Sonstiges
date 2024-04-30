// Ab hier Funktionen für ausblenden der Seitenleisten
function fadeOutAside() {
    var aside = document.getElementById('aside');
    aside.classList.add('fade-out');
    setTimeout(function() {
      aside.style.display = 'none'; 
      document.getElementById('b').style.display = 'block'; 
    }, 500); 
  }
  
  function fadeInAside() {
    var aside = document.getElementById('aside');
    aside.style.display = 'block'; 
    aside.classList.remove('fade-out'); 
    document.getElementById('b').style.display = 'none'; 
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