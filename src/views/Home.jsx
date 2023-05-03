import React, { useContext } from 'react';

import PostBrief from '../components/organisms/PostBrief';
import postImg from '../data/photos/post-photo-mountains-1.jpg';
import { PostContext } from '../Providers/PostProvider';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  const { data: postsData, status: postStatus } = useContext(PostContext);

  if (postStatus === 'loading') return <p>loading...</p>;

  return (
    <main className="flex flex-col gap-12">
      {postsData.length > 0 &&
        postsData.map(post => (
          <PostBrief
            author={`${post.user.name} ${post.user.lastname}`}
            createdAt={post.createdAt}
            title={post.title}
            cover={post.cover}
            briefText={post.text}
            key={`${post.user.name}-${post.user.lastname}-${post.title}`}
          />
        ))}
    </main>
  );
};

export default Home;
