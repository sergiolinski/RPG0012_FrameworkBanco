const mongoose = require('mongoose');

const options = {
    dbName: 'livraria',
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect('mongodb://127.0.0.1:27017', options)

.then(() => {
    console.log("Conectado ao MongoDB!");
})
.catch((err) => console.log(err));
module.exports = mongoose;