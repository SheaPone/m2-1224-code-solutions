select a."line1",
      c."name" as "city",
      a."district",
      co."name" as "country"
from "addresses" a
join "cities" c using ("cityId")
join "countries" co using ("countryId");
