import {Sequelize} from "sequelize";

const db = new Sequelize('adam_table','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;