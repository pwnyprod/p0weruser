import Utils from '../Utils';

export default class BenisInNavbar {
    constructor() {
        this.name = 'Benis in Navigation';
        this.description = 'Zeigt deinen aktuellen Benis in der Headerleiste an';
    }


    load() {
        this.benis = '-';
        this.styles = require('../style/benisInNavbar.less');
        this.target = document.getElementById('user-profile-name');
        this.addListener();

        this.addBenis();
    }

    addBenis() {
        this.target.innerText = this.benis;
    }

    addListener() {
        window.addEventListener('userSync', (e) => {
            this.benis = e.data.score;

            this.addBenis();
        });
    }
}
