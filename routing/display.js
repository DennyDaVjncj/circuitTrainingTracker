const compass=require('express').Router();
const pathways=require('path');
const CircuitTraining=require('../models/workout');

compass.get('/exercise',(ask,echo)=>{
    echo.sendFile(pathways.join(__dirname,'../public/exercise.html'))
});
compass.get('/stats',(ask,echo)=>{
    echo.sendFile(path.join(__dirname,'../public/stats.html'))
})
    module.exports=compass;