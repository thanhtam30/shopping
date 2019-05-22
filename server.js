const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport=require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(passport.initialize());

mongoose.connect('mongodb://admin1:admin1@ds255754.mlab.com:55754/websitevitinh',{useNewUrlParser:true,useFindAndModify:false})
.then(()=>console.log('Connect success'))
.catch(console.log)
var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));
app.use(session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave:false,
    store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
    //ttl: 2 days * 24 hours * 60 minutes * 60 seconds
  }))
  //su dung cors
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header ('Access-Control-Allow-Headers', 'Content-Type')
    next();
  });
  
app.use("/api/danhmuc", require("./routes/api/danhmuc"));
app.use("/api/sanpham", require("./routes/api/sanpham"));
app.use("/api/nhasx", require("./routes/api/nhasx"));
app.use("/api/cart", require("./routes/api/cart"));
app.use('/api/user',require('./routes/api/user'));


const port=process.env.PORT||5000;
app.listen(port,console.log(`Server started on port ${port}`))