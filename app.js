const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js");

const app = express()
var items =['Buy Food','Cook Food','Eat Food'];
var workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get('/', (req, res) =>{ 
    
    const day = date()
   console.log(day)
        res.render('list', {listTitle: day, newListItems: items})
    });

    app.post('/', (req, res)=>{
       const item =req.body.newItem;
       //console.log(req.body.list)
       if(req.body.list === "Work"){workItems = [...workItems, item]
        res.redirect('/work');}else {
            items = [...items, item];
            res.redirect('/');
        }
 
       
    })

  app.get('/work', (req,res)=>{
      res.render('list', {listTitle:"Work List", newListItems: workItems})
  })

  app.get('/about', (req,res)=>{
    res.render('about')
})

 


const port = process.env.PORT ||   3000
app.listen(port, () => console.log(`todolist app listening at http://localhost:${port}`))
