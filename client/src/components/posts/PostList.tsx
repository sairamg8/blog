import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

export default function PostList() {
  const [posts, setPosts] = useState<
    { id: string; title: string; comments: { id: string; comment: string }[] }[]
  >([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:4000/posts");

      setPosts(Object.values(data));
    };
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts);

  return (
    <>
      <div className="container mt-4">
        <ul className="row list-unstyled">
          {renderPosts?.map((post) => {
            return (
              <li key={post.id || "new"} className="col-4">
                <div className="card h-100">
                  <div className="card-body">
                    <p className="text-primary">{post.title}</p>
                    <CommentsList postId={post.id} />
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
