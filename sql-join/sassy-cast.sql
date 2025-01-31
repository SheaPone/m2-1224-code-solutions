select a."firstName",
      a."lastName"
from "films" f
join "castMembers" cm using ("filmId")
join "actors" a using ("actorId")
where "filmId" = 485;
