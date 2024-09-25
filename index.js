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
        document.getElementById("crypto-info").innerHTML += `
        <p>🎯:R${data.market_data.current_price.zar}</p>
        <p>☝🏽:R${data.market_data.high_24h.zar}</p>
        <p>👇🏽:R${data.market_data.low_24h.zar}</p>`
    })