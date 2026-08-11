import Story from "./Story";
import { stories } from "../../../DumyData/story.data.js";

import "./StoryBar.css";

export default function StoryBar() {

  const handleStoryClick = (story) => {
    console.log("Opening story:", story.username);

    // Later:
    // navigate(`/stories/${story.username}`);
    //
    // or open StoryViewer component
  };

  return (
    <section className="story-bar">

      <div className="story-list">

        {stories.map((story) => (
          <Story
            key={story.id}
            story={story}
            onClick={handleStoryClick}
          />
        ))}

      </div>

    </section>
  );
}