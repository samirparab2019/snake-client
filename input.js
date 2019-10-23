let connection;

const handleUserInput = function(key) {

  
  if (key === 'w') { connection.write('Move: up')};
  if (key === 'a') { connection.write('Move: left')};
  if (key === 's') { connection.write('Move: down')};
  if (key === 'd') { connection.write('Move: right')};
  
  // \u0003 maps to ctrl+c input

if (key === '\u0003') {
  console.log(`Thanks for using me, ciao!`);
  process.exit();
}

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}
setupInput();

module.exports = { setupInput }