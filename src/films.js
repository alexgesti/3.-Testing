// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((film) => film.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let dresult = array.filter((film) => film.director === director);
  console.log('EXERCICE 2 ->', dresult);
  return dresult;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let films = getMoviesFromDirector(array, director);
  if (films.lenght === 0) return 0;

  let totalScore = films.reduce((acc, film) => acc + film.score, 0);
  let average = totalScore / films.length;
  console.log('EXERCICE 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let sortedTitles = array
    .map((film) => film.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  console.log('EXERCICE 4 ->', sortedTitles);
  return sortedTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedYear = array.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  console.log('EXERCICE 5 ->', sortedYear);
  return sortedYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let categoryFilms = array.filter(
    (film) => film.genre.includes(genre) && typeof film.score === 'number'
  );
  if (categoryFilms.length === 0) return 0;

  let totalScore = categoryFilms.reduce((acc, film) => acc + film.score, 0);
  let average = totalScore / categoryFilms.length;
  console.log('EXERCICE 6 ->', genre + ': ' + average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array, duration) {
  let updatedFilms = array.map((film) => {
    let durationInMinutes = film.duration;
    if (typeof durationInMinutes === 'string') {
      let parts = durationInMinutes.split(' ');
      let hours = parseInt(parts[0]) || 0;
      let minutes = parseInt(parts[1]) || 0;
      durationInMinutes = hours * 60 + minutes + ' min';
    }
    return { ...film, duration: durationInMinutes };
  });
  console.log('EXERCICE 7 ->', updatedFilms);
  return updatedFilms;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter((film) => film.year === year);
  if (filmsOfYear.length === 0) return null;

  let bestFilm = filmsOfYear.reduce((acc, film) => {
    return film.score > acc.score ? film : acc;
  });
  console.log('EXERCICE 8 ->', bestFilm);
  return [bestFilm];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
