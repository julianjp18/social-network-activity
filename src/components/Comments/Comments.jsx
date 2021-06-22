import React, { createElement, useEffect, useState } from 'react';
import { Avatar, Button, Col, Comment, Form, Row, Tooltip } from 'antd';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { openNotificationWithIcon } from '../../utils/extra';
import TextArea from 'antd/lib/input/TextArea';
import { useParams } from 'react-router-dom';

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const Comments = ({ addCommentAction, allComments, comments, postCommentsAction }) => {
  let { postId } = useParams();
  const [action, setAction] = useState(null);
  const [commentInput, setCommentInput] = useState();
  const [dislikes, setDislikes] = useState(0);
  const [likes, setLikes] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const commentsByPost = [];
    allComments.forEach((comment) => {
      if (comment.postId === Number.parseInt(postId))
        commentsByPost.push(comment);
    });

    postCommentsAction(commentsByPost);
  }, [allComments, postId, postCommentsAction]);
  
  const dislike = () => {
    setAction('disliked');
    setDislikes(1);
    setLikes(0);
  };

  const handleChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!commentInput)
      return;

    setSubmitting(true);
    const newComment = {
      body: commentInput,
      email: 'Presley.Mueller@myrl.com',
      id: allComments.length + 1,
      name: 'New comment',
      postId: Number.parseInt(postId),
    };

    addCommentAction({
      allComments,
      newComment,
    });
    openNotificationWithIcon('Comment succesfully saved!', 'success', 'Comment saved')

    setSubmitting(false);
  };

  const like = () => {
    setAction('liked');
    setDislikes(0);
    setLikes(1);
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Row className="comments-container">
      <Col xs={24} md={12} offset={2}>
        {comments?.length > 0 && comments.map((comment) => (
          <Comment
            actions={actions}
            author={comment.name}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt={comment.name}
              />
            }
            content={
              <p>
                {comment.body}
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
            key={comment.id}
          />
        ))}
      </Col>
      <Col xs={24} md={10}>
        <h3>What do you think?</h3>
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={commentInput}
            />
          }
        />
      </Col>
    </Row>
  );
};

export default Comments;