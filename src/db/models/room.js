'use strict';

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    'Room',
    {
      name: { type: DataTypes.STRING },
      public: { type: DataTypes.BOOLEAN },
    },
    { underscored: true }
  );
  Room.associate = function (models) {
    // associations can be defined here
  };

  return Room;
};
