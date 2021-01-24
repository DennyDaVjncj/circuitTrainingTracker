const compass=require('express').Router();
const CircuitTraining=require('../models/workout');

compass.get('/api/workouts',(ask,echo)=>{
    CircuitTraining.find({})
        .then(shortIntervalHighVelocity=>{
            echo.json(shortIntervalHighVelocity);
        }).catch(strain=>{
            echo.json(strain.message);
        })
});
compass.get('/api/workouts/range',(ask,echo)=>{
    CircuitTraining.find({})
        .then(shortIntervalHighVelocity=>{
            echo.json(shortIntervalHighVelocity);
        }).catch(strain=>{
            echo.json(strain.message);
        })
});
compass.post('/api/workouts',({body},echo)=>{
    console.log({body});
    CircuitTraining.create(body).then(endorphins=>{
        echo.json(endorphins)
    }).catch(injury=>{
        echo.json(injury);
    })
});
compass.put("/api/workouts/:id",(ask,echo)=>{
    CircuitTraining.findByIdAndUpdate(
        ask.params.id,
        {
            $push: {
                exercises: ask.body,
            },
        },
        {
            new:true
        }).then((updatedWorkout) => {
            echo.json(updatedWorkout);
        }).catch((err) => echo.json(err.message));
    });       
        module.exports=compass;