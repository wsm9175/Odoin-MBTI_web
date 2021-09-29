const express = require('express');
const path = require('path');

const app = express();//서버생성
app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname+'/js'));
app.use(express.static(__dirname+'/img'));

app.get('/', (req,res)=>{
      res.sendFile(__dirname + "/index.html");
});

app.listen(app.get('port'), () =>{
      console.log(app.get('port'), '번 포트에서 대기중');
});
