import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, author: $author, content: $content) {
      _id
    }
  }
`;

const MessageForm = () => {
  // let navigate = useNavigate()
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [createMessage] = useMutation(CREATE_MESSAGE);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
               await createMessage({ variables: { title, author, content } });
              //  navigate("/")
              window.location.href="/"
              }}
            >
              <div className="mb-2">
                <input
                  className="form-control"
                  type="text"
                  name="Author"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-control"
                  type="text"
                  name="Title"
                  placeholder="Write the Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success btn-block">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
