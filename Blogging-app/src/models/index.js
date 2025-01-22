import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Blogging', 'postgres', 'subhanforpostgres', {
    host: 'localhost',
    dialect:  'postgres',
    logging: false, 
  });

export { sequelize };