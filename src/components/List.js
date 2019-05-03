import React from "react";
import { Link } from "react-router-dom";
function List({ post, onDelete }) {
  return (
    <ul>
      <li className='post-link'>
        <Link to={`/post/${post.key}`}>
          <h2>{post.title}</h2>{" "}
        </Link>
        <span
          role='img'
          className='delete'
          onClick={onDelete}
          aria-label='emoji for deleting'
        >
          ❌
        </span>
      </li>
    </ul>
  );
}

export default List;
