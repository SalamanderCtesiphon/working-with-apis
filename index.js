// giphy gif api
// api.giphy.com/v1/gifs/translate



const selectionBtn = document.getElementById('selection-btn')

selectionBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const selection = document.getElementById('selection').value

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FKHrnl8qaMWyeJf85XwRk8AKF6GmD3Zr&s=${selection}`, {
  mode: 'cors'
})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(function(err) {
    console.log(err)
  })
})

const img = document.querySelector("img")

fetch('https://api.giphy.com/v1/gifs/translate?api_key=FKHrnl8qaMWyeJf85XwRk8AKF6GmD3Zr&s=cats', {
  mode: 'cors'
})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(function(err) {
    console.log(err)
  })

const btn = document.getElementById('refresh')

btn.addEventListener('click', () => {
  location.reload()
})