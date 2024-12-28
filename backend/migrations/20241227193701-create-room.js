'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('room', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      size: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM(
          'DINING_ROOM',
          'BEDROOM',
          'BATHROOM',
          'KITCHEN',
          'LIVING_ROOM'
        ),
        allowNull: false,
        defaultValue: 'BEDROOM', 
      },
      image: {
        type: Sequelize.STRING, 
        allowNull: true, 
      }
      
    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('room');
  }
};