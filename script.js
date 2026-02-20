fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
        accept: 'aplication/json' ,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRmYTg2YmFlYzE3NDU1NmJmZmZiNGY3ZDRiOGExNCIsIm5iZiI6MTc3MTU0MzI3MC40ODUsInN1YiI6IjY5OTc5YWU2NmYxOGQ4NGQ4NTczM2ZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBb0V-NNIAOeipPQCy_ildjaeKr02vdZ3ZAnGAEiIgo'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)
    })