const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');

const any = connect();

setupInput(any);





