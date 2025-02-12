import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome Home!');
});

app.get('/notes', (req, res) => {
  res.send('Welcome to the notes');
});

app.post('/notes/:noteId', (req, res) => {
  res.send(`Here is book id ${req.params.noteId}!`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
