import express from "express";
import myRoute from "./route.js";

const app = express();
const port = 5000;

app.get('/users/:name/:age', (req, res) => { 
  const { name, age } = req.params;
  res.send(`Hello ${name}, you are ${age} years old`);
}
);

app.use("/user", myRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
