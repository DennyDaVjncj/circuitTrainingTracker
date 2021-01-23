const xprss=require('express');
const wildAnimal=require('mongoose');
const PORT=process.env.PORT||5385;
const app=xprss();
const JP=require('morgan');

app.use(JP('dev'));
app.use(xprss.urlencoded({extended:true}));
app.use(xprss.json());
app.use(xprss.static('public'));

wildAnimal.connect(process.env.MONGODB_URI||'mongodb://localhost/trainingRegimen',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});
app.use(require('./routing/api'));
app.use(require('./routing/display'));
app.listen(PORT,()=>{
    console.log(`application live on port ${PORT}!`)
});