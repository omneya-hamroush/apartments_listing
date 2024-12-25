'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Apartments');
  }
};
