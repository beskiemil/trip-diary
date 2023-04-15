import { PropTypes } from 'prop-types';
import React from 'react';

const PostBrief = ({ author, date, title, image, briefText }) => (
  <div className="mx-auto flex max-w-screen-md gap-3 shadow-sm transition-shadow hover:shadow-lg">
    <div className="">
      <img className="max-w-xs" src={image} alt={title} />
    </div>
    <div className="flex flex-col gap-1 p-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs">{author}</h2>
        <h2 className="text-xs font-light  italic">{date}</h2>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm">{briefText}</p>
    </div>
  </div>
);

PostBrief.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.any,
  briefText: PropTypes.string.isRequired
};

export default PostBrief;
