const compass=require('express').Router();
const pathways=require('path');

compass.get('/exercise',(ask,echo)=>{
    echo.sendFile(pathways.join(__dirname,'../public/exercise.html'))
});
compass.get('/stats',(ask,echo)=>{
    echo.sendFile(pathways.join(__dirname,'../public/stats.html'))
})
    module.exports=compass;