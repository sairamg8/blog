import Post from "./components/posts/Post";
import PostList from "./components/posts/PostList";

export default function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <Post />
        <PostList />
      </div>
    </div>
  );
}
