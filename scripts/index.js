// Gli EVENTI sono "situazioni", "accadimenti" che avvengono all'interno del browser.
// ad es. click del mouse, cursore che si posiziona su un elemento, battitura
// di un tasto in un campo input, caricamento di un'immagine/un documento etc.

// Da bravi frontenders è vostro mestiere sapere intercettare questi eventi
// e potenzialmente scatenare del codice al loro transitare.

// Per catturare gli EVENTI nel browser è necessario impostare degli "ascoltatori
// di eventi" ("event listeners"), come delle trappole per orsi.

// Ogni event listener nel browser è tipicamente chiamato con "on" + nomeevento
// on è come dire "all'avvenimento di..."

// evento di click? -> onclick
// evento di submit? -> onsubmit
// evento di scroll? -> onscroll
// etc. etc.

// creiamo una funzione che verrà scatenata al CLICK del bottone in HTML
const handleClick = function (e) {
  // creiamo questa funzione NON come funzione freccia per avere
  // un "this" significativo (vedi dopo...)
  console.log('BOTTONE CLICCATO', e)
  // lancio qui la funzione createButton(), che quindi alla pressione
  // del bottone in HTML creerà il bottone in JS

  // controlliamo violaButtons per capire se dobbiamo crearne uno
  if (violaButtons < 1) {
    createButton()
  }
}

const handleHover = function (e) {
  // questa funzione verrà eseguita via HTML ogni volta che il cursore del mouse
  // si posizionerà sull'elemento prescelto (bottone)
  console.log('CURSORE SU BOTTONE', e)
}

const titleClick = function () {
  alert('Mi hai beccato!')
}

const handleJSButton = function (e) {
  console.log('Questa è una funzione riutilizzabile', e)
  console.log('preparati a ricevere un orso!')
  createBear()
}

// volete un solo bottone viola?
// tenevi conto di quanti ne avete già creati con una variabile
let violaButtons = 0

// questo è comodissimo quando avete già l'elemento da rendere cliccabile/hoverabile/
// submittabile in HTML!
// se però l'elemento in HTML ancora non esiste (perchè intendete crearlo via JS)
// questa tecnica non è più efficace...

// proviamo a creare un bottone da zero, in JS, e renderlo cliccabile!
const createButton = function () {
  // cominciamo con il creare, in memoria, un bottone vuoto
  const newButton = document.createElement('button') // <button></button>
  // diamogli un'etichetta
  newButton.innerText = 'CREATO IN JS' // <button>CREATO IN JS</button>
  // aggiungiamo una classe CSS
  newButton.classList.add('my-btn') // <button class="my-btn">CREATO IN JS</button>

  // per applicare un comportamento al bottone (un eventlistener)
  // utilizziamo il metodo "addEventListener"

  //   potete poi collegarci del codice "usa e getta"
  // newButton.addEventListener('click', function (e) {
  //   // e è sempre l'evento
  //   console.log('CLICCATO BOTTONE JS', e)
  // })

  // oppure potete collegare un evento all'esecuzione di una funzione esterna
  newButton.addEventListener('click', handleJSButton)
  // dopo handleJSButton NON CI VANNO LE PARENTESI TONDE!
  // parentesi tonde equivale a "ESEGUO HANDLEJSBUTTON", in automatico (cioè
  // JS la eseguirebbe automaticamente all'avvio della pagina)
  // dovete "fornire" la funzione all'event listener, NON eseguirla in automatico!

  // inseriamolo nella pagina, finirà come ultimo elemento di #btn-container
  // selezioniamo il contenitore
  const container = document.getElementById('btn-container')
  // ce lo appendiamo dentro
  container.appendChild(newButton)

  // violaButtons = violaButtons + 1
  //   oppure
  // violaButtons += 1
  //   oppure
  violaButtons++ // incrementa di 1 violaButtons
}

// creiamo ora una funzione che se lanciata creerà da 0 un'immagine
// la renderà sensibile ad un evento e la posizionerà nella pagina

const createBear = function () {
  // creo una img vuota
  const newImg = document.createElement('img') // <img />
  // inserisco la sorgente dell'immagine
  newImg.setAttribute('src', 'https://placebear.com/300/300')
  // inserisco la alt, cioè la descrizione dell'immagine
  newImg.setAttribute('alt', 'un orso puccioso')
  // facciamo ora in modo che al passaggio del mouse l'immagine
  // si ingrandisca leggermente
  newImg.addEventListener('mouseenter', function () {
    newImg.style.transform = 'scale(1.1)' // 110%
  })
  //   occupiamoci anche di ripristinare la scale(1) quando
  // il cursore ESCE dall'orso
  newImg.addEventListener('mouseleave', function () {
    newImg.style.transform = 'scale(1.0)' // 100%
  })
  // selezioniamo il div contenitore
  const container = document.getElementById('bear-container')
  // appendiamo l'orso nel container
  container.appendChild(newImg)
}
