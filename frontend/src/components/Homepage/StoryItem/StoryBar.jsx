import { useRef } from "react";
import StoryItem from "./StoryItem";
import CurrUserStoryBtn from "./CurrUserStoryBtn";
import "./StoryBar.css";

const stories = [
  {
    id: 1,
    username: "rahul_codes",
    avatar: "https://i.pravatar.cc/150?img=12",
    viewed: false,
  },
  {
    id: 2,
    username: "priya_dev",
    avatar: "https://i.pravatar.cc/150?img=32",
    viewed: false,
  },
  {
    id: 3,
    username: "rohan_tech",
    avatar: "https://i.pravatar.cc/150?img=11",
    viewed: true,
  },
  {
    id: 4,
    username: "neha_design",
    avatar: "https://i.pravatar.cc/150?img=44",
    viewed: false,
  },
  {
    id: 5,
    username: "akshay_js",
    avatar: "https://i.pravatar.cc/150?img=53",
    viewed: true,
  },
  {
    id: 6,
    username: "sneha_ui",
    avatar: "https://i.pravatar.cc/150?img=47",
    viewed: false,
  },
  {
    id: 7,
    username: "omkar_dev",
    avatar: "https://i.pravatar.cc/150?img=68",
    viewed: false,
  },
  {
    id: 8,
    username: "dev_karan",
    avatar: "https://i.pravatar.cc/150?img=60",
    viewed: true,
  },
];

function StoryBar() {
  const storyContainerRef = useRef(null);

  const scrollStories = (direction) => {
    if (!storyContainerRef.current) return;

    const amount = direction === "left" ? -300 : 300;

    storyContainerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };
  // Mock current user story
  const currentUser = {
    username: "aditya_dev",
    avatar: "https://i.pravatar.cc/150?img=68",
    viewed: true,
  };

  return (
    <section className="story-bar">
      {/* // Scroll buttons and story list */}
      <button
        className="story-scroll-button story-scroll-left"
        onClick={() => scrollStories("left")}
        aria-label="Previous stories"
      >
        ‹
      </button>

      <div className="story-list" ref={storyContainerRef}>
        <CurrUserStoryBtn story={currentUser} haveOwnStory={true} />

        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>

      <button
        className="story-scroll-button story-scroll-right"
        onClick={() => scrollStories("right")}
        aria-label="Next stories"
      >
        ›
      </button>
    </section>
  );
}

export default StoryBar;