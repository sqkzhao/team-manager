const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/team_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connecting eastablished"))
    .catch(err => console.log(err))

