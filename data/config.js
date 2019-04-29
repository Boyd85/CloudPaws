const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'cloudpaws1.ct2ixgqxd9df.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'test0011',
    database: 'cloudpaws',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
