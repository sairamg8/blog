import axios from "axios";
import { useState, type FormEvent } from "react";

export default function CommentCreate({ postId }: { postId: string }) {
  const [comment, setComment] = useState("");

  const handleNewComment = async (e: FormEvent) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      postId,
      content: comment,
    });
  };

  return (
    <>
      <form onSubmit={handleNewComment}>
        <div className="form-group">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control mb-3"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
}
