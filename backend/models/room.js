module.exports = (sequelize, DataTypes) => {
    const room = sequelize.define('room', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    size: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM(
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
    },

    });

   

    return room;
};
