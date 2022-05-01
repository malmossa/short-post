import React from "react";
const PostsList = () => {
  return (
    <div className="list-group">
      <table className="table table-hover table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Post</th>
            <th scope="col">Author</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hello everyone</td>
            <td>Mansor Almossa</td>
            <td>Five stars</td>
            <td>
              <button className="btn btn-sm btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Update</button>
            </td>
          </tr>
          <tr>
            <td>Hello everyone</td>
            <td>Mansor Almossa</td>
            <td>Five stars</td>
            <td>
              <button className="btn btn-sm btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Update</button>
            </td>
          </tr>
          <tr>
            <td>Hello everyone</td>
            <td>Mansor Almossa</td>
            <td>Five stars</td>
            <td>
              <button className="btn btn-sm btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-sm btn-danger">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostsList;
