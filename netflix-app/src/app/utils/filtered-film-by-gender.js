export function filterFilmByGender(allFilmsRetrieved, gender) {
  let filteredFilms = [];
  allFilmsRetrieved.map((film) => {
    const indexOf = film.gender.indexOf(gender);
    if (indexOf !== -1) filteredFilms.push(film);
  });

  return filteredFilms;
}
