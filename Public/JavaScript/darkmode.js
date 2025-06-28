let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.querySelector('.theme-switch')

const enableLightmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
  console.log("cliked")
  lightmode = localStorage.getItem('lightmode')
  lightmode !== "active" ? enableLightmode() : disableLightmode()
})