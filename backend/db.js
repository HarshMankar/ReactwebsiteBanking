const mysql=require("mysql2");
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Password",
    database:"login",
})
module.exports=db;