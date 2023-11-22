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
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let salary = req.body.salary
    let address = req.body.address

    dbcon.query("INSERT INTO employees (name,email,password,salary,address) values(?,?,?,?,?)",[name,email,password,salary,address],
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send("You have registered successfully")
            console.log(result)
        }
    })
})
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})