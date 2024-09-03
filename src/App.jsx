// import { useState } from 'react'
import { useState } from "react";
import Comment from "./Components/Comment";
import commentsData from "./Components/Comment/Utils/data";
import { updateComments } from "./Components/Comment/Utils/updateComment";
function App() {
  const [comments, setComments] = useState(commentsData);
  const addReply = (targetId, newcomment) => {
    const newUpdateComments = updateComments(comments, targetId, newcomment);
  };
  return (
    <>
      <Comment commentData={commentsData} addReply={addReply} />
    </>
  );
}

export default App;
