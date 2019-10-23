const net = require('net');



const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: 50541
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: Sam')
  }); 

  return conn;
}

module.exports = { connect };
