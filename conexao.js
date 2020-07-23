var mysql = require('mysql');
/*
var connection = mysql.createConnection({
    host     : '10.0.2.9',
    user     : 'ura',
    password : 'ask123',
    database : 'sema',
    port     : "3306"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
*/

//- MYSQL Module
try{
    var mysql_npm = require('mysql');
}catch(err){
    console.log("Cannot find `mysql` module. Is it installed ? Try `npm install mysql` or `npm install`.");
}

//- Connection configuration
var db_config = {
    host         : '10.0.2.9',
    user         : 'ura',
    password     : 'ask123',
    database     : 'sema'
};

//- Create the connection variable
var connection = mysql_npm.createConnection(db_config);

//- Establish a new connection
connection.connect(function(err){
    if(err) {
        // mysqlErrorHandling(connection, err);
        console.log("\n\t *** Cannot establish a connection with the database. ***");

        connection = reconnect(connection);
    }else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});

//- Reconnection function
function reconnect(connection){
    console.log("\n New connection tentative...");

    //- Destroy the current connection variable
    if(connection) connection.destroy();

    //- Create a new one
    var connection = mysql_npm.createConnection(db_config);

    //- Try to reconnect
    connection.connect(function(err){
        if(err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect, 2000);
        }else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}

//- Error listener
connection.on('error', function(err) {

    //- The server close the connection.
    if(err.code === "PROTOCOL_CONNECTION_LOST"){    
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        connection = reconnect(connection);
    }

    //- Connection in closing
    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        connection = reconnect(connection);
    }

    //- Fatal error : connection variable must be recreated
    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        connection = reconnect(connection);
    }

    //- Error because a connection is already being established
    else if(err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
    }

    //- Anything else
    else{
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        connection = reconnect(connection);
    }

});

module.exports = connection;