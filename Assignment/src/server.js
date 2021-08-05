const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const DBURL ="mongodb+srv://kaushal:e47sLa1zTsd7uQU1@cluster0.htqqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
 
mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected successfully')
}).catch((err) => {
    console.log(err)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running on ", "http://localhost:" + PORT)
})
