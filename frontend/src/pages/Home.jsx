import StoryBar from "../components/Homepage/StoryItem/StoryBar.jsx";
import PostCard from "../components/posts/PostCard.jsx";
import { posts } from "../DumyData/post.js";

function HomePage() {
  return (
    <>
      <StoryBar />
      <main className="home-feed">

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}

    </main>
    </>
  );
}

export default HomePage;