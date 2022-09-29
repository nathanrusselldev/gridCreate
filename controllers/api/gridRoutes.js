const router = require('express').Router();
const { Grid, Position } = require('../../models');



router.post('/create', async (req, res) => {
    console.log(req.body)
    const totalPositions = req.body.gridHeight * req.body.gridWidth
    const positionGrid = []
    const newGrid = await Grid.create({
        user_id: req.session.user_id,
        gridName: 'TestGrid',
        gridHeight: req.body.gridHeight,
        gridWidth: req.body.gridWidth
    })
    for (let i = 0; i < totalPositions; i++) {
        positionGrid.push({
            grid_id: newGrid.id,
            has_data: false,
        })
    }
    const positions = await Position.bulkCreate(positionGrid)
    res.json({grid: {newGrid, positions}, message: `Congratulations! A grid with ${totalPositions} positions has been created.`})
})

module.exports = router;