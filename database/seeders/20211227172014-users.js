'use strict';

const bcrypt=require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
       firstName: 'John',
       lastName: 'Doe',
       gender: 'male',
       email:'john.doe@email.com',
       password: bcrypt.hashSync('secret',10),
     },
     {
      firstName: 'Tom',
      lastName: 'Smith',
      gender: 'male',
      email:'tom.smith@email.com',
      password: bcrypt.hashSync('secret',10),
    },
    {
      firstName: 'Mary',
      lastName: 'Jane',
      gender: 'female',
      email:'mary.jane@email.com',
      password: bcrypt.hashSync('secret',10),
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{});
  }
};
