const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Position extends Model {}

Position.init(
    {
        binNumber: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        hasData: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'position',
    }
)

module.exports = Position;