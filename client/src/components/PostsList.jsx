import React, { useEffect, useContext } from "react";
import PostsApi from "../api/PostsApi";
import { PostsContext } from "../contextAPI/PostsContext";

const PostsList = (props) => {
  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    const feachData = async () => {
      try {
        const response = await PostsApi.get("/");
        setPosts(response.data.data.posts);
      } catch (err) {
        console.error(err.message);
      }
    };

    feachData();
  }, []);

  return (
    <div className="list-group">
      <table className="table table-hover table-dark table-striped">
        <thead>
          <tr key={posts.id}>
            <th scope="col">Title</th>
            <th scope="col">Post</th>
            {/* <th scope="col">Rating</th> */}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.post_title}</td>
                <td>{post.post_message}</td>
                <td>
                  <button className="btn btn-sm btn-warning">Update</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
