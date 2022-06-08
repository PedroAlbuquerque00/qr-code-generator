const container = document.querySelector('.container')
const input = document.querySelector('.form input')
const button = document.querySelector('.form button')
const img = document.querySelector('.qr-code img')
const downloadQR = document.querySelector('.download')
let emptyValue = ''
let inputValue = ''

button.addEventListener('click', () => {
  inputValue = input.value.trim()
  if (emptyValue === inputValue) return
  container.classList.add('active')
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

  img.addEventListener('load', () => {
    button.innerHTML = 'Gerando QR Code'
  })
})

input.addEventListener('keyup', () => {
  container.classList.remove('active')
  button.innerHTML = 'Gerar QR Code'
  emptyValue = ''
})

$('.download').on("click", function () {
  var qrCodeBaseUri = 'https://api.qrserver.com/v1/create-qr-code/?',
    params = {
      size: '150x150',
      data: `${inputValue}`,
      margin: 0,
      download: 1
    }
  window.location.href = qrCodeBaseUri + $.param(params)
})
