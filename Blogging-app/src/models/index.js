const sequelize = new Sequelize('Blogging', 'postgres', 'subhanforpostgres', {
    host: 'localhost',
    dialect:  'postgres' 
  });

export { sequelize };