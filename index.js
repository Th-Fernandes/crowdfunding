// FUNCIONALIDADE DE ABRIR E FECHAR O MODAL
const modalOpen = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },

    close() {
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const payYourPrice = {
    open(){
        document.querySelector('.pledge').style.display = "flex";
    },

    close(){
        document.querySelector('.pledge').style.display = "none";
    },
}

    