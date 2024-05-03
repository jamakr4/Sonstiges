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

//Ab hier Rechen Skripte

function kreuzprodukt(x1, x2, x3, y1, y2, y3) 
{
    var resultx = (x2 * y3) - (x3 * y2);
    var resulty = (x3 * y1) - (x1 * y3);
    var resultz = (x1 * y2) - (x2 * y1);
    
    return { resultx, resulty, resultz };
}


function laenge(x, y, z) //Betrag
{
    var length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    return length;
}


function einheitsVektor(x, y, z) //Kann für EN (Einheitnormalen Vektor) und EA (Einheits Richtungsvektor)
{
    var length = laenge(x, y, z); 
    
    var eNx = (1 / length) * x;
    var eNy = (1 / length) * y;
    var eNz = (1 / length) * z;
 
    return { eNx, eNy, eNz };
}


function vektorMinusVektor(x1, x2, x3, y1, y2, y3) 
{
    var resx = x1 - y1;
    var resy = x2 - y2;
    var resz = x3 - y3;

    return { resx, resy, resz };
}


function vektorPlusVektor(x1, x2, x3, y1, y2, y3) 
{
    var resx = x1 + y1;
    var resy = x2 + y2;
    var resz = x3 + y3;

    return { resx, resy, resz };
}