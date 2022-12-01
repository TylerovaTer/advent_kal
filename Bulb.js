import { Text } from './Text.js'

export const Bulb = (cislo, text) => {

    const vnitrekKolecka = cislo

    const nowDay = new Date();
    const today = nowDay.getDate();

    const elmBulb = document.createElement("prdel");
    elmBulb.classList.add("bulb");
    if (vnitrekKolecka < today) {
        elmBulb.classList.add('opened')
    } else { }

    const elmCislo = document.createElement('darek')
    elmCislo.classList.add('kolecko');
    elmCislo.innerHTML = vnitrekKolecka;
    elmBulb.append(elmCislo);

    elmBulb.addEventListener('click', () => {
        elmBulb.replaceWith(Text(text));
    });

    return elmBulb;
};

