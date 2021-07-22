const carta = {     //dichiarazione primo oggetto
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

console.log(carta);

            //* STAMPA IN PAGINA
const sezioneCarta = document.getElementById('carta');

const specTipoCarta = carta.specTipoCarta ? ` ${carta.specTipoCarta}` :' ';

let contAbilita = '<em>Nessuna abilità</em>'
if (carta.specTipoCarta.length > 0) {
    contAbilita = '<ul>';
    for (let i = 0; i < carta.abilita.length; i++){
        const correntAbilita = carta.abilita[i];
        contAbilita += `<li>Descrizione: ${correntAbilita.descrizione}</li>`;
        contAbilita += `<li>Costo di Lancio: ${correntAbilita.costoLancio.join(' ')}</li>`;
    }
    contAbilita = '</ul>';
}

let cartaTemplate = `
<ul class="card"> 
    <li>Id: ${carta.id}</li>
    <li>Nome: ${carta.nome}</li>
    <li>Costo di Lancio: ${carta.costoLancio.join(' ')}</li>
    <li>Costo mana combinato: ${carta.costoManaCombinato}</li>
    <li>Tipo carta: ${carta.specTipoCarta}</li>
    <li>Espansione:</li>
</ul>
    <ul> 
        <li>Id: ${carta.id}</li>
        <li>Id: ${carta.nome}</li>
        <li>Id: ${carta.costoLancio.join(' ')}</li>
        <li>Id: ${carta.costoManaCombinato}</li>
        <li>Id: ${carta.specTipoCarta}</li>
    </ul>
`
sezioneCarta.innerHTML = cartaTemplate;