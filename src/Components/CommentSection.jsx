import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./CommentSection.css"; // Import the CSS file

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([
    { username: "Alice", rating: 5, text: "Great product!" },
    { username: "Bob", rating: 4, text: "Good quality, but a bit pricey." },
    { username: "Charlie", rating: 3, text: "Average experience." }
  ]);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleAddComment = () => {
    if (!newUsername || !newComment) {
      toast.error("Username and comment are required!", {
        autoClose: 1500,
      });
      return;
    }

    const comment = {
      username: newUsername,
      rating: 5, // Fixed rating of 5 for demonstration
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewUsername("");
    setNewComment("");
    toast.success("Comment added!", {
      autoClose: 1500,
    });
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-header">
            <strong>{comment.username}</strong>
            <div className="star">
              {Array.from({ length: comment.rating }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
      <div className="add-comment">
        <h5>Add a New Comment</h5>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Your username"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          required
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
