fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    // method: 'GET',
    headers: {
        accept: 'application/json' ,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRmYTg2YmFlYzE3NDU1NmJmZmZiNGY3ZDRiOGExNCIsIm5iZiI6MTc3MTU0MzI3MC40ODUsInN1YiI6IjY5OTc5YWU2NmYxOGQ4NGQ4NTczM2ZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBb0V-NNIAOeipPQCy_ildjaeKr02vdZ3ZAnGAEiIgo'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)

        const container = document.getElementById("featuredMovies")
        //container.innerHTML =''

        function formateDate(dateString) {
            const [year,month,day] = dateString.split(`-`);
            return `${day}/${month}/${year}`
        }

        const cardMovies = data.results.map(function (i) {
        const card = `
            <div class="col-6 col-sm-4 col-md-3 mb-4">
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face${i.poster_path}" 
                         class="card-img-top" alt="${i.title}">
                    <div class="card-body movie-info">
                        <h5 class="movie-title" style="font-size: 1rem;">${i.title}</h5>
                        <p class="move-date">${formateDate(i.release_date)}</p>
                    </div>
                </div>
            </div>`;
             console.log(card)

            container.innerHTML += card;
    });
    })

    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
    // method: 'GET',
    headers: {
        accept: 'application/json' ,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRmYTg2YmFlYzE3NDU1NmJmZmZiNGY3ZDRiOGExNCIsIm5iZiI6MTc3MTU0MzI3MC40ODUsInN1YiI6IjY5OTc5YWU2NmYxOGQ4NGQ4NTczM2ZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EBb0V-NNIAOeipPQCy_ildjaeKr02vdZ3ZAnGAEiIgo'
    }
})

 .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results)

        const container = document.getElementById("seriesfeatured")
        //container.innerHTML =''

        function formateDate(dateString) {
            const [year,month,day] = dateString.split(`-`);
            return `${day}/${month}/${year}`
        }

        const cardMovies = data.results.map(function (i) {
        const card = `
            <div class="col-6 col-sm-4 col-md-3 mb-4">
                <div class="movie-card">
                    <img src="https://media.themoviedb.org/t/p/w440_and_h660_face${i.poster_path}" 
                         class="card-img-top" alt="${i.name}">
                    <div class="card-body movie-info">
                        <h5 class="movie-title" style="font-size: 1rem;">${i.name}</h5>
                        <p class="move-date">${formateDate(i.first_air_date)}</p>
                    </div>
                </div>
            </div>`;
             console.log(card)

            container.innerHTML += card;
    });
    })



    

    

 