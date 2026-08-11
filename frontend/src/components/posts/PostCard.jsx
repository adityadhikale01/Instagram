import { useState } from "react";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Smile,
} from "lucide-react";

import "./post.css";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isSaved, setIsSaved] = useState(post.isSaved || false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    console.log("New comment:", comment);

    setComment("");
  };

  return (
    <article className="post-card">

      {/* ================= HEADER ================= */}
      <div className="post-header">

        <div className="post-user">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="post-avatar"
          />

          <div className="post-user-info">
            <div className="post-user-name">
              <span>{post.user.username}</span>

              {post.user.isVerified && (
                <span className="verified-badge">✓</span>
              )}
            </div>

            <span className="post-time">
              {post.createdAt}
            </span>
          </div>
        </div>

        <button className="post-more-btn">
          <MoreHorizontal size={22} />
        </button>

      </div>

      {/* ================= MEDIA ================= */}
      <div
        className="post-media-container"
        onDoubleClick={handleDoubleClick}
      >
        {post.media?.[0]?.type === "video" ? (
          <video
            src={post.media[0].url}
            className="post-media"
            controls
          />
        ) : (
          <img
            src={post.media?.[0]?.url}
            alt="Post"
            className="post-media"
          />
        )}
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="post-actions">

        <div className="post-actions-left">

          <button
            className={`post-action-btn ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <Heart
              size={24}
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>

          <button
            className="post-action-btn"
            aria-label="Comment"
          >
            <MessageCircle size={24} />
          </button>

          <button
            className="post-action-btn"
            aria-label="Share"
          >
            <Send size={24} />
          </button>

        </div>

        <button
          className={`post-action-btn ${isSaved ? "saved" : ""}`}
          onClick={() => setIsSaved((prev) => !prev)}
          aria-label="Save"
        >
          <Bookmark
            size={24}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>

      </div>

      {/* ================= LIKES ================= */}
      <div className="post-likes">
        {likes.toLocaleString()} likes
      </div>

      {/* ================= CAPTION ================= */}
      {post.caption && (
        <div className="post-caption">
          <span className="caption-username">
            {post.user.username}
          </span>

          <span>{post.caption}</span>
        </div>
      )}

      {/* ================= COMMENTS ================= */}
      {post.commentsCount > 0 && (
        <button className="view-comments">
          View all {post.commentsCount} comments
        </button>
      )}

      {/* ================= ADD COMMENT ================= */}
      <form
        className="add-comment"
        onSubmit={handleCommentSubmit}
      >
        <Smile size={20} />

        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {comment.trim() && (
          <button type="submit">
            Post
          </button>
        )}
      </form>

    </article>
  );
};

export default PostCard;