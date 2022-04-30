import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import PostDetailPage from "./routes/PostDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts/:id" element={<PostDetailPage />} />
        <Route exact path="/posts/:id/update" element={<UpdatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
