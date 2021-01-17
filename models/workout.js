const animal=require('mongoose');
const Schema=animal.Schema;

const workoutPlan=new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    exercises:[
        {
            type:{
                type:String,
                required:'get it done bruh!'
            },
            name:{
                type:String,
                required:'no games bih!'
            },
            duration:{
                type:Number,
                required:'you need to set a goal for yourself'
            },
            weight:Number,
            reps:Number,
            sets:Number,
            distance:Number
        },
    ]
})
const CircuitTraining=animal.model('workout',workoutPlan);
module.exports=CircuitTraining;

//take my time and progress through this
//research mongoose virtual properties