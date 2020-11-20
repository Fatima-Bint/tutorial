//useeffect hook
//use state
import React, { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  //arrow fxn

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setBlogs(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title} </li>
      ))}
    </ul>
  );
}

export default Post;
