import "./ScrollDiv.css";
import { BsTwitter } from "react-icons/bs";
import TwitterFeed from "../pages/TwitterFeed";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

export default function ScrollDiv() {
  const userRedux = useSelector(state => state.user.user)
  const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

  if(userRedux !== null && userRedux.facebookId !== null){
  return (
    <div className="scroll">
      <BsTwitter />
      <TwitterFeed />
    </div>
  );
  }
  return (
    <div className="scroll">
      <Button as='a' href={host + '/auth/twitter'} colorScheme='twitter' style={{margin: "auto"}}>
                    Login with twitter.
                </Button>
    </div>
  )
}
