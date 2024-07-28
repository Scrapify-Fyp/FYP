// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import "./CommentSection.css"; // Import the CSS file

// const CommentSection = ({ productId }) => {
//   const [comments, setComments] = useState([
//     { username: "Alice", rating: 5, text: "Great product!" },
//     { username: "Bob", rating: 4, text: "Good quality, but a bit pricey." },
//     { username: "Charlie", rating: 3, text: "Average experience." }
//   ]);
//   const [newComment, setNewComment] = useState("");
//   const [newUsername, setNewUsername] = useState("");

//   const handleAddComment = () => {
//     if (!newUsername || !newComment) {
//       toast.error("Username and comment are required!", {
//         autoClose: 1500,
//       });
//       return;
//     }

//     const comment = {
//       username: newUsername,
//       rating: 5,
//       text: newComment,
//     };

//     setComments([...comments, comment]);
//     setNewUsername("");
//     setNewComment("");
//     toast.success("Comment added!", {
//       autoClose: 1500,
//     });
//   };

//   return (
//     <div className="comment-section">
//       <h4>Comments</h4>
//       {comments.map((comment, index) => (
//         <div key={index} className="comment">
//           <div className="comment-header">
//             <strong>{comment.username}</strong>
//             <div className="star">
//               {Array.from({ length: comment.rating }, (_, index) => (
//                 <FontAwesomeIcon key={index} icon={faStar} />
//               ))}
//             </div>
//           </div>
//           <p>{comment.text}</p>
//         </div>
//       ))}
//       <div className="add-comment">
//         <h5>Leave Your Comments</h5>
//         <input
//           type="text"
//           value={newUsername}
//           onChange={(e) => setNewUsername(e.target.value)}
//           placeholder="Your username"
//           required
//         />
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Write your comment here..."
//           required
//         />
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// };

// export default CommentSection;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { selectIsAuthenticated } from "../redux/authSlice"; // Adjust the path
import "./CommentSection.css"; // Import the CSS file
import { auth } from "../hooks/auth";
import axios from "axios";

const CommentSection = ({ productId, setCommentCount, commentCount }) => {
  const [comments, setComments] = useState([
    { username: "Alice", rating: 5, text: "Great product!" },
    { username: "Bob", rating: 4, text: "Good quality, but a bit pricey." },
    { username: "Charlie", rating: 3, text: "Average experience." },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const isAuthenticated = auth(); // Get authentication status from Redux
  const navigate = useNavigate(); // Initialize useNavigate

  const saveComment = async () => {
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/products/${productId}`,{
        comment: newComment,
      });
      if(response.status == 200)
      {
        console.log("Comment saved successfully");
      }
      else console.log("Comment not saved");
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddComment = async () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add a comment.", {
        autoClose: 1500,
      });
      navigate("/signin"); // Redirect to sign-in page
      return;
    }

    if (!newUsername || !newComment) {
      toast.error("Username and comment are required!", {
        autoClose: 1500,
      });
      return;
    }

    const comment = {
      username: newUsername,
      rating: 5,
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewUsername("");
    setNewComment("");
    toast.success("Comment added!", {
      autoClose: 1500,
    });
    setCommentCount(comments.length);

    saveComment();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/updateInteraction`,
        {
          userId: isAuthenticated?._id,
          productId: productId,
          interactionType: "comments",
          incrementValue: 1,
        }
      );
      console.log("🚀 ~ updateInteraction ~ response:", response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCommentCount(comments.length);
  }, []);

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
        <h5>Leave Your Comments</h5>
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
