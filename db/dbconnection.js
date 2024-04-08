const mysql = require("mysql");

let connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host:"bxe2obqoe2qeouexiucl-mysql.services.clever-cloud.com",
    user:"uj6ycuh0eadgwo97",
    database:"bxe2obqoe2qeouexiucl",
    password:"3T2us7lhA8zzh8xUq09O",
    port:"3306"
  });

  connection.connect((err) => {
    if (err) {
      console.log('Error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // Attempt to reconnect after a delay
    }
    console.log("DATABASE IS CONNECTED");
  });

  connection.on('error', function (err) {
    console.log('DB error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // Reconnect if the connection is lost
    } else {
      throw err;
    }
  });
}

handleDisconnect(); // Call the function to initiate the connection

module.exports = connection;
