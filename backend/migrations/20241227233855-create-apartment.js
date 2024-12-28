'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('apartment', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      unit_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
      building_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM(
          'UNDER_MAINTENANCE',
          'UNDER_CONSTRUCTION',
          'AVAILABLE',
          'RESERVED',
          'SOLD',
          'TERMINATED',
          'FINISHED',
          'FULLY_FINISHED'
        ),
        allowNull: false,
        defaultValue: 'UNDER_CONSTRUCTION', 
      },
      sale_type: {
        type: Sequelize.ENUM(
          'DEVELOPER_SALE',
          'RESALE'
        ),
        allowNull: false,
        defaultValue: 'DEVELOPER_SALE', 
      },
    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('apartment');
  }
};
