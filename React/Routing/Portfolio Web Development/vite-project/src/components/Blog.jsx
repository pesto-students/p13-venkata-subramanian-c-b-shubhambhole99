import React from 'react';
import {Link} from 'react-router-dom';
import BlogPost from './BlogPostPage';

const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
      {/* Display list of blog posts with title, preview, date, and image */}
      <Link to="/blog/1"><BlogPost idi={1}>Hi</BlogPost></Link>
    </div>
  );
}

export default Blog;