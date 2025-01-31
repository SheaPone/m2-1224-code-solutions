select f."releaseYear",
        f."title",
      g."name" as "genre"
from "films" f
join "filmGenre" fg using ("filmId")
join "genres" g using ("genreId")
where "filmId" = 86;
