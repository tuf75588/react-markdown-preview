import React from "react";
import { Link } from "react-router-dom";
function List({ post }) {
  return (
    <ul>
      <li className='text-center post-title'>
        <Link to={`/post/${post.key}`}>
          <h2>{post.title}</h2>
        </Link>
      </li>
    </ul>
  );
}

export default List;
