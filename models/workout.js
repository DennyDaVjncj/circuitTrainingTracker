const wildAnimal=require('mongoose');
const Schema=wildAnimal.Schema;
const opts = { toJSON: { virtuals: true } };//tutors suggest

const Workout=new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    exercises:[
        {
            type:{
                type:String,
                required:"soo, you're not gonna do anything today?"
            },
            name:{
                type:String,
                required:"soo, you don't even know what you're doing..."
            },
            duration:{
                type:Number,
                required:"if you don't set a goal, how will you know when you've arrived?"
            },
            weight:Number,
            reps:Number,
            sets:Number,
            distance:Number
        },
    ]
},opts)
Workout.virtual('totalDuration').get(function() {
    //return the total duration of all the exercises within schema, use 'this.exercises', use 4loop
  });  
const CircuitTraining=wildAnimal.model('workout',Workout);
module.exports=CircuitTraining;