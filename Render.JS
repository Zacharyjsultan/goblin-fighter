export function renderOrcs(orc) {

    const orcEl = document.createElement('div');
    const hpEl = document.createElement('p');
    const nameEl = document.createElement('p');

    orcEl.textContent = `${orc.name} ${orc.hp} Health`;
    orcEl.classList.add('the-orc');
    
    orcEl.append(nameEl, hpEl);

    return orcEl;
}