"use strict";'use strict';

module.exports = {
  up: (queryInterface, Sequelize)  => {
    return queryInterface.createTable('additionals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: queryInterface=> {
    return queryInterface.dropTable('additionals');
  }
};