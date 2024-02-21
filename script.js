const nome =prompt ('Scrivi il tuo nome');
console.log (nome);

const cognome =prompt ('Scrivi il tuo cognome');
console.log (cognome);

const colore =prompt ('Scrivi il tuo colore preferito');
console.log (colore);

const numero =prompt ('Scegli un numero per rendere piu sicura la tua passsword');
console.log (numero);

const password = nome + cognome + colore + numero;
console.log (password);

document.getElementById('password').innerHTML=`
<p> Ciao ${nome}, questa è la tua nuova password: ${password}
`