//Configuración de la base de datos

const mongoose = require('mongoose');
//console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI
:'0.0.0.0';
  
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    server: { 
        socketOptions: { 
        keepAlive: 300000, connectTimeoutMS: 30000 
        } 
    },
    replset: { 
        socketOptions: { 
        keepAlive: 300000, 
        connectTimeoutMS : 30000 
        } 
    } 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});