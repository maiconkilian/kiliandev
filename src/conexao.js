const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-44-206-11-200.compute-1.amazonaws.com',
        user: 'yzslafmorxjckx',
        password: '6173b60e0db2c69b85fc0c5a328214edf688138e97ea3430533e1c028c931884',
        database: 'dbghbv0uovoq3l',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex;



// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'localhost',
//         user: 'postgres',
//         password: '1234',
//         database: 'market_cubos'
//     }
// });

// module.exports = knex;

