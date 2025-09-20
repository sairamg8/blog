import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";
import type { PostT } from "./types";

export default function PostList() {
  const [posts, setPosts] = useState<PostT[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:4002/posts");

      setPosts(Object.values(data));
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <ul className="row list-unstyled">
          {posts?.map((post) => {
            return (
              <li key={post.id || "new"} className="col-4">
                <div className="card h-100">
                  <div className="card-body">
                    <p className="text-primary">{post.title}</p>
                    <CommentsList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
