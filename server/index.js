const express = require('express')
const app = express()
const port = 5000

const { User } = require("./models/User");
const bodyParser = require('body-parser');

//application/x-ww-from-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://root:root@hkt.93o62jg.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


//////////////////////////회원가입 라우터

app.get('/',(req,res) => res.send('Hello World!'))

app.post('/register', async (req, res) =>{
    //회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body)

   await user.save()
      .then(() => {
        res.status(200).json({
          success: true,
        });
      })
      .catch((err) => {
        console.error(err);
        res.json({
          success: false,
          err: err,
        });
      });
  });

app.listen(port,() => console.log(`Example app listening on port ${port}`))