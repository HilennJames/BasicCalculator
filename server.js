var express = require('express');
var app = express();
var api = express.Router();

const PORT = 4300;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use((res,req,next)=>{    
    res.header("Access-Contro-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})

//GET
api.get('/api', (req, res) => {
     res.json("connection success");
 })

api.route('/calculate')
        .post((req, res) => {
            // Convert request inputs into varibales
            console.log(req.body)
             a = parseInt(req.body.input);
             b = parseInt(req.body.input2);
             c = req.body.operator;
            
            /// convert string to numbers using '+'

          
              if (c ='-'){
                 result = a-b;
               } 
               if ( c = '+'){
                 result =  a+b;
               }

            res.json({message: result})

        })

app.use('/api', api);
app.listen(PORT);
