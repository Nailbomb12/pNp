window.onload = function (e) {
  const player = document.getElementById("player")
  const main = document.querySelector(".main")

  const coef = 10
  const speed = 0.05

  let positionX = 0
  let coordXprocent = 0

  function setMouseStyle() {
    const distX = coordXprocent - positionX

    positionX = positionX + distX * speed
    player.style.cssText = `transform: translate(${positionX / coef}%, 0%)`
    requestAnimationFrame(setMouseStyle)
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    setMouseStyle()
  }

  main.addEventListener("mousemove", e => {
    const parWidth = main.offsetWidth
    const coordX = e.pageX - parWidth / 2
    coordXprocent = (coordX / parWidth) * 100
  })
}

const popup = document.getElementById("popup")
const popupBtn = document.getElementById("reg")
const popupClose = document.getElementById("close_popup")

document.addEventListener("click", e => {
  if (e.target == popupBtn || e.target == popupClose) {
    popup.classList.toggle("popup--active")
  }
})
