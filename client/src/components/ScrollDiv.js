import "./ScrollDiv.css";
import { BsFacebook } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function ScrollDiv() {
  const posts = useSelector((state) => state.FB.data)
  return (
    <div class="scroll">
      <h1>
        <BsFacebook />
        {posts.map(post => {
          return <TodoItem post={post} />
      </h1>

    </div>
  );
}
