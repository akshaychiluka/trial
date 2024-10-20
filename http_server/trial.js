const express=require("express")
const bodyParser=require("body-parser");
const app=express();
const port=3001;

const user=[{
    name: "akshay",
    kidney:[{
     healthy:"yes"
    },
    {
        healthy:"yes"
    }]
}]
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    const result=user[0].kidney
    res.send(result)
})
app.post("/",(req,res)=>{
    const x=req.body.isHealthy
    user[0].kidney.push({
        healthy: x
    })
    res.send("Done")
    
})
app.put("/",(req,res)=>{
    for(let i=0;i<user[0].kidney.length;i++)
    {
        user[0].kidney[i].healthy="no";
    }
    res.send("Done1")
})
app.delete("/",(req,res)=>{
    
})

app.listen(3001)