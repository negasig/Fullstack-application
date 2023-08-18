const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())
let corsOptions = {
  origin : ['http://localhost:3000/'],
}
app.use(cors(corsOptions))
app.use(loggingMiddleware)
const users=[
{
  id:1,
username:"negasi",
password:"1234"
},
{
  id:2,
  username:"Zeru",
  password:"12345"
  },
{
  id:3,
username:"rezene",
password:"123"
}
];
app.get("/", (req, res) => {
  res.send("Home Page")
})
app.get("/userslist",(req, res)=>{
res.send(users);
})
app.get("/users", authorizeUsersAccess, (req, res) => {
    res.send(
        "<html>"+
        "<header>"+
        "<title>"+"users page"+"</title>"+
        "</header>"+
        "<body style='background-color: #ddd; text-align:center'>"+"<h1>"+"Users page"+"</h1>"+"<body/>"+
        "<h3>"+"Welcome My Usrs"+"</h3>"+
        "</html>")
      
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

function authorizeUsersAccess(req, res, next) {
  if(req.query.admin==='admin'&& req.query.password==='123'){
    next()
  }
  else {
    res.send(
        "<html>"+
        "<body style='background-color: black; text-align:center'>"+"<h1 style ='color:white'>"+"Unauthorized Access"+"</h1>"
        +"<h3 style ='color:white'>"+"Try with corect credientials"+"</h3>"+
        "<body/>"+
        "</html>")
  }

}


app.listen(9988, ()=> console.log(" server is started")
);
