import "./ScrollDiv.css";
import { BsTwitter } from "react-icons/bs";
import TwitterFeed from "../pages/TwitterFeed";
import FbPosts from "./FbPosts";

export default function ScrollDiv() {
  return (
    <div className="scroll">
      <BsTwitter />
      <TwitterFeed />
    </div>
  );
}
