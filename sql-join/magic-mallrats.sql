select c."firstName",
      c."lastName"
from "films" f
join "inventory" i using ("filmId")
join "rentals" r using ("inventoryId")
join "customers" c using ("customerId")
where "filmId" = 547;
