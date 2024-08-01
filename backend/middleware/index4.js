import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

function bandNameGenerator (req, res, next) {
  const { street, pet } = req.body;
  bandName = street + pet;
  next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post('/submit', (req, res) => {
  // const {street, pet} = req.body;
  // const bandName = street + pet;
  res.send(`<h1>Your band name is:</h1><h3>${bandName}</h3>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
