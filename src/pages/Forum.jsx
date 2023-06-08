import React, { useState } from "react";
import "./DiscussionForumPage.css";
import DiscussionPost from "./DiscussionPost";

const DiscussionForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");

  const handleNewPostChange = (event) => {
    setNewPostText(event.target.value);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    if (newPostText.trim().length > 0) {
      const newPost = {
        id: Date.now(),
        text: newPostText.trim(),
        author: "Anonymous",
        timestamp: new Date().toISOString(),
        replies: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");
    }
  };

  return (
    <div className="discussion-forum-page">
      <h1 className="discussion-forum-page__title">Discussion Forum</h1>
      <form className="discussion-forum-page__new-post-form" onSubmit={handleNewPostSubmit}>
        <textarea
          className="discussion-forum-page__new-post-textarea"
          placeholder="Ask a question or start a discussion..."
          value={newPostText}
          onChange={handleNewPostChange}
        />
        <button className="discussion-forum-page__new-post-button">Post</button>
      </form>
      <div className="discussion-forum-page__posts">
        {posts.map((post) => (
          <DiscussionPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionForumPage;