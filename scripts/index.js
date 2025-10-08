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
}

const handleHover = function (e) {
  // questa funzione verrà eseguita via HTML ogni volta che il cursore del mouse
  // si posizionerà sull'elemento prescelto (bottone)
  console.log('CURSORE SU BOTTONE', e)
}

// questo è comodissimo quando avete già l'elemento da rendere cliccabile/hoverabile/
// submittabile in HTML!
// se però l'elemento in HTML ancora non esiste (perchè intendete crearlo via JS)
// questa tecnica non è più efficace...
// to be continued
