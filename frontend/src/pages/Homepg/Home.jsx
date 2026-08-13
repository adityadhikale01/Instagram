import StoryBar from "../../components/Homepage/stories/StoryBar";
import PostCard from "../../components/posts/PostCard";
import { posts } from "../../DumyData/post"; 
import "./Home.css";
import getGreeting from "../../utils/greeting";
import { useAuth } from "../../context/AuthContext";
export default function Home() {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const currentUser = {
    name: "Aditya",
  };
  return (
    <div className="home-page">

      {/* Header */}

      <section className="home-header">
        <div>
          <p className="home-date">
          {formattedDate}
          </p>

          <h1>
            {getGreeting()}, {currentUser.name}!
          </h1>
        </div>
      </section>


      {/* Stories */}

      <StoryBar />


      {/* Create Post */}

      <section className="create-post">
        {/* your existing create post component */}

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
      </section>


      {/* Feed */}

      <section className="campus-feed">
        {/* your posts */}
      </section>

    </div>
  );
}