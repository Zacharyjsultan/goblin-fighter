// import functions and grab DOM elements

const orcListEl = document.querySelector('.orcs-list');

console.log(orcListEl);

// let state
  // user sees orc from on load
let orcs = [
    { name: 'Miesenplauz', hp: 3, age:.3 },
    { name: 'Fausto', hp: 1, age: 902 },
    { name: 'Kauwuhbuhngah', hp:10, age:32 },
];

for (let orc of orcs) {
    const orcEl = document.createElement ('div');
    // create dom element for orc and set content
    orcEl.textContent = `${orc.name} 👹 (${orc.age} Eons)(${orc.hp} HP)`;
   // add orcs to div element
    orcEl.classList.add('orc');
    
    console.log(orcEl);
    //append list of orcs to the div

    orcListEl.append(orcEl);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
