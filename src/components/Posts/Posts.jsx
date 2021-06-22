import React from 'react';
import { Avatar, Image, List, Space } from "antd";
import { Link } from "react-router-dom";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Posts = ({ allComments, posts }) => {

  const getTotalCommentsNumber = (postId) => {
    let totalComments = 0;
    allComments?.forEach((comment) => {
      if (comment.postId === Number.parseInt(postId))
        totalComments++;
    });
    
    return totalComments;
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={posts}
      footer={
        <div>
          Made by <b>Julian Perez</b> for Patagonian
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <Link to={`/comments/${item.id}`}>
              <IconText
                icon={MessageOutlined}
                text={getTotalCommentsNumber(item.id)}
                key="list-vertical-message"
              />
            </Link>
            ,
          ]}
          extra={
            <Image
              width={150}
              src="https://picsum.photos/1200"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={
              <Link to={`/comments/${item.id}`}>
                {item.title}
              </Link>
            }
            description={item.description}
          />
          {item.body}
        </List.Item>
      )}
    />
  );
};

export default Posts;
