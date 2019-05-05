import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div>
        Welcome to Home
        <Link to="/blog">Go to Blog</Link>
      </div>
    );
  }
}

export default Blog;