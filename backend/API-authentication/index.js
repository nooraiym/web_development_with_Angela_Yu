import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "angela";
const yourPassword = "dogdog";
const yourAPIKey = "9ce7e962-36d2-4dee-9820-6fe581262b58";
const yourBearerToken = "968d30c9-d34b-4da5-ac93-fe70745fd222";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}/random`)
    console.log(response.data);
    const data = JSON.stringify(response.data);
    res.render("index.ejs", { content: data });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
          username: yourUsername,
          password: yourPassword,
      }, });
    const data = JSON.stringify(response.data)
    res.render("index.ejs", { content: data })
  } catch (error) {
    res.status(404).send(error.message)
  }
});


app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`${API_URL}/filter?score=5&apiKey=${yourAPIKey}`)
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  } catch (error) {
    res.status(404).send(error.message)
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {headers: { Authorization: `Bearer ${yourBearerToken}` }} );
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  } catch (error) {
    res.status(404).send(error.message)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
