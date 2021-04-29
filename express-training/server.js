const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

const PORT = 5000;

app.get('/test', (req, res) => {
  console.log(req);
  res.status(200).json({ msg: 'SUCCESS' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
