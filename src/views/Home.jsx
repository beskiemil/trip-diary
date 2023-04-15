import React, { useState } from 'react';

import PostBrief from '../components/organisms/PostBrief';
import postImg from '../data/photos/post-photo-mountains-1.jpg';

// eslint-disable-next-line arrow-body-style
const Home = () => {
  return (
    <main className="flex flex-col gap-12">
      <PostBrief
        author="Emil Beski"
        date="14 kwietnia 2023"
        title="Samochodem przez Tatry - lipiec 2022"
        image={postImg}
        briefText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sit amet elit laoreet fermentum in consequat ipsum. In accumsan turpis sit amet massa sollicitudin tempor. Nullam lectus tellus, vehicula id aliquam sit amet, dictum et turpis."
      />
      <PostBrief
        author="Emil Beski"
        date="14 kwietnia 2023"
        title="Samochodem przez Tatry - lipiec 2022"
        image={postImg}
        briefText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sit amet elit laoreet fermentum in consequat ipsum. In accumsan turpis sit amet massa sollicitudin tempor. Nullam lectus tellus, vehicula id aliquam sit amet, dictum et turpis."
      />
      <PostBrief
        author="Emil Beski"
        date="14 kwietnia 2023"
        title="Samochodem przez Tatry - lipiec 2022"
        image={postImg}
        briefText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna sit amet elit laoreet fermentum in consequat ipsum. In accumsan turpis sit amet massa sollicitudin tempor. Nullam lectus tellus, vehicula id aliquam sit amet, dictum et turpis."
      />
    </main>
  );
};

export default Home;
