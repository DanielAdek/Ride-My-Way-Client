import path from 'path';
import express from 'express';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', '/static/index.html'));
});
const server = app.listen(port, () => {
  console.log(`'Listening on port '${server.address().port}`);
});
