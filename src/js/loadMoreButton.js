export default class LoadMoreButton {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);
        hidden && this.hide();
    };

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spinner = refs.button.querySelector('.spiner');

        return refs;
    };

    enable() {
        this.refs.button.disable = false;
        this.refs.label.textContent = 'Load more';
        this.refs.spinner.classList.add('visually-hidden');
        console.log(this.refs.label.textContent);
    };

    disable() {

        this.refs.button.disable = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.spinner.classList.remove('visually-hidden');
        console.log(this.refs.label.textContent);
        
    };

    show() {
         this.refs.button.classList.remove('visually-hidden')
    };

    hide() {
        this.refs.button.classList.add('visually-hidden')
    };
};