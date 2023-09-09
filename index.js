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


// USing the fetch API

async function logMovies() { 
  const response = await fetch("http://example.com/movies.json")
  const movies = await response.json()
  console.log(movies)
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
