// FUNCIONALIDADE DE ABRIR E FECHAR O MODAL
const modalOpen = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },

    close() {
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}
// FUNCIONALIDADE DE ABRIR E FECHAR O PAGAMENTO
const payYourPrice = {
    open(){
        document.querySelector('.pledge').style.display = "flex";
    },

    close(){
        document.querySelector('.pledge').style.display = "none";
    },
}
// FUNCIONALIDADE PARA VERIFICAR O VALOR MÍNIMO A SER PAGO
function verifyAmount() {
    const selectPrice = document.querySelector('#price').value;

    if(selectPrice < 25) {
        alert("you selected a value below the selected pack. try again.");
        return false; // pra cancelar o envio do formulário
    } else {
        true ;
        
        if(selectPrice >= 25) {
            document.querySelector('#finishedBuy-modal').classList.add('active');
        } //ESSA É A FUNCTION CONCLUDED

        return selectPrice ;
        
    }
}
// FUNCIONALIDADE PARA ABRIR O MODAL DE AGRADECIMENTO, CASO O PREÇO MÍNIMO SEJA CUMPRIDO
function concluded(selectPrice){
    if(selectPrice >= 25) {
        let searchModal = document.querySelector('#finishedBuy-modal').classList.add('active');
    }
}
// FUNCIONALIDADE
function conclusion() {
    document.querySelector('#finishedBuy-modal').classList.remove('active');
}
