import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

import historyRouter from './routes/history';
app.use('/history', historyRouter);

const server = app.listen(8000, () =>
  console.log("listening to port 8000")
)
