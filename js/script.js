const mazzo = [
{
    id: 1,
    nome: 'Bloodfire Colossus',
    costoLancio: ['6', 'R', 'R'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Giant',
    espansione: {       // innesto oggetto per espansioni
        nEdizione: 9,
        rarita: 'oro',
        collezioneNum: 12,
        },
    testoDiColore: {        // innesto oggetto per infotesto
        dichiarazioni: 'Anaba Shaman...',
        autore:'Gog di Magog',
    },
    abilita: [          // innesto array abilità
        {
        costoLancio: ['R', 'T'],
        descrizione: 'debole',  
        },
        {
        costoLancio: ['W', 'B', 'T'],
        descrizione: 'medio',    
        },
    ],
    numeroCollezione: '177/350',
    costituzione: 2,
    forza: 5,
    coloreBordo: 'black',

    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'red',
},
{
    id: 1,
    nome: 'Bloodfire Colossus',
    costoLancio: ['6', 'R', 'R'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Giant',
    espansione: {       // innesto oggetto per espansioni
        nEdizione: 9,
        rarita: 'oro',
        collezioneNum: 12,
        },
    testoDiColore: {        // innesto oggetto per infotesto
        dichiarazioni: 'Anaba Shaman...',
        autore:'Gog di Magog',
    },
    abilita: [          // innesto array abilità
        {
        costoLancio: ['R', 'T'],
        descrizione: 'debole',  
        },
        {
        costoLancio: ['W', 'B', 'T'],
        descrizione: 'medio',    
        },
    ],
    numeroCollezione: '177/350',
    costituzione: 2,
    forza: 5,
    coloreBordo: 'black',

    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'red',
},
{
    id: 1,
    nome: 'Bloodfire Colossus',
    costoLancio: ['6', 'R', 'R'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Giant',
    espansione: {       // innesto oggetto per espansioni
        nEdizione: 9,
        rarita: 'oro',
        collezioneNum: 12,
        },
    testoDiColore: {        // innesto oggetto per infotesto
        dichiarazioni: 'Anaba Shaman...',
        autore:'Gog di Magog',
    },
    abilita: [          // innesto array abilità
        {
        costoLancio: ['R', 'T'],
        descrizione: 'debole',  
        },
        {
        costoLancio: ['W', 'B', 'T'],
        descrizione: 'medio',    
        },
    ],
    numeroCollezione: '177/350',
    costituzione: 2,
    forza: 5,
    coloreBordo: 'black',

    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'red',
},
{
    id: 1,
    nome: 'Bloodfire Colossus',
    costoLancio: ['6', 'R', 'R'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Giant',
    espansione: {       // innesto oggetto per espansioni
        nEdizione: 9,
        rarita: 'oro',
        collezioneNum: 12,
        },
    testoDiColore: {        // innesto oggetto per infotesto
        dichiarazioni: 'Anaba Shaman...',
        autore:'Gog di Magog',
    },
    abilita: [          // innesto array abilità
        {
        costoLancio: ['R', 'T'],
        descrizione: 'debole',  
        },
        {
        costoLancio: ['W', 'B', 'T'],
        descrizione: 'medio',    
        },
    ],
    numeroCollezione: '177/350',
    costituzione: 2,
    forza: 5,
    coloreBordo: 'black',

    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'red',
},
];


            //* FUNZIONE PREDISPOSIZIONE STAMPA
const cartaTemplate = creaCartaTemplate(mazzo);

function creaCartaTemplate (carta) {
    const specTipoCarta = carta.specTipoCarta ? ` ${carta.specTipoCarta}` :' ';

let contAbilita = '<em>Nessuna abilità</em>'
if (carta.specTipoCarta.length > 0) {
    contAbilita = '<ul>';
    for (let i = 0; i < carta.abilita.length; i++){
        const correntAbilita = carta.abilita[i];
        contAbilita += `<li><em>Descrizione:</em> ${correntAbilita.descrizione}</li>`;
        contAbilita += `<li>Costo di Lancio: ${correntAbilita.costoLancio.join(' ')}</li>`;
    }
    contAbilita += '</ul>';
}

const cartaTemplate = `
<ul class="card"> 
    <li><strong>Id: ${carta.id}</strong></li>
    <li>Nome: ${carta.nome}</li>
    <li>Costo di Lancio: ${carta.costoLancio.join(' ')}</li>
    <li>Costo mana combinato: ${carta.costoManaCombinato}</li>
    <li>Tipo carta: ${carta.specTipoCarta}</li>
    <li><strong>Espansione:</strong></li>
<ul>
        <li>Stampa Edizione: ${carta.espansione.nEdizione}</li>
        <li>Rarità:: ${carta.espansione.rarita}</li>
        <li>Collezione Numero: ${carta.espansione.collezioneNum}</li>
</ul>
    <li><strong>Colore di Testo:</strong></li>
        <li>Dichiarazioni: ${carta.testoDiColore.dichiarazioni}</li>
        <li>Autore: ${carta.testoDiColore.autore}</li>
    <li><strong>Abilita:</strong> ${contAbilita}</li>
    <li>Numero Collezione: ${carta.numeroCollezione}</li>
    <li>Costituzione: ${carta.costituzione}</li>
    <li>Forza: ${carta.forza}</li>
    <li>Colore Bordo: ${carta.coloreBordo}</li>
    <li><strong>Illustrazione:</strong></li>
    <ul>
        <li>Autore: ${carta.illustrazione.autore.nome} (id: ${carta.illustrazione.autore.id})</li>
        <li>Sorgente: ${carta.illustrazione.sorgente}</li>
        <li>Colore Sfondo: ${carta.illustrazione.coloreSfondo}</li>
    </ul>
</ul>
`;
    return cartaTemplate;
}

        //* STAMPA IN PAGINA
let mazzoTemplate = ' ';
for (let i = 0; i < mazzo.length; i++){
    const singolaCarta = mazzo[i];
    singolaCartaTemplate += creaCartaTemplate(singolaCarta);
    mazzoTemplate += singolaCarta;
}


const sezioneCarta = document.getElementById('carta');

sezioneCarta.innerHTML = mazzoTemplate;