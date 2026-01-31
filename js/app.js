const movieGrid = document.getElementById("movieGrid");
const genreFilter = document.getElementById("genreFilter");
let movies = []; //To store the fetched movies


// Fetch Data from JSON file
async function loadMovies() {
  try {
    const response = await fetch("js/data/movies.json");
    movies = await response.json();

    populateGenres(movies);
    displayMovies(movies);
  } catch (error) {
    console.error("Error loading movies:", error);
    movieGrid.innerHTML =
      "<p>Error loading data. Make sure you are using Live Server.</p>";
  }
}

// Filter Movies by Genre
function populateGenres() {
  const genres = ["all", ...new Set(movies.map(movie => movie.genre))];

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
    genreFilter.appendChild(option);
  });
}

// Display Movies
function displayMovies(data) {
  movieGrid.innerHTML = "";


  if (data.length === 0) {
    movieGrid.innerHTML = "<p>No movies found.</p>";
    return;
  }


  data.forEach((movie) => {
    // Create movie-card
    const card = document.createElement("div");
    card.classList.add("movie-card");


    card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="card-content">
                <h3>${movie.title}</h3>
                <span class="badge">${movie.genre}</span>
                <p class="year">${movie.releaseYear}</p>
                <p class="desc">${movie.description}</p>
            </div>
        `;


    movieGrid.appendChild(card);
  });
}

// Event Listener for Genre Filter
genreFilter.addEventListener("change", () => {
  const selectedGenre = genreFilter.value;

  if (selectedGenre === "all") {
    displayMovies(movies);
  } else {
    const filteredMovies = movies.filter(
      movie => movie.genre === selectedGenre
    );
    displayMovies(filteredMovies);
  }
})

loadMovies();


