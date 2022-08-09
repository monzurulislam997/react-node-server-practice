const express = require('express');
const app = express();
const port = process.env.PORT || 3300;
const cors = require("cors");
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello  Bangladesh")
})

const users = [
    { id: '1', name: "monzrul", phone: "0182282852" },
    { id: '2', name: "Afrin", phone: "0545452" },
    { id: '4', name: "Mustkan", phone: "017547542" },
    { id: '3', name: "Mosfiqur", phone: "0182422852" },
    { id: '5', name: "Mahmuddulla", phone: "01875752" },
]
app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }

    else {
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id == id)
    res.send(user)
})
app.post('/user', (req, res) => {

    const user = req.body;
    user.id = users.length + 1;
    users.push(user)

    res.send(user)
})


app.get('/pens', (req, res) => {
    res.send(["matadoor", "pin Point", "Janoni"])
})
app.listen(port, () => {
    console.log("it is working")
})