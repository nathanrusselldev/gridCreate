const User = require('./User');
const Grid = require('./Grid')
const Position = require('./Position')

Grid.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

Position.belongsTo(Grid, {
    foreignKey: 'grid_id',
    onDelete: 'SET NULL'
})
module.exports = { User, Grid, Position };
