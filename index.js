var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const Mysql = require('sync-mysql');
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static("views/static"));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var obj; 
const process = require('process');
const port = 8080;
app.listen(port);
console.log("Server Started on port 8080");

const con = new Mysql({
  // port : "12449",
   host: "db4free.net",
   user: "shivamk",
   password: "ravi*123#",
   database: "projecttsi"
 });



app.get('/', function(req, res){
    res.render("home",{home:"active",about:"",our_team:"",contact:""}) ;
  });
app.get('/about', function(req, res){
    res.render("about",{home:"",about:"active",our_team:"",contact:""}) ;
  });
app.get('/our-team', function(req, res){
    res.render("our-team",{home:"",about:"",our_team:"active",contact:""}) ;
  });
app.get('/contact', function(req, res){
    res.render("contact",{home:"",about:"",our_team:"",contact:"active"}) ;
  });

app.get('/BIO', (req,res) =>{
  res.render("IT/home");
})
app.get('/CSE', (req,res) =>{
  res.render("CSE/home");
})
app.get('/ECE', (req,res) =>{
  res.render("ECE/home");
})
app.get('/EEE', (req,res) =>{
  res.render("EEE/home");
})
app.get('/IT', (req,res) =>{
  res.render("IT/home");
})
app.get('/MECH', (req,res) =>{
  res.render("MECH/home");
})




//ECE Branch Starts Here

// For ECE Branch PYQ
app.get('/ECE/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=4){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./ECE/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/ECE/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=4){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./ECE/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/ECE/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=4){
var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./ECE/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});
app.get('/ECE/lab/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=4){
  var picker = "SELECT DISTINCT subject FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'lab'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM ECE WHERE semester ='"+sem+"'"+"AND "+"stream = 'ECE'"+"AND "+"type = 'lab'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
  res.render("./ECE/lab" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
  });
// ECE branch Ends Here 


//EEE Branch Starts Here

// For ECE Branch PYQ
app.get('/EEE/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./EEE/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/EEE/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./EEE/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/EEE/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=1){
var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./EEE/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});

app.get('/EEE/lab/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'lab'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM EEE WHERE semester ='"+sem+"'"+"AND "+"stream = 'EEE'"+"AND "+"type = 'lab'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
  res.render("./EEE/lab" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
  });


// ECE branch Ends Here 

//CSE Branch Starts Here

// For CSE Branch PYQ
app.get('/CSE/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./CSE/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For CSE Branch notes
app.get('/CSE/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./CSE/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For CSE Branch books
app.get('/CSE/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=1){
var picker = "SELECT DISTINCT subject FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./CSE/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});
app.get('/CSE/lab/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'lab'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM CSE WHERE semester ='"+sem+"'"+"AND "+"stream = 'CSE'"+"AND "+"type = 'lab'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
  res.render("./CSE/lab" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
  });
// CSE branch Ends Here 







//IT Branch Starts Here

// For IT Branch PYQ
app.get('/BIO/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./IT/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/BIO/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./IT/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/BIO/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=1){
var picker = "SELECT DISTINCT subject FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./IT/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});

app.get('/BIO/lab/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'lab'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM IT WHERE semester ='"+sem+"'"+"AND "+"stream = 'IT'"+"AND "+"type = 'lab'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
  res.render("./IT/lab" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
  });
// ECE branch Ends Here 




//ECE Branch Starts Here

// For ECE Branch PYQ
app.get('/MECH/PYQ/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=3){
  var picker = "SELECT DISTINCT subject FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'pyq'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'pyq'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./MECH/PYQ" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch notes
app.get('/MECH/notes/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'notes'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'notes'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
 res.render("./MECH/notes" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
});
// For ECE Branch books
app.get('/MECH/books/:sem', function(req, res){
var sem = req.params.sem;
   if(sem>=1 && sem<=1){
var picker = "SELECT DISTINCT subject FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'books'";
var ECE = con.query(picker);
var picker2 = "SELECT name , subject,semester,link FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'books'";
var ECE2 = con.query(picker2);
console.log(ECE2);
res.render("./MECH/books" , {ECE:ECE , ECE2:ECE2,sem:sem});
   }
   else{
     res.send("Wrong URL");
   }
});
app.get('/MECH/lab/:sem', function(req, res){
  var sem = req.params.sem;
     if(sem>=1 && sem<=1){
  var picker = "SELECT DISTINCT subject FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'lab'";
  var ECE = con.query(picker);
  var picker2 = "SELECT name , subject,semester,link FROM MECH WHERE semester ='"+sem+"'"+"AND "+"stream = 'MECH'"+"AND "+"type = 'lab'";
  var ECE2 = con.query(picker2);
  console.log(ECE2);
  res.render("./MECH/lab" , {ECE:ECE , ECE2:ECE2,sem:sem});
     }
     else{
       res.send("Wrong URL");
     }
  });
// ECE branch Ends Here 




