import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('db_empresa', 'postgres', 'cava',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5431

});
export  default sequelize;