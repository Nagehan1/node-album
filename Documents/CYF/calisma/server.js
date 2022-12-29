const express = require("express")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
        origin: 'http://localhost:3000',
    }
));
let users=[{id:1, name:"John", email:"j@mail.com"}]

app.get("/users",(req,res)=>{
    res.send(users)
})
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    let user = users.filter((user) => user.id === (userId));
    res.send(user);
})

app.post("/users",(req,res)=>{
    let user={id:users.length+1, name:req.body.name, email:req.body.email}
    users.push(user)
    res.send(users)
})


app.delete("/users/:id",(req,res)=>{
    let user = users.find(user => user.id === parseInt(req.params.id));
if (!user) {
    res.status(404).send("User not found");
}
let index = users.indexOf(user);
users.splice(index, 1);
res.send(user);
})

  
app.put("/users/:id",(req,res)=>{
    let user = users.find(user => user.id === parseInt(req.params.id));
if (!user) {
    res.status(404).send("User not found");
}
user.name = req.body.name;
user.email = req.body.email;
res.send(user);
})




app.listen(3001, () => {
    console.log("Server started on port 3001");
}) 

