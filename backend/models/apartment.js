// models/Apartment.js
module.exports = (sequelize, DataTypes) => {
    const Apartment = sequelize.define('apartment', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    unit_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    size: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    building_number: {
        type: DataTypes.INTEGER,
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

    return Apartment;
};
