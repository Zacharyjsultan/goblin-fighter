// import functions and grab DOM elements
const addOrcButton = document.getElementById('add-orc-button');
const OrcInputEl = document.querySelector('.orc-input');

const orcListEl = document.querySelector('.orcs-list');


// let state
  // user sees orc from on load
let orcs = [
    { name: 'Miesenplauz', hp: 3, age:.3 },
    { name: 'Kauwuhbuhngmeh..', hp: 1, age: 902 },
    { name: 'Fausto', hp:10, age:32 },
    { name: 'Pestorugalis', hp:6, age:13 },
];
   // loop for rendering of da orc men
for (let orc of orcs) {
    const orcEl = document.createElement ('div');
    // create html element for orc and set content for each orc
    orcEl.textContent = `Orc ${orc.name} - 👹 - ${orc.age} Eons Old - ${orc.hp} HP`;
   // add orcs to div element for css purposes
    orcEl.classList.add('orc');
    
    //append list of orcs to the div

    orcListEl.append(orcEl);
}
//add a new goblin to the array
addOrcButton.addEventListener('click', () => {

//get the name of the new goblin from the input
    const name = OrcInputEl.value;
//make a new goblin object
    const newOrc = {
        name: name,
        hp: 3,
        age: 1,
    };
//push this object into our goblin array state
    orcs.push(newOrc);
    OrcInputEl.value = '';

  
//as we loop, examine the HP. if the HP is 0, render a flame emojis. otherwise, render a goblin emoji.

});