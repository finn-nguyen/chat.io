'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'john_doe',
          first_name: 'John',
          last_name: 'Doe',
          status: true,
          password: '123456',
          email: 'john_doe@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'alex_zin',
          first_name: 'Alex',
          last_name: 'Zin',
          status: false,
          password: '123456',
          email: 'alex_zin@email.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: 'zed_mark',
          first_name: 'Zed',
          last_name: 'Mark',
          status: true,
          password: '123456',
          email: 'zed_mark@email.com',
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
