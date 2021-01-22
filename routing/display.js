const compass=require('express').Router();
const CircuitTraining=require('../models/workout');

compass.get('/exercises',async(ask,echo)=>{
    try{
        const exerciseData=await CircuitTraining.findAll({
            //im just fetching the model data in essence
        })
        echo.json(exerciseData)
        console.log('let me see what all the fuss is about: '+exerciseData);
    }catch(strain){
        echo.status(500).json(strain.message);
    }
});
    module.exports=compass;