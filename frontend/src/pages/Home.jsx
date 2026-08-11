import StoryBar from "../components/Homepage/stories/StoryBar";
import PostCard from "../components/posts/PostCard";
import { posts } from "../DumyData/post"; 
export default function Home() {
  return (
    <div className="home-page">

      {/* Header */}

      <section className="home-header">
        <div>
          <p className="home-date">
            Tuesday, April 16
          </p>

          <h1>
            Good morning, Aditya
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