// (runner), inicia todo
require('dotenv').config();
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
const app = require('./app');
require('./database');


async function main() {
    await app.listen(app.get('port'));
    console.log('server on port',app.get('port'));
}

main();