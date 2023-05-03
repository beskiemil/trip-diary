import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';

export const PostContext = createContext({});

const fetchPosts = async () => {
  const response = await fetch('http://localhost:3000/posts').then(res =>
    res.json()
  );
  return response;
};

const PostProvider = ({ children }) => {
  const { data, status } = useQuery(['posts'], fetchPosts);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PostContext.Provider value={{ data, status }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
