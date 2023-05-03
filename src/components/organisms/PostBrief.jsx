import { format } from 'date-fns';
import { PropTypes } from 'prop-types';
import React from 'react';

const PostBrief = ({ author, createdAt, title, cover, briefText }) => (
  <div className="mx-auto flex min-w-[400px] max-w-screen-md gap-3 shadow-sm transition-shadow hover:shadow-lg">
    <div className="">
      <img
        className="max-w-xs"
        src={`http://localhost:3000/${cover}`}
        alt={title}
      />
    </div>
    <div className="flex flex-col gap-1 p-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs">{author}</h2>
        <h2 className="text-xs font-light  italic">
          {format(new Date(createdAt), 'd.MM.yyy HH:mm')}
        </h2>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm">{briefText.substring(0, 320).trimEnd()}...</p>
    </div>
  </div>
);

PostBrief.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  briefText: PropTypes.string.isRequired
};

export default PostBrief;
