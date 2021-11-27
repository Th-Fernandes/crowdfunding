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
    const pledgeOptions = document.querySelectorAll('.pledge-option')
  

    for(let radio of pledgeOptions) {
      radio.addEventListener('click', (event) => {
        const buyOptions = event.target.parentElement.parentElement.children[1].children[3]
        
        if(event.target.checked) {
          buyOptions.classList.add('active')
          console.log('aa2')
        } else {
          buyOptions.classList.remove('active')
          console.log('aa')
        }
      })
    }
    

  },
  //verifica se o valor selecionado é suficiente para comprar o pacote
  priceValidation() {
    function validateBuy(button, minPrice) {
      button.addEventListener('click', (event) => {
        event.preventDefault()
        //acessa o input com o valor a ser pago
        const selectPrice = event.target.parentElement.children[0].children[1].value
        console.log(selectPrice)
  
        if(selectPrice < minPrice) {
          alert("you selected a value below the selected pack. try again.");
      } else {
          document.querySelector('.modal-overlay').classList.toggle('active')
  
          const thanksModal = document.querySelector('#finishedBuy-modal')
          thanksModal.classList.add('active')
  
          thanksModal.addEventListener('click', (event) => event.target.parentElement.parentElement.classList.remove('active'))
      }
      })
    }

    const finishBuy = document.querySelectorAll('#finishedBuy.cyanButton')

    validateBuy(finishBuy[0], 1)
    validateBuy(finishBuy[1], 25)
    validateBuy(finishBuy[2], 75)
  }
}



export { modal }