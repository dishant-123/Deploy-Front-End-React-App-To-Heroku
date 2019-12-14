const express = require('express');
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');
var arr=  require('./db.json');
const path = require('path');
require('dotenv').config()
app.use(cors());
 app.use(bodyParser.json()); 
 
app.post('/add' ,(req,res) =>{
    console.log(req.body)
    const find = arr.find((info) => info.email ===req.body.email && info.password ===req.body.password);
    // console.log(find)
    if(find){
        return res.json({
            message : 'done'
        })
    }
    else{
        return res.json({
            message : 'not done'
        })
    }
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','build','index.html'));
})
const PORT = process.env.PORT || 3007
app.listen(PORT, () =>{
    console.log('Connected');
})

