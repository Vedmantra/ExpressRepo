const mongoose = require("mongoose")

// mongoose
//     .connect("mongodb://127.0.0.1:27017/mongopractice")
//     .then(() => console.log('Mongodb Connected'))
//     .catch(err => console.log(err))
// 127.0.0.1 => localhost
// 27017 => port for mongodb
// mongopractice => database name

mongoose
    .connect("mongodb+srv://vedmantrabhosale:PQxAtzTewdKL2GRe@cluster1.r6c01vf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err))

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("user", userSchema)