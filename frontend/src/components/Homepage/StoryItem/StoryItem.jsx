import "./StoryBar.css";

function StoryItem({ story, isOwnStory = false }) {
  return (
    <div className="story-item">
      <div
        className={`story-avatar-wrapper ${
          story.viewed ? "story-viewed" : ""
        }`}
      >
        <div className="story-avatar">
          <img src={story.avatar} alt={story.username} />
        </div>

        {isOwnStory && (
          <button className="story-add-button" aria-label="Add story">
            +
          </button>
        )}
      </div>

      <span className="story-username">
        {isOwnStory ? "Your story" : story.username}
      </span>
    </div>
  );
}

export default StoryItem;