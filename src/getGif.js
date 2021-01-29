function getGif (weather, t0) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=00ibi7jgk4Tkog3u9VTqyvTJQYt3Zfa0&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
        if(!response.ok) {
            throw "Gif error!";
        }
        return response.json();
    })
    .then(function(response) {
        let img = document.querySelector("#gif");
        let displayT = document.querySelector("#gif-time");
        let t1, t;

        img.src = response.data.images.original.url;
        t1 = performance.now();
        t = t1 - t0;
        displayT.innerText = `Time it took to get gif: ${t / 1000}s`;
    })
    .catch((err) => {
        console.error(err);
        alert("Gif error occurred.");
    });
}

export { getGif }