const mongoose = require('mongoose');



const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}

const db = "mongodb+srv://root:root@cluster0.83vrc.mongodb.net/myportfolio?retryWrites=true&w=majority"
mongoose.connect(db, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

