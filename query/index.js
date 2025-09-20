import e from "express";
import cors from "cors";

const app = e();

app.use(e.json({}));
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    const { commentId, content, postId } = data;

    const post = posts[postId];

    post.comments.push({ commentId, content });
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => console.log("Listening on 4002"));
