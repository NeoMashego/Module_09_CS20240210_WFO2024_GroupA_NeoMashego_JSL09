fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=balloon")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        document.getElementById("crypto").innerHTML = `
        <img src=${data.image.small}>
        <span>${data.name}</span>`
    })