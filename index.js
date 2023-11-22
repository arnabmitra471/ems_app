import express from 'express'
import mysql from 'mysql'
const app = express();

const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})
const dbcon = mysql.createConnection({
    "user": "root",
    "host": "localhost",
    password: "",
    database: "employee_ms"
})
app.get('/users',(req,res)=>{
    const query = "select * from employees";
    dbcon.query(query,(err,data)=>{
        if(err)
        {
            console.log(err);
            return res.json(err)
        }
        return res.json(data)
    })
})
app.post("/create",(req,res)=>{
    
})
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})