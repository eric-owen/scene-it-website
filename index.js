document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        const movieHTML = movieArray.map(function (currentMovie) {

            return `
            <div class="movie">
                    <div class="test">
						<img src="${currentMovie.Poster}" alt="" width="200px" height="300px">
						<p>
							<span>${currentMovie.Title}</span>
							<span>${currentMovie.Year}</span>
						</p>
                        <button>Add</button>
                    </div>
			</div>
            
            `
        })

        return movieHTML.join('')
    }


    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault()
        document.querySelector('.movies-container').innerHTML = renderMovies(movieData)
    })


})