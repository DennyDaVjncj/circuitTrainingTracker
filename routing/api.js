const compass=require('express').Router();
const CircuitTraining=require('../models/workout');

compass.get('/api/workout',(ask,echo)=>{
    CircuitTraining.find({})
        .then(shortIntervalHighVelocity=>{
            echo.json(shortIntervalHighVelocity);
        }).catch(strain=>{
            echo.json(strain.message);
        })
})
compass.post('/api/workout',({body},echo)=>{
    console.log({body});
    CircuitTraining.create(body).then(endorphins=>{
        echo.json(endorphins)
    }).catch(injury=>{
        echo.json(injury);
    })
});
compass.put('/api/workout/:id',(ask,echo)=>{
    const {id}=ask.params;
    const {body}=ask;
    CircuitTraining.updateOne(
        {_id:id},
        {$push:{exercises:body}}
    ).then(endorphins=>echo.json(endorphins))
        .catch(strain=>echo.json(strain));
})
    module.exports=compass;