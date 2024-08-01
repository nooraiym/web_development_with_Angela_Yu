import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express(),
    port = 3000;

app.get('/', (req, res) => {
  const date = new Date("June 24, 2023 11:11:00");
  const day = date.getDay()
  let type = "a weekday", 
      adv = "work hard";

  if(day === 0 || day === 6) {
    type = "the weekend";
    adv = "have some fun";
  }
  res.render('index.ejs', {
    dayType: type,
    advice: adv
  })
  
})

app.listen(port, () => {
  console.log(`Listening the port ${port}`);
})