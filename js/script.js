// Chiediamo il suo nome
const userAge = prompt("Scrivi la tua età");
// Chiediamo il cognome
const userDistance = prompt("Quanti Km devi fare?");
// Dichiariamo le variabili dei costi e sconti
const costKm = 0.21;
const normalPrice = userDistance * costKm;
const discountYoung = 20 / 100;
const discountSenior = 40 / 100;
let finalPrice;
// Calcoliamo il prezzo finale
if (userAge < 18) {
  finalPrice = normalPrice - normalPrice * discountYoung;
} else if (userAge >= 65) {
  finalPrice = normalPrice - normalPrice * discountSenior;
} else {
  finalPrice = normalPrice;
}
// Inviamo il prezzo finale in pagina
document.getElementById(
  "result"
).innerHTML = `Il prezzo del biglietto è: ${parseFloat(finalPrice).toFixed(
  2
)} &euro;. Buon viaggio!`;
