var knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host : process.env.DB_POSTGRE_HOST,
        user : process.env.DB_POSTGRE_USER,
        password : process.env.DB_POSTGRE_PASS,
        database : process.env.DB_POSTGRE_DB
    }
});

module.exports = knex;
