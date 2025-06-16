const express = require('express')
const app = express()
const port = 8080
const frontendLink = process.env.frontendLink

const userModel = require("./usermodel")

const cors = require("cors")
const corsOptions = {
    origin: frontendLink,
}
app.use(cors(corsOptions))

// Middleware
app.use(function (req, res, next) {
    console.log('hey')
    next()
})

app.get('/', (req, res) => {
    res.json('Hello World! I am Vedmantra')
})

app.get('/about', (req, res) => {
    res.json('This is about Page')
})

// Dynamic Route
app.get('/about/:username', (req, res) => {
    res.json(`Hello From ${req.params.username}`)
})
// if => http://localhost:8080/about/ved
// output => Hello From ved

// CRUD 
app.get('/create', async (req, res) => {
    // const createdUser = await userModel.create({
    //     name: "vedmantra",
    //     age: 20,
    //     gender: "male"
    // },{
    //     name: "vedmantra2",
    //     age: 20,
    //     gender: "male"
    // })
    const createdUser = await userModel.create({
        // name: "vedmantra2",
        age: 20,
        gender: "malew",
    })
    console.log('createdUser', createdUser)
    res.send(createdUser)
})

app.get('/readAll', async (req, res) => {
    const allUsers = await userModel.find()
    console.log('allUsers', allUsers)
    res.send(allUsers)
})

app.get('/readOne', async (req, res) => {
    const oneUser = await userModel.findOne({ age: 21 })
    console.log('oneUser', oneUser)
    res.send(oneUser)
})

app.get('/update', async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate(
        { name: "vedmantra" }, // find this
        { age: 21 }, // update this
        { new: true } // dont know why to write, but write
    )
    console.log('updatedUser', updatedUser)
    res.send(updatedUser)
})


app.get('/delete', async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({ age: 21 })
    console.log(`${deletedUser.name} your account has deleted`)
    res.send(`${deletedUser.name} your account has deleted`)
})

app.listen(port, () => {
    console.log(`Server Started at port 8080`)
})