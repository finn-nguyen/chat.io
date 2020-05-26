'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      socialId: { type: DataTypes.STRING },
      avatar: { type: DataTypes.STRING },
      username: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      status: { type: DataTypes.BOOLEAN },
    },
    { underscored: true }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
