"use strict";

//beregning af arealet af en rektangel
const længde = 19;
const bredde = 21;

function arealBeregner(længde, bredde) {
  return `Dette er arealet af en rektanglen: ${længde * bredde}`;
}

const areal = arealBeregner(længde, bredde);

console.log(areal);

//omregning af m2 til ft2
let m2 = 3;
const resultat = arealOmregner(m2);

function arealOmregner(m2, ft2 = 10.7639102) {
  return `Dette er m2 omregnet til ft2:  ${m2 * ft2}`;
}

console.log(resultat);
