// dobbiamo intervenire sull'evento di submit del form per stoppare il riavvio
// della pagina e recuperare i valori dei singoli input
// con questi valori creeremo dei piccoli article che racchiuderanno i nostri
// contatti della rubrica

// recupero il riferimento principale, quello del form
const form = document.getElementById('new-contact-form')

const deleteCard = function (e) {
  // quesa funzione viene lanciata alla pressione del tasto elimina
  console.log('ELIMINO CARD', e)
  // e.target rappresenta il BOTTONE che è stato cliccato!
  // per eliminare un elemento della pagina esiste il metodo .remove()

  // e è l'evento
  // e.target è il bottone
  // e.target.parentElement è la card
  e.target.parentElement.remove()
}

const handleFormSubmit = function (e) {
  e.preventDefault()
  console.log('ORA POSSIAMO RECUPERARE I DATI')

  // 1) recuperiamo i riferimenti a tutti gli input
  const firstnameInput = document.getElementById('firstname') // <input />
  const lastnameInput = document.getElementById('lastname')
  const phoneInput = document.getElementById('phone')

  // 2) dagli input, recuperiamo i valori
  const valoreNome = firstnameInput.value // 'Stefano'
  const valoreCognome = lastnameInput.value
  const valoreTelefono = phoneInput.value

  // 3) confermiamo intanto tutto con un console.log
  console.log(valoreNome)
  console.log(valoreCognome)
  console.log(valoreTelefono)

  // 4) ora che i dati sono al sicuro, possiamo farne ciò che vogliamo!
  // intendo costruire delle piccole porzioni di contenuto che appenderò
  // nella section "saved-contacts"

  // a) creo un div vuoto
  const card = document.createElement('div') // <div></div>
  // b) ci applico una classe CSS "contact-card"
  card.classList.add('contact-card') // <div class="contact-card"></div>
  // c) riempio il contenitore con i dati presi dal form, ho due maniere
  // c-1) maniera "matrioska"
  //   const firstP = document.createElement('p')
  //   firstP.innerText = `${valoreNome} ${valoreCognome}`
  //   card.appendChild(firstP)
  //   const secondP = document.createElement('p')
  //   secondP.innerText = valoreTelefono
  //   card.appendChild(secondP)
  // c-2) maniera "cheat"
  card.innerHTML = `
        <p>${valoreNome} ${valoreCognome}</p>
        <p>${valoreTelefono}</p>
        <button onclick="deleteCard(event)">ELIMINA</button>
    `
  // la card è ora completa! però non esiste ancora da nessuna parte nella pagina
  // d) infine APPENDIAMO la card completa nella sezione "contact-card"
  const container = document.getElementById('saved-contacts')
  container.appendChild(card)

  // e) bene! resettiamo ora i campi... due maniere:
  // e-1) maniera "manovalanza"
  // prendi i riferimenti agli input e SOVRASCRIVO IL LORO VALUE
  //   firstnameInput.value = ''
  //   lastnameInput.value = ''
  //   phoneInput.value = ''
  // e-2) maniera "furba"
  form.reset()
}

form.addEventListener('submit', handleFormSubmit)
