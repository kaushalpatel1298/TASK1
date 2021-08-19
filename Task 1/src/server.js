const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config({ path: `${__dirname}/config.env` })

const DB_URL =process.env.DB_URL.replace('<password>', process.env.PASSWORD)
console.log("DB_URL")

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected successfully')
}).catch((err) => {
    console.log(err)
})

const PORT = process.env.PORT || 5000
app.listen(PORT ,() => {
console.log('app started');
});