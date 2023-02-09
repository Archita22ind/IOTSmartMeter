
const Sequelize = require('sequelize');

//add the SQL database connection details below

const seq = new Sequelize('<dbname>','<username>','<password>',
    {dialect:'mysql',host:'127.0.0.1'});
module.exports = seq;
