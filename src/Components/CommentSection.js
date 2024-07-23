import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { toast } from "react-toastify";

const CommentSection = ({ productId }) => {
  const user = useSelector(selectUser);
  const [comments, setComments] = useState([
    { username: "Alice", rating: 5, text: "Great product!" },
    { username: "Bob", rating: 4, text: "Good quality, but a bit pricey." },
    { username: "Charlie", rating: 3, text: "Average experience." }
  ]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleAddComment = () => {
    if (!user) {
      toast.error("You're not logged in!", {
        autoClose: 1500,
      });
      return;
    }

    const comment = {
      username: user.username,
      rating: newRating,
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewComment("");
    setNewRating(5);
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
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
        />
        <div className="rating-input">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
