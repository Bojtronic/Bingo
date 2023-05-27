const Pool = require("pg").Pool;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "bingo",
    password: "xxx",
    port: 5432,    
});

module.exports = pool;