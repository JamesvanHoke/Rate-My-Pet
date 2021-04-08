const sequelize = require('../config/connection');
const { User, Pet, Comment } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Bulk create our User table from seed
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Bulk create our pet table from seed
  await Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });

  // Bulk create our comment table from seed
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
