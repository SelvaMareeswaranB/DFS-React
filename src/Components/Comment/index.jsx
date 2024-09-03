import PropTypes from "prop-types";
import Style from "./styles.module.css";
import { useState } from "react";

const CommentItem = ({ comment, addReply }) => {
  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);
  const handleBlur = (e) => {
    const newcomment = e.target.value;
    addReply(comment.id, newcomment);
  };
  return (
    <div className={Style.commentContainer}>
      <div className={Style.details}>
        <div>{comment.text || "lorem ipsum"}</div>
        <div className={Style.controls}>
          {comment.subComments.length > 0 && (
            <span onClick={() => toggleReply(!showReply)}>View Reply</span>
          )}
          <span onClick={() => toggleAddReply(!showAddReply)}>Add Reply</span>
        </div>
      </div>
      {showReply && <Comment commentData={comment.subComments} />}
      {showAddReply && (
        <input
          className={Style.replyBox}
          type="text"
          placeholder="Enter Your Reply"
          autoFocus
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    subComments: PropTypes.array,
  }).isRequired,
  addReply: PropTypes.func,
};

const Comment = ({ commentData, addReply }) => {
  return (
    <>
      {commentData.map((comment) => (
        <CommentItem comment={comment} key={comment.id} addReply={addReply} />
      ))}
    </>
  );
};

Comment.propTypes = {
  commentData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
  addReply: PropTypes.func,
};

export default Comment;
