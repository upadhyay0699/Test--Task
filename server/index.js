const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "registration"
})

app.post('/register', (req, res) => {
    const name= req.body.name;
    const dob= req.body.dob;
    const sex=  req.body.sex;
    const number= req.body.number;
    const govtid= req.body.govtid;
    const idnumber= req.body.idnumber;
    const title= req.body.title;
    const guardianname= req.body.guardianname;
    const email= req.body.email;
    const emergencycontact= req.body.emergencycontact;
    const address= req.body.address;
    const city= req.body.city;
    const state= req.body.state;
    const pincode= req.body.pincode;
    const country= req.body.country;
    const occupation=  req.body.occupation;
    const religion= req.body.religion;
    const marital=  req.body.marital;
    const bloodgroup=   req.body.bloodgroup;
    const nationality=req.body.nationality;

    

    con.query("INSERT INTO register (name, dob, sex, number, govtid, idnumber, title, guardianname, email, emergencycontact, address, city, state, pincode, country, occupation, religion, marital, bloodgroup, nationality ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, dob, sex, number, govtid, idnumber, title, guardianname, email, emergencycontact, address, city, state, pincode, country, occupation, religion, marital, bloodgroup, nationality], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT DETAILS!"})
            }
        }
    )
})

app.get('/users', (req, res) => {
    con.query("SELECT * FROM register", (err, result) => {
        if(result){
            res.send(result);
        }else{
            res.send({message: "Data Not Found!"})
        }
    })
 })



app.listen(3003, () => {
    console.log("running backend serve");
})