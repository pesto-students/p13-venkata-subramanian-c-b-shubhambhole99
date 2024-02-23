import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({idi}) => {
  const { id } = useParams(); // Assuming your route is defined as /blog/:id
  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      {/* Use the `id` parameter to fetch corresponding blog post data */}
    </div>
  );
}

export default BlogPost;