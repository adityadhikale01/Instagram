import "./Story.css";

export default function Story({ story, onClick }) {
  
  return (
    <button
      type="button"
      className="story"
      onClick={() => onClick?.(story)}
      aria-label={`Open ${story.displayName}'s story`}
    >
      <div
        className={`story-ring ${
          story.isOwnStory ? "story-ring-own" : ""
        }`}
      >
        <div className="story-image-wrapper">
          <img
            src={story.avatar}
            alt={story.displayName}
            className="story-image"
          />
        </div>
      </div>

      <span className="story-name">
        {story.displayName}
      </span>
    </button>
  );
}