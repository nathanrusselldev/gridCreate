const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grid extends Model {}

Grid.init(
    {
    gridName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gridHeight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gridWidth: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    },
    {
        sequelize,
        timeStamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'grid'
    }
);

module.exports = Grid
