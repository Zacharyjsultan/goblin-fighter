// import functions and grab DOM elements

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
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
