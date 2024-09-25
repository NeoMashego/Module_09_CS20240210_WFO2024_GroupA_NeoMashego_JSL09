fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=buildings")
    .then(res => res.json())
    .then(data => {
        //console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `
        url(https://images.unsplash.com/photo-1490122417551-6ee9691429d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjcyODIwNzZ8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById("author").textContent = `By: Nichlas Andersen`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if(!res.ok){
            throw Error("Find error!")
        }
        return res.json()})
    .then(data => {
        document.getElementById("crypto").innerHTML = `
        <img src=${data.image.small}>
        <span>${data.name}</span>`
        document.getElementById("crypto-info").innerHTML += `
        <p>🎯:R${data.market_data.current_price.zar}</p>
        <p>☝🏽:R${data.market_data.high_24h.zar}</p>
        <p>👇🏽:R${data.market_data.low_24h.zar}</p>`
    })
    .catch(err => console.error(err))

function currentTime() {
    const time = new Date()
    const displayT = time.toLocaleTimeString('en-Za', {timeStyle: "short"})
    document.getElementById("time").textContent = displayT
}

setInterval(currentTime, 1000)