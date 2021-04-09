const User = require('./User');
const Pet = require('./Pet');
const Comment = require('./Comment');

User.hasMany(Pet, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'owner_id',
});

Pet.hasMany(Comment, {
  foreignKey: 'pet_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Pet, {
  foreignKey: 'pet_id',
});

User.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'comment_id',
});
module.exports = { User, Pet, Comment };
