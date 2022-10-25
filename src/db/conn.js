const mongoose = require('mongoose');
// creating a database
mongoose.connect("mongodb://localhost/nodeweb",{
    useNewUrlParser:true,useUnifiedTopology:true,
})
.then(()=> console.log("connection was susscifully"))
.catch((error)=>{
console.log(error); 
});  
 
// mongoose.connect('mongodb://localhost/dbname', function(err) {
//     if (err)throw err;
//     else(console.log("connection create"))
    
// });

