import express from 'express';
import pg from 'pg';
import { errorMiddleware, ClientError } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
select c."name" as "Country",
      c."countryId",
        count(*) as "totalCities"
from    "countries" as "c"
join    "cities" as "ci" using ("countryId")
group by c."countryId", c."name";
`;
    const result = await db.query(sql);
    const countries = result.rows;
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (!Number.isInteger(+cityId)) {
      throw new ClientError(400, 'cityId must be a valid integer');
    }
    const sql = `
select c."name" as "City",
      c."cityId",
      co."name" as "Country"
from    "cities" as "c"
join    "countries" as "co" using ("countryId")
where    "cityId" = $1;
`;
    const params = [cityId];
    const result = await db.query(sql, params);
    const cities = result.rows[0];
    if (!cities) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json(cities);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
