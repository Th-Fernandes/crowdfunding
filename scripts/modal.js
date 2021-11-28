const modal = {
  //altera o estado da modal de compra entre ativado e não ativado
  toggle() {
      const buyButton = document.querySelectorAll('.cyanButton')
      const closeModalButton = document.querySelector('#closeModal')

      for(let functionality of buyButton) {
        functionality.addEventListener('click', () => {
          const buyModal = document.querySelector('.modal-overlay').classList.toggle('active')
      })
  
      closeModalButton.addEventListener('click', () => {
          const buyModal = document.querySelector('.modal-overlay').classList.toggle('active')
      })
      }
  },
  // mostra as opções de pagamento ao selecionar um pacote pra comprar
  showPrice() {
    const pledgeOptions = document.querySelectorAll('.pledge-option')
  

    for(let radio of pledgeOptions) {
      radio.addEventListener('click', (event) => {
        const buyOptions = event.target.parentElement.parentElement.children[1].children[3]

        function hideWrongBuyOption(elementOption) {
          elementOption = document.querySelector(`${elementOption}`)

          if( elementOption.checked != true ) {
            const buyOptions = elementOption.parentElement.parentElement.children[1].children[3]
            buyOptions.classList.remove('active')
          }
        }
        
        if(event.target.checked) {
          buyOptions.classList.add('active')
        }

        hideWrongBuyOption('#noReward-option')
        hideWrongBuyOption('#bamboo-option')
        hideWrongBuyOption('#black-option')
      })
    }
    

  },
  //verifica se o valor selecionado é suficiente para comprar o pacote
  priceValidation() {
    function validateBuy(button, minPrice) {
      //previne a atualização da página ao clicar no botão de fechar o modal
      const closeModal = document.querySelector("#closeModal").addEventListener('click',(event) => event.preventDefault())

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