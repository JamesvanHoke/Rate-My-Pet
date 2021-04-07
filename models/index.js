const User = require('./User');
const Pet = require('./Pet');
const Comment = require('./Comment');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

Pet.hasMany(Comment, {
  foreignKey: '',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Pet, Comment };
