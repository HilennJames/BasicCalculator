var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = express.Router();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use((res,req,next)=>{    
    res.header("Access-Contro-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

//GET 
api.get('/calculate', (req, res) => {      
     res.json("connection success");     
 })

 //POST
 app.use(cors());
app.use(bodyParser.json());
app.use((res,req,next)=>{    
    res.header("Access-Contro-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

//create a genrtic route to test that express is working 
// get HTTP method followed by the route Then in brackets the  request followed buy the response in an arrow function  line 24 

//variable to see the out in postman for testing  line 21
var hi = [{ answer : '25', answer2 :'10', operation :'subtr'}, ]



//BELOW CREATING A NEW EXPRESS ROUTE called api 
var api = express.Router();


 //Get to pull data from backend server endpoint
api.get('/calculate', (req, res) => {
   // send a response that says something specfiically in json    
    res.json(hi);
     //res.send(hi);
})

//Post to send data to backend and server - api endpoint 
api.post('/calculate', (req, res) => {

// Convert request inputs into varibales 
    a = req.body.input
    b = req.body.input2
    c = req.body.operator
     
    /// convert string to numbers using '+'
        if (c === 'subtr'){
            result = +a - +b
        } else if ( c === 'add'){
            result=  +a + +b
        } 

    res.json({message: result})
})
app.use('/api', api);
app.listen(4300);
