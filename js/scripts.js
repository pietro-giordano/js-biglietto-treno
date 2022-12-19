let km = prompt('Chilometri da percorrere?');
let age = prompt('Età del passeggero?');

let priceTicket = km * 0.21;
let priceTicketUnder = (priceTicket - ((priceTicket / 100) * 20));
let priceTicketOver = (priceTicket - ((priceTicket / 100) * 40));

if(age < 18) {
      document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketUnder.toFixed(2) + " euro.";
}
else if(age >= 65) {
      document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicketOver.toFixed(2) + " euro.";
}
else {
      document.getElementById('price_ticket').innerHTML = "Il prezzo del biglietto è di " + priceTicket.toFixed(2) + " euro.";
}