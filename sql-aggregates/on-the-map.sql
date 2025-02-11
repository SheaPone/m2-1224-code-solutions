select c."name" as "Country",
        count(*) as "totalCities"
from    "countries" as "c"
join    "cities" as "ci" using ("countryId")
group by c."countryId";
