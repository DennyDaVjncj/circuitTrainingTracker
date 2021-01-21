const compass=require('express').Router();
const CircuitTraining=require('../models/Workout');

compass.post('/api/exercise',({body},echo)=>{
    CircuitTraining.create(body).then(endorphins=>{
        echo.json(endorphins)
    }).catch(injury=>{
        echo.status(400).json(injury);
    })
});


    module.exports=compass;