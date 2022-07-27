const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;;
const api = require('./routes/notes.js')

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/notes', api)

// const allRoutes = require("./routes")
// app.use(allRoutes);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
