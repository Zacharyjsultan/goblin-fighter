import { renderOrcs } from './Render.JS';

// import functions and grab DOM elements
const orcTroopsEl = document.querySelector('.orc-troops');

const deadOrcsEl = document.querySelector('.dead-orcs');

const heroEmojiEl = document.querySelector('.hero-emoji');

const form = document.querySelector('form');

const heroHPEl = document.querySelector('.hero-hp');

let orcs = [
    { name: 'Miesenplauz', hp: 3 },
    { name: 'Fausto', hp: 2 },
    { name: 'Overdoneanddry', hp: 1 },
];

let heroHP = 10;
let deadOrcs = 0;

displayOrcs();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newOrcName = data.get('new-orc-name');

    const newOrc = { name: newOrcName, hp: Math.floor(Math.random() * 6) + 3 };

    orcs.push(newOrc);

    form.reset();

    displayOrcs();
});

function displayOrcs() {
    orcTroopsEl.textContent = '';

    for (let orc of orcs) {
        const orcEl = renderOrcs(orc);
        orcEl.textContent = `${orc.name} ${(orc.hp <= 0) ? '👹' : '🧌'} ${orc.hp} Health`;

        if (orc.hp > 0) {
            orcEl.addEventListener('click', () => {
                if (orc.hp > 0 && heroHP > 0) {
                    if (Math.random() > 0.3) {
                        orc.hp--;
                        alert('Ye retrieved ye lamnas and stuck orc guy!');
                    } else {
                        alert('rats ye missed the orc guy!');
                    }

                    if (Math.random() > .6) {
                        heroHP--;
                        alert('Mythril worn thin, lamnas taken, HP lost!');
                    }

                    if (heroHP <= 0) {
                        heroEmojiEl.textContent = '💀';
                        heroHPEl.textContent = heroHP;
                        alert('Your life and quest have eneded at the hands of lamnas thieving orcs. Maybe next time!');
                    }
                    if (deadOrcs === orcs.length) {
                        alert('ITS A LAMNAS PARTAY!');
                    }
                    if (orc.hp === 0) {
                        deadOrcs++;
                        deadOrcsEl.textContent = `${deadOrcs} orcs have been vanquished and will no longer touch ye lamnas`;
                    }
                    heroHPEl.textContent = heroHP;
                    displayOrcs();
                }
            });
            orcTroopsEl.append(orcEl);
        }
    }
}
displayOrcs();