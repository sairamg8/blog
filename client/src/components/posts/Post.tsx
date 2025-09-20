import axios from "axios";
import { useState, type FormEvent } from "react";

export default function Post() {
  const [title, setTitle] = useState("");

  const handleAddPost = async (e: FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      id: crypto.randomUUID(),
      title,
    });
  };

  return (
    <>
      <form onSubmit={handleAddPost}>
        <h2>Create Post</h2>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
