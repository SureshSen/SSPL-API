
const { Client } = require('pg')
const dontenv = require('dotenv');
dontenv.config({ path: '../config.env' });
const client = new Client({
    host: "localhost",//process.env.HOST,
    port: 5432,//process.env.PORT,
    user: "postgres",//process.env.USER,
    password:"admin@123",// process.env.PASWORD,
    database: "ssplbot"//process.env.DATABASE
});
client.connect()
    .then(() => {
        console.log('Database connection successfully');
    })
    .catch((error) => {
        console.log(error);
    });
module.exports = client;