import type { CommentT } from "./types";

export default function CommentsList({ comments }: { comments: CommentT[] }) {
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
