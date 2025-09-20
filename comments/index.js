import { randomBytes } from "crypto";
import e from "express";
import cors from "cors";
import axios from "axios";

const app = e();
app.use(cors({}));

const commentsByPostId = {};

app.use(e.json({}));

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const { content } = req.body;

  const commentId = randomBytes(4).toString("hex");

  const comment = commentsByPostId[req.params.id] || [];

  comment.push({
    commentId,
    content,
  });
  commentsByPostId[req.params.id] = comment;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      commentId,
      content,
      postId: req.params.id,
    },
  });
  res.status(201).send(commentId);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4001, () => console.log("Listening at 4001"));
