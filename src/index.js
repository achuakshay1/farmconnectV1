const express=require('express');
const port=3000;
const app=express();
const pool = require('./db');
const dotenv=require('dotenv').config();

//dotenv.config();

const mysctKey = process.env.Secret_Key;

const jwt=require('jsonwebtoken');



app.use(express.json());

//routes

//login
app.post("/api/Login",function(req,res) {
    try{

        const user={id:3};
        const token=jwt.sign({user},mysctKey);
        res.json({
            token : token
        });
        
    }catch(err){

    }
});

function ensureToken(req,res,next) {
    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader !=='undefined') {
        const bearer=bearerHeader.split(" ");
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

//get all

app.get("/api/GetCustomers/",ensureToken,async(req,res)=>{
    try{

        jwt.verify(req.token,mysctKey,async(err,data)=>{
                        if(err){
                            res.sendStatus(403);
                        } else {
        const todo=await pool.query("select * from tbl_customer");
        res.json(todo.rows);
                        }
                    });
                        
    }catch(err){

    }
})

//get a specific
app.get("/api/GetCustomers/:id",async(req,res)=>{
    try{

        const {id}=req.params;
        const todo=await pool.query("select * from tbl_customer where id=$1",[id]);
        res.json(todo.rows[0]);
    }catch(err){

    }
})

//post
app.post("/api/post/SaveCustomer",async(req,res)=>{
    try {

        const {name}= req.body;
        const newTodo=await pool.query("INSERT INTO tbl_customer (name) values ($1) RETURNING *",
        [name]
        );
        res.json(newTodo.rows[0])

    } catch(err){
        console.log(err.message)
    }
})
//put

app.put("/api/UpdateCustomer/:id",async(req,res)=>{
    try{

        const {id}=req.params; //where
        const {name}=req.body; //set

        const update=await pool.query("update tbl_customer set name=$1 where id=$2",[name,id]);
        res.json("record updated succesfuly");
    }catch(err){

    }
})

//delete

app.delete("/api/DeleteCustomer/:id",async(req,res)=>{
    try{

        const {id}=req.params;
        const todo=await pool.query("delete from tbl_customer where id=$1",[id]);
        res.json("record has been deleted");
    }catch(err){
        console.log(err.message)

    }
})



app.listen(port, () =>
console.log('server running at http://localhost:'+port)


);