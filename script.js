{
//Uppgift 2 - Variabler och scope

// let = när värdet kan ändras
let age = 30;
age = 31; // värdet ändras här

// const = värdet kan inte ändras
const name = "Falun"; 
// name = "Falun"; // namnet går inte att ändras

var country = "Sweden"; // gammal syntax, undvik att använda var
country = "Norway"; // värdet ändras här

console.log("I blocket")
console.log(age);
console.log(name);
console.log(country);

}

// Reflektion uppgift 2
/*
  Jag har lärt mig skillnaden mellan var, let och const: 
  - var ignorerar block och "lever vidare" utanför { }, alltså är den åtkomlig även efter blocket. 
  - let och const har block-scope, vilket betyder att de bara finns inom sitt { }. 
    Den stora skillnaden mellan dem är att const inte går att ändra när den väl har fått ett värde.

  Jag testade också att sätta console.log() på olika ställen:
  - Om man skriver det före blocket: let och const ger fel eftersom de inte finns än, medan var bara blir undefined. 
  - Inuti blocket: alla tre fungerar som man väntar sig. 
  - Efter blocket: bara var finns kvar, let och const går inte att nå längre.
*/

//Uppgift 3 - Jämförelser och specialvärden

console.log("'3' == 3:", '3' == 3);  //true (typkonvertering)
console.log("'3' === 3:", '3' === 3); //false (olika datatyper)

console.log("NaN === NaN:", NaN === NaN); //false
console.log("null == undefined:", null == undefined); //true 
console.log("NaN === undefined:", NaN === undefined); //false

let value
let result = value ? "truthy" : "falsy"; 
console.log("undefined är:", result);

// Reflektion uppgift 3
/*
  1. Jag har lärt mig att == jämför värden och gör typkonvertering om det behövs, medan === jämför både värde och typ. 
     Det betyder att '3' == 3 blir true, men '3' === 3 blir false. 
     Jag märkte också att null == undefined är true, men NaN === undefined är false.

  2. I ternary-operatorn och if-satser handlar det om om värdet är "truthy" eller "falsy", alltså om det räknas som sant eller falskt i ett logiskt sammanhang.

  3. NaN betyder ett ogiltigt tal, undefined är när något inte har något värde alls, och null är ett tomt värde som man sätter med avsikt.
*/


// Uppgift 4 – Funktioner
//enn variabel i "roten" av scriptet (global scope)
let name = "Hagos"; 
console.log("Global name (utanför funktion):", name);

//funktion som tar en parameter och returnerar "Hej <namn>"
function greet(name) {
    return "Hej " + name; //använder funktionsparametern
}

//anrop av funktionen direkt i console.log
console.log(greet("Mikaela")); //console skriver "Hej Mikaela"

// Spara returvärde i en variabel
let greeting = greet("Hagosha");
console.log(greeting); //"Hej Hagosha"

//visa skillnaden mellan global name och parameter name
console.log("Global name igen:", name);

function testScope() {
    console.log("Inne i funktion, global name:", name); 
}
testScope();

/* 
  Reflektion uppgift 4

  1. Det finns olika sätt att skriva funktioner: vanliga funktionsdeklarationer,
     funktionsuttryck och arrowfunktioner. Deklarationer funkar att kalla på
     innan de står i koden, vilket är smidigt. Därför valde jag den varianten.

  2. Jag behöver tänka på var i koden funktionen ligger. Bara vanliga
     funktionsdeklarationer kan anropas innan de definieras. De andra måste
     skapas först.

  3. Om jag använder samma namn på en parameter som på en global variabel
     ”skuggar” parametern den globala. Därför kan utskrifterna skilja sig beroende
     på om man är inne i funktionen eller utanför.

  4. En parameter är namnet i funktionen, ett argument är värdet man skickar in,
     och en variabel är ett värde man lagrar i koden.
*/

