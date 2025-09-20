import axios from "axios";
import { useEffect, useState } from "react";
import type { PostCommentT } from "./types";

export default function CommentsList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<PostCommentT[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(data as PostCommentT[]);
    };

    fetchComments();
  }, [postId]);

  if (!comments.length) return null;

  return (
    <>
      <ul className="my-3">
        {comments.map((c) => {
          return <li key={c.id}>{c.content}</li>;
        })}
      </ul>
    </>
  );
}
