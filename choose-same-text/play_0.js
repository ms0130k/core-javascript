'use strict';

const DOM = document;
const area = DOM.querySelector('.area');
const lists = area.querySelectorAll('.list');

const handleArea = (e) => {
    console.log(e.target);
    const li = e.target.closest('li');
    if (li) {
        const lis = Array.from(area.querySelectorAll('li'));
        lis.filter(el => el !== li).forEach(el => el.classList.remove('active'));
        lis.filter(el => el.textContent === li.textContent).forEach(el => el.classList.add('active'));
    }
};
area.addEventListener('click', handleArea);
area.querySelectorAll('li')[2].click();