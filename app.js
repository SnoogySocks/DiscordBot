const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "s8gpph9v",
    database: "girrafe"
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("girrafe connected");
});

module.exports = db;