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
        return true;
    }
}
    