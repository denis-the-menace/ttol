import express from 'express';

const app = express()

// app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

import historyRouter from './routes/History';
app.use('/history', historyRouter);

const server = app.listen(8000, () =>
  console.log("listening to port 8000")
)
