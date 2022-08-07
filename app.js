// import functions and grab DOM elements
const addOrcButton = document.getElementById('add-orc-button');
const OrcInputEl = document.querySelector('.orc-input');

const killedOrcs = document.querySelector('dead-orcs');

const heroHp = document.querySelector('hero-hp');
const heroEmoji = document.querySelector('hero-emoji');

const orcListEl = document.querySelector('.orcs-list');

let heroHp = 10;
let killedOrcs = 0;

let orcs = [
    { name: 'Miesenplauz', hp: 3, age:.3 },
    { name: 'Kauwuhbuhngmeh..', hp: 1, age: 902 },
    { name: 'Fausto', hp:10, age:32 },
    { name: 'Pestorugalis', hp:6, age:13 },
];
  


addOrcButton.addEventListener('click', () => {
    const name = OrcInputEl.value;

    const newOrc = {
        name: OrcInputEl.value,
        hp: 3,
        age: 1,
    };
    orcs.push(newOrc);

    displayOrcs();
});

function displayOrcs() {
  orcListEl.textContent = '';

  for (let orc of orcs) {
    const orcEl = document.createElement ('div');
    
    orcEl.textContent = `Orc ${orc.name} - 👹 - ${orc.age} Eons Old - ${orc.hp} HP`;
  
    orcEl.classList.add('orc');
    orcListEl.append(orcEl);
}

}
