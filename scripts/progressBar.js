const progress = {
  barAnimation() {
    const progressBar = document.querySelector('.concluded')

    let variable = 0

    const barAnimation =
    
    setInterval(() => {
      progressBar.style.width = `${variable+= 0.25}%`

      if (variable >= 80) {
        clearInterval(barAnimation)
      }
    }, 5)
  },

  infoAnimation() {
    const infoContainer = document.querySelector('.data')

    const money = 89914
    let variable = 86000

    setInterval(() => {
      if(variable < money) {
        const printInfo = infoContainer.children[0]
        printInfo.textContent = `$ ${variable}`
        variable+= 25
      }
    }, 3000)
  }
}

export { progress }