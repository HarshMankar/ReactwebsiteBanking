
const express =require("express");
const cors=require("cors");

const db=require("./db");
const { response } = require("express");

const app=express();

const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/gett/:id",(req,res)=>{
    
    const i=req.params.id;
    const t="SELECT * from account WHERE id=?";
    db.query(t,[i],(err,response)=>{
        if(err){
            console.log(err);
        }
        console.log(response);

        res.send(response);
    })
})
app.put("/sendd",(req,res)=>{
    
    const s=req.body.sender;
    const r=req.body.recive;
    const m=req.body.money;
    const ttt="INSERT into neww(Sender,Reciver,Transfermoney) VALUES(?,?,?)";
    db.query(ttt,[s,r,m],(err,response)=>{
        if(err){
            console.log(err);
        }
        console.log(response);

        res.send("value inserted");
    
    })
})
app.get("/news",(req,res)=>{
    const t="select * from neww";
    db.query(t,(err,response)=>{
        if(err){
            console.log(err);
        }
        res.send(response);
    })
})
app.get("/posts",(req,res)=>{
    const t="select * from account";
    db.query(t,(err,response)=>{
        if(err){
            console.log(err);
        }
        res.send(response);
    })
})
app.listen(3000,()=>{
    console.log("running on port 8080");}

)