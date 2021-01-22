const xprss=require('express');
const wildAnimal=require('mongoose');
const PORT=process.env.PORT||5385;
const app=xprss();

app.use(xprss.urlencoded({extended:true}));
app.use(xprss.json());
app.use(xprss.static('public'));

wildAnimal.connect(process.env.MONGODB_URI||'mongodb://localhost/workout',{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});
app.use(require('./routing/api'));
app.listen(PORT,()=>{
    console.log(`application live on port ${PORT}!`)
});
//configure the entire server, model from mini project