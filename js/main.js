// COSTANTI
var prezzo = 0.21;  //prezzo normale
var prezzoMinori = 0.21 * 0.8;  //sconto 20% minorenni
var prezzoMaggiori = 0.21 * 0.6;  //sconto 40% over65


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

  if (fasciaEta === 'minorenne') {
    var prezzoBiglietto = prezzoMinori * km;
  }
  else if (fasciaEta === 'over65') {
    var prezzoBiglietto = prezzoMaggiori * km;
  }
  else {
    var prezzoBiglietto = prezzo * km;
  }
  dettagli.innerHTML = nomeUtente;
  offerta.innerHTML = 'Offerta ' + fasciaEta;
  carrozza.innerHTML = Math.ceil( Math.random() * 10 );
  codice.innerHTML = Math.floor( Math.random() * 10000 ) + 90000;
  costo.innerHTML = prezzoBiglietto.toFixed(2) + ' €';
  biglietto.className = 'visibile';
})

// EVENTO ANNULLA
annulla.addEventListener('click' , function () {
  dettagli.innerHTML = '';
  offerta.innerHTML = '';
  carrozza.innerHTML = '';
  codice.innerHTML = '';
  costo.innerHTML = '';
  biglietto.className = 'nascosto';
})
