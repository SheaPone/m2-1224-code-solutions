import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades";
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const sql = `
select * from "grades"
where    "gradeId" = $1;
`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'Name, course, and score are required');
    }
    if (!Number.isInteger(+score) || score < 0 || score > 100) {
      throw new ClientError(
        400,
        'score must be a valid integer between 0 and 100'
      );
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (!name || !course || !score) {
      throw new ClientError(400, 'Name, course, and score are required');
    }
    if (!Number.isInteger(+score) || score < 0 || score > 100) {
      throw new ClientError(
        400,
        'score must be a valid integer between 0 and 100'
      );
    }
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be a valid integer');
    }
    const sql = `
      update "grades"
      set     "name" = $1,
              "course"  = $2,
              "score" = $3
      where "gradeId" = $4
      returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!gradeId) {
      throw new ClientError(400, 'gradeId is required');
    }
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
