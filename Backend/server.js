import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is Ready");
// });

//get a list of 5 Jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: 'chicken', content: "Why did the chicken cross the road?" },
    { id: 2, title: 'tomato', content: "Why did the tomato turn red?" },
    { id: 3, title: 'cow', content: "Why did the cow cross the road?" },
    { id: 4, title: 'duck', content: "Why did the duck cross the road?" },
    { id: 5, title: 'dog', content: "Why did the dog cross the road?" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
