'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'rooms',
      [
        {
          name: 'Node',
          public: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'React',
          public: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ReactNative',
          public: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
