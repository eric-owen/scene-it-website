document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        let movieHTML = movieArray.map(function (currentMovie) {

            return `
            <div class="movie">
                    <div class="movie-div">
						<img src="${currentMovie.Poster}" alt="" width="200px" height="300px">
						<p>
							<span>${currentMovie.Title}</span>
							<span>${currentMovie.Year}</span>
                        </p>
                        <button onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</button>
                        
                    </div>
			</div>
            
            `
        })

        return movieHTML.join('')
    }
    // http://www.omdbapi.com/?i=tt3896198&apikey=cffaa38a

    document.getElementById('search-form').addEventListener('submit', e => {
        e.preventDefault()
        const moviesContainer = document.querySelector('.movies-container')
        const searchText = e.target[0].value
        let urlString = encodeURIComponent(searchText)
        console.log(urlString)



        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=cffaa38a&s=' + urlString)
            .then(resp => {
                console.log(resp.data)
                let movieHTML = renderMovies(resp.data.Search);
                moviesContainer.innerHTML = movieHTML

            })

    })

})

function saveToWatchlist(imdbID) {

    let movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID;
    })

    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    if (watchlist === null) {
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)


}