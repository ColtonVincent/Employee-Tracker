const mysql = require('mysql2');




const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'Aftonrose2022!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  module.exports = db