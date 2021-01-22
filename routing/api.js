const compass=require('express').Router();
const CircuitTraining=require('../models/workout');

compass.post('/api/exercise',({body},echo)=>{
    console.log({body});
    CircuitTraining.create(JSON.parse(body)).then(endorphins=>{
        echo.json(endorphins)
    }).catch(injury=>{
        echo.status(400).json(injury);
    })
});
    module.exports=compass;