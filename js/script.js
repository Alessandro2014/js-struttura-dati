const carta = {     //dichiarazione primo oggetto
    id = 1,
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
};