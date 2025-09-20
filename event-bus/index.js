import axios from "axios";
import e from "express";

const app = e();
app.use(e.json());

app.post("/events", (req, res) => {
  const body = req.body;

  axios.post("http://localhost:4000/events", body); // Posts
  axios.post("http://localhost:4001/events", body); // Comments

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Listening at 4005"));
