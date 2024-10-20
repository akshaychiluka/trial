const express =require("express");
const bodyParser=require("body-parser");
const port =3000;
const app=express();

app.use(bodyParser.json()); 

function add(a,b){
    return a+b;
}

app.get('/', function(req,res){
    const a=Number(req.query.a);
    const b=Number(req.query.b);
    const result=add(a,b);
    res.send(result.toString());
    })
app.post('/asd',(req,res)=>{
    console.log(req.body);
    res.send("<h1>head</h1>")
})
app.listen(port)