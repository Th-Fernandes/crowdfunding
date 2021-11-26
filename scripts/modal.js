const modal = {
  //altera o estado da modal de compra entre ativado e não ativado
  toggle() {
      const buyButton = document.querySelector('.cyanButton')
      const closeModalButton = document.querySelector('#closeModal')

      buyButton.addEventListener('click', () => {
          const buyModal = document.querySelector('.modal-overlay').classList.toggle('active')
      })

      closeModalButton.addEventListener('click', () => {
          const buyModal = document.querySelector('.modal-overlay').classList.toggle('active')
      })
  },
  // mostra as opções de pagamento ao selecionar um pacote pra comprar
  showPrice() {
    const button = document.querySelector('#bamboo-option')
    button.addEventListener('click', () => {
      const moreOptions = document.querySelector('.pledge')
      moreOptions.style.display = "none"

      if(moreOptions.style.display == "none") {
        moreOptions.style.display = "flex"
      } 
    })
  },
  //verifica se o valor selecionado é suficiente para comprar o pacote
  priceValidation() {
    const finishBuy = document.querySelector('#finishedBuy')
    finishBuy.addEventListener('click', (event) => {
      event.preventDefault()

      const selectPrice = document.querySelector('#price').value;

      if(selectPrice < 25) {
        alert("you selected a value below the selected pack. try again.");
    } else {
        document.querySelector('.modal-overlay').classList.toggle('active')

        const thanksModal = document.querySelector('#finishedBuy-modal')
        thanksModal.classList.add('active')

        thanksModal.addEventListener('click', (event) => event.target.parentElement.parentElement.classList.remove('active'))
    }
    })
  }
}



export { modal }