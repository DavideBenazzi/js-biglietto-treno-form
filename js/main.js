// REFERENZE
var nome = document.getElementById('nome');
var chilometri = document.getElementById('chilometri');
var eta = document.getElementById('eta');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');
var biglietto = document.getElementById('biglietto');
var dettagli = document.getElementById('dettagli');
var offerta = document.getElementById('offerta');
var carrozza = document.getElementById('carrozza');
var codice = document.getElementById('codice');
var costo = document.getElementById('costo');

// EVENTO GENERA BIGLIETTO
genera.addEventListener('click' , function () {
  var nomeUtente = nome.value;
  var km = chilometri.value;
  var fasciaEta = eta.value;
  // console.log(nomeUtente , km , fasciaEta);               <----da togliere
})
