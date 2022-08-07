// import functions and grab DOM elements

const OrcInputEl = document.querySelector('.orc-input');
const killedOrcsEl = document.querySelector('dead-orcs');
const heroHpEl = document.querySelector('.hero-hp');
const heroEmoji = document.querySelector('.hero-emoji');
const orcListEl = document.querySelector('.orcs-list');
const form = document.querySelector('form');
//
let heroHp = 10;
let killedOrcs = 0;
let orcs = [
    { name: 'Miesenplauz', hp: 3, age:.3 },
    { name: 'Kauwuhbuhngmeh..', hp: 1, age: 902 },
    { name: 'Fausto', hp:10, age:32 },
    { name: 'Pestorugalis', hp:6, age:13 },
];

//
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData (form);
    
    const orcName = data.get('orc-input');

    const newOrc = {
        name: OrcInputEl.value,
        hp: 3,
        age: 1,
    };
    orcs.push(newOrc);

    displayOrcs();
});
//
function displayOrcs() {
    orcListEl.textContent = '';

    for (let orc of orcs) {
        const OrcEl = renderOrc(orc);
    }

}
