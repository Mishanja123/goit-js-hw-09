function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')

stopBtn.disabled = true
startBtn.addEventListener('click', colorSwift)
stopBtn.addEventListener('click', swiftStop)

function colorSwift() {
  colorInterval = setInterval(getColor, 1000)
  startBtn.disabled = true
  stopBtn.disabled = false
}
function getColor() {
  document.body.style.background = getRandomHexColor()
  color.textContent = document.body.style.background
}
function swiftStop() {
  clearInterval(colorInterval);
  startBtn.disabled = false
  stopBtn.disabled = true
 }

