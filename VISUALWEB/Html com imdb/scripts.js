document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("movieSearch").value;
    fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=SEU_API_KEY`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const movieInfo = document.getElementById("movieInfo");
                movieInfo.innerHTML = `<h2>${data.Title}</h2><p>Nota no IMDb: ${data.imdbRating}</p>`;
            } else {
                const movieInfo = document.getElementById("movieInfo");
                movieInfo.innerHTML = `<p>Filme não encontrado</p>`;
            }
        })
        .catch(error => {
            console.log("Erro na requisição:", error);
        });
});
