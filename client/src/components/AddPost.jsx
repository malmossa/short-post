import React from "react";

const AddPost = () => {
  return (
    <form className="mb-4 row">
      <div className="row mb-1">
        <input type="text" className="form-control" placeholder="Title" />
      </div>
      <div className="row">
        <textarea
          type="text"
          className="form-control"
          placeholder="Post message here"
        />
      </div>
      <div className="col text-end">
        <button type="submit" className="btn btn-primary btn-sm mt-2">
          Add Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
