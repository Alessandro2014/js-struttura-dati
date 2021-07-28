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
    id: 2,
    nome: 'Krosan Cloudscraper',
    costoLancio: ['8', 'R', 'R', 'T'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Giant',
    espansione: {       // innesto oggetto per espansioni
        nEdizione: 9,
        rarita: 'no-raro',
        collezioneNum: 12,
        },
    testoDiColore: {        // innesto oggetto per infotesto
        dichiarazioni: 'Anaba Shaman...',
        autore:'Magog',
    },
    abilita: [          // innesto array abilità
        {
        costoLancio: ['R', 'T'],
        descrizione: 'forte',  
        },
        {
        costoLancio: ['W', 'B', 'T'],
        descrizione: 'medio',    
        },
    ],
    numeroCollezione: '177/350',
    costituzione: 2,
    forza: 2,
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
    id: 3,
    nome: 'Anaba Shaman',
    costoLancio: ['6', 'R', 'R'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Simple',
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
    forza: 9,
    coloreBordo: 'black',
    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'black',
},
{
    id: 4,
    nome: 'Grizzly Bears',
    costoLancio: ['3', 'T', 'T', 'T'],
    costoManaCombinato: 8,
    tipoCarta: 'Creatura',
    specTipoCarta: 'Animal',
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
    forza: 13,
    coloreBordo: 'black',
    illustrazione: {    // innesto oggetto per autore
        autore: {
            id: 1,
            nome: 'Ron Spears',
        },
        sorgente: '/img.jpg',
    },
    coloreSfondo:'green',
},
{
    id: 5,
    nome: 'Dancing Scimitar',
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
    forza: 7,
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
    id: 6,
    nome: 'Krosan Cloudseparer',
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
    // const cartaTemplate = creaCartaTemplate(mazzo[0]);

function creaCartaTemplate(carta) {
        const specTipoCarta = carta.specTipoCarta ? ` ${carta.specTipoCarta}` :' ';

    let contAbilita = '<em>Nessuna abilità</em>'
    console.log(carta);
    if (carta.abilita.length > 0) {
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
 const sezioneCarta = document.getElementById('carta');

const stampaMazzo = (mazzo, elemento) => {

    let mazzoTemplate = ' ';
    for (let i = 0; i < mazzo.length; i++){
        const singolaCarta = mazzo[i];
        mazzoTemplate += creaCartaTemplate(singolaCarta);
    }
    sezioneCarta.innerHTML = mazzoTemplate;
}

stampaMazzo(mazzo, sezioneCarta);

//? FILTRI

const campoInput = document.getElementById('ricerca');
const campoSelect = document.getElementById('filtri');
const bottone = document.getElementById('bottone');

    //RIMOZIONE O AGGIUNTA CLASSE HIDDEN 
campoSelect.addEventListener('change', () => {
    const valueCorrente = campoSelect.value;
    
    if (valueCorrente !== 'tutte') {
        campoInput.classList.remove('hidden');
    }   else {
        campoInput.classList.add('hidden');
    }
});

    //FILTRO
    bottone.addEventListener('click', () => {
    const inputValue = campoInput.value;
    const selectValue = campoSelect.value;

    if (selectValue == 'tutte') {
        stampaMazzo(mazzo, sezioneCarta);
        return;
    }   

    const mazzoFiltrato = [];
    for(let i = 0; i < mazzo.length; i++){
        const cardCorrente = mazzo[i];
        if (cardCorrente[selectValue].includes(inputValue.trim())){
            mazzoFiltrato.push(cardCorrente);
        }
    }

    stampaMazzo(mazzoFiltrato, sezioneCarta);

});