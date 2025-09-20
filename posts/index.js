import { randomBytes } from "crypto";
import e from "express";
import cors from "cors";
import axios from "axios";

const app = e();

const posts = {};

app.use(e.json({}));
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(id);
});

app.listen(4000, () => console.log("Listening at 4000"));
