const express = require("express")
const fs = require("fs")

const PORT = 3000;


const app = express();

app.get("/", (req,res) => {
    res.send("My first server")
})

5

const machines = fs.readFile(`${__dirname}/../data/data.json`, 'utf-8', (err,data) => {
    console.log(data)

    const jsonData = JSON.parse(data)
    let id=0;
    const newData = jsonData.map(item=>{
        id++;
       
    })

fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(newData), (err) => {

})



app.get('/api/names', (req, res) => {

    fs.readFile(`${__dirname}/../data/data.json`,(err, data) =>{
        res.status(200).send("All the name")

    })

})



})

app.listen(PORT, () =>{
    console.log("server started successfully")
})
