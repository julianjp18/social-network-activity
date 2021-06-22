import React, { useEffect } from "react";
import {
  ADD_COMMENT,
  ALL_COMMENTS,
  GET_COMMENTS,
  GET_POSTS,
} from "./redux/constants";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Col, Row } from "antd";
import { connect } from "react-redux";
import Comments from "./components/Comments/Comments";
import { func } from "prop-types";
import Menu from "./components/Menu/Menu";
import { object } from "prop-types";
import Posts from "./components/Posts/Posts";
import "antd/dist/antd.css";
import "./App.css";

const App = ({
  addCommentAction,
  allComments,
  allCommentsAction,
  postComments,
  posts,
  postsAction,
  postCommentsAction,
}) => {
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      if (res.status === 200) {
        allCommentsAction(res.data);
      }
    });
  }, [allCommentsAction]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        if (res.status === 200)
          postsAction(res.data);
      })
  }, [postsAction]);

  return (
    <Router>
      <Row>
        <Col xs={6}>
          <Menu />
        </Col>
        <Col xs={18}>
          <Row className="post-list-container">
            <Col xs={24}>
              <h1>Social network activity - recently posts</h1>
            </Col>
            <Col xs={24}>
              <Switch>
                <Route path="/comments/:postId">
                  <Comments
                    addCommentAction={addCommentAction}
                    allComments={allComments}
                    comments={postComments}
                    postCommentsAction={postCommentsAction}
                  />
                </Route>
                <Route path="/posts">
                  <Posts allComments={allComments} posts={posts} postsAction={postsAction} />
                </Route>
                <Redirect to="/posts" />
                <Route exact path="/">
                  <Redirect to="/posts" />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Col>
      </Row>
    </Router>
  );
};

App.propTypes = {
  addComment: func.isRequired,
  comments: object.isRequired,
  posts: object.isRequired,
};

App.defaultProps = {};

const mapStateToProps = (state) => ({
  posts: state.posts,
  postComments: state.post_comments,
  allComments: state.all_comments,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentAction: (payload) => dispatch({ type: ADD_COMMENT, payload }),
    allCommentsAction: (payload) => dispatch({ type: ALL_COMMENTS, payload }),
    postCommentsAction: (payload) => dispatch({ type: GET_COMMENTS, payload }),
    postsAction: (payload) => dispatch({ type: GET_POSTS, payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
