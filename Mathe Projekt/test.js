
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
