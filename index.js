const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const PUBLIC_DIR = path.resolve(__dirname, 'client', 'dist');

console.log(PUBLIC_DIR);

app.use(express.static(PUBLIC_DIR));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
