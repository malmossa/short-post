import React from "react";

import Header from "../components/Header";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <AddPost />
      <PostsList />
    </div>
  );
};

export default Home;
