import dotenv from "dotenv";
import express from "express";
const app = express();
dotenv.config(); //loads environment variables from .env file into process.env
const port = process.env.PORT || 4000;
console.log("PORT from env:", process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello Gaurav");
});
app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      title: "Atomic Joke"
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      title: "Scarecrow Award"
    },
    { id: 3,
      joke: "What do you call fake spaghetti? An impasta!" ,
      title: "Fake Pasta"}
  ];
  res.send(jokes);

});
app.listen(port, () => {
  console.log(`Active at port : ${port}`);
});
