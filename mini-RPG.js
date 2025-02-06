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

let char = {
    name: prompt("Nome del tuo personaggio: "),
    vita: 100,
    attaco: Math.floor(Math.random() * (20 - 5) + 5),
    difesa: Math.floor(Math.random() * (10 - 0) + 0),
    cura: Math.floor(Math.random() * (70 - 50) + 70),

}

// Creazione Mostri______________________________________________________

const listaMostri = [
    {
        name: "Slime",
        vita: 25,
        attaco: 20,
        difesa: 5,
    },

    {
        name: "Orco",
        vita: 70,
        attaco: 35,
        difesa: 10,
    },

    {
        name: "Basuso",
        vita: 10000,
        attaco: 100,
        difesa: 50,
    }
]

//Selezione Randomica del Mostro

const mostroSele = listaMostri[Math.floor(Math.random() * (2 - 0) + 0)]

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

            console.log("xxxxxxxxxxxxxxxxxx hai attacato xxxxxxxxxxxxxxxxxxxxxx");
            // Attaco del aventuriero - difesa del mostro selezionato
            const dannoReale = char.attaco - mostroSele.difesa
            // Mostro perde vita
            mostroSele.vita -= dannoReale

            console.log(`Il enemico ${mostroSele.name} ha perso ${dannoReale}: `)
            console.log(`Vita Enemico: ${mostroSele.vita} `)
            console.log("")
            break;

        case 2: //CURA-------------

            console.log("Cura")
            console.log("xxxxxxxxxxxxxxxxxx Ti curi xxxxxxxxxxxxxxxxxxxxxx");
            char.vita = char.vita + char.cura
            console.log(`Ti curi di ${char.cura} - Vita Totale: ${char.vita} `)
            console.log("")

            break;

        case 3: //FUGA-------------
            console.log("Fuga")   
            break;
        default:
            break;
    }
}

//Attaco Enemico
function attacoEnemico(){
    // Il nemico togli vita al aventuriero
    console.log(`xxxxxxxxxxxxxxxxxx ${mostroSele.name} ha attacato xxxxxxxxxxxxxxxxxxxxxx`);
    let dannoReale = mostroSele.attaco - char.difesa
    char.vita = char.vita - dannoReale 
    console.log(`l'aventuriero ${char.name} ha perso ${dannoReale}: `)
    console.log(`Vita Totale: ${char.vita} `)
}


//Console----------------------------------------------------------

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("                             Mini RPG                                          ")
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("")

// Descrizione del Aventuriero
console.log("Nome Aventuriero: "+ char.name)
console.log("Attaco: "+ char.attaco)
console.log("Difesa: "+ char.difesa)
console.log("Capacita di Cura: "+ char.cura)
console.log("")

// Presentazione Mostro
console.log("Oh no! è apparso")
console.log(mostroSele.name)


let gioco = false

while(!gioco){

    opzioni()
    attacoEnemico()

    if(char.vita <= 0){
        console.log("HAI PERSO")
        gioco = true
    } else if(mostroSele.vita <= 0){
        console.log("EZ Win!")
        gioco = true
    }
}








