function getGif (weather) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=00ibi7jgk4Tkog3u9VTqyvTJQYt3Zfa0&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
        console.log(response);
        if(!response.ok) {
            throw "Gif error!";
        }
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        let img = document.querySelector("#gif");
        img.src = response.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
        alert("Gif error occurred.");
    });
}

export { getGif }