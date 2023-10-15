const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });
  

  // for (const post of posts) {
  //   await Post.create({
  //     //...commentData[Math.floor(Math.random() * commentData.length)],
  //     // user_id: users[Math.floor(Math.random() * users.length)].id,
  //     name: post.name,
  //     content: post.content,
  //     date_created: post.date_created,
  //     user_id: post.user_id,
  //   });
  // }
  
  // for (const comment of comments) {
  //      await Comment.create({
  //          content: comment.content,
  //          date_created: comment.date_created,
  //          user_id: comment.user_id,
  //          post_id: comment.id,
  //      });
  // }

  process.exit(0);
};

seedDatabase();
