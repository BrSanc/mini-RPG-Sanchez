// Creare un videogioco testuale che preveda:
    // Creazione del personaggio (nome scelto dall’utente, vita = 100, attacco e difesa)
    // Selezione randomica di mostri (nome, vita, attacco e difesa)
    // Gestire il turno del giocatore (può compiere 3 opzioni: attaccare, curarsi e tentare la fuga)
    // Gestire il turno del mostro (attacco automatico)
    // Gestire la fine del gioco (sconfitta, vittoria o fuga)

// Altre specifiche:
    // Il giocatore può curarsi solo 3 volte
    // La cura, l’attacco e la difesa sono valori random tra due estremi
    // Le probabilità di fuga calano in base al tipo di mostro (es. 90% con uno slime, 5% con Malakit il Dio Caduto)

// Oltre al giochino dovrai:
    // Gestire il versionamento del codice con l’uso di Git e mantenere una cronologia delle modifiche pulita e con messaggi di commit chiari
    // Salvare la tua repository locale su una repo pubblica su GitHub affinché possa vederla e valutarla
    // Eh sì, qui scatta un voto da 1 a 10. Il voto terrà conto di:
    // Qualità del codice
    // Organizzazione
    // Qualità della cronologia Git


// ENTI --------------------------------------------------------

//Creazione Personaggio_______________________________________________________

const char = {
    name: prompt("Nome del tuo personaggio: "),
    vita: 100,
    attaco: Math.floor(Math.random() * (20 - 5) + 5),
    difesa: Math.floor(Math.random() * (10 - 0) + 0),

}

// Creazione Mostri______________________________________________________

const slime = {
    name: "Slime",
    vita: 25,
    attaco: 20,
    difesa: 5,
}

const Dio = {
    name: "Basuso",
    vita: 10000,
    attaco: 100,
    difesa: 50,
}

// Opzioni Giocatore

function opzioni(){
    // interfaccia console - Opzioni giocatore
    console.log("") 
    console.log("Opzioni Giocatore")
    console.log("1-Attacare 2-curarsi 3-tentare fuga")
   
    // Chiediamo al User una delle 3 opzioni
    let opzione = Number(prompt("1-Attacare 2-curarsi 3-tentare fuga"));
    switch (opzione) {
        case 1: //ATTACO------------
            console.log("attaca");
            break;
        case 2: //CURA-------------
            console.log("Cura")
            break;
        case 3: //FUGA-------------
            console.log("Fuga")   
            break;
        default:
            break;
    }

//


}

//Console----------------------------------------------------------

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("                             Mini RPG                                          ")
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("")

console.log("Nome Aventuriero: "+ char.name)
console.log("Attaco: "+ char.attaco)
console.log("Difesa: "+ char.difesa)

opzioni()
opzioni()






