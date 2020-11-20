import React, { useEffect, useState } from "react";
import axios from "axios";

function Condition() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => setBlogs(result.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  return (
    //loading ? <h1> Female </h1> : <h1>Male</h1>
    <div>
      {loading && <h1> the application is loading </h1>}
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title} </li>
      ))}
    </div>
  );
}

export default Condition;
