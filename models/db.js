const mysql = require ('mysql2/promise')
const pool = mysql.createPool ({
    host: "mysql-angelicaperez.alwaysdata.net",
    user: "329898_angelica",
    password: "Angelicpzs08",
    database: "angelicaperez_08",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
module.exports = pool;