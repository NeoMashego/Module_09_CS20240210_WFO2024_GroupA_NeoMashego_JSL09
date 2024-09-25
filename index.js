fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=balloon")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })