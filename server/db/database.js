var pgp = require('pg-promise')(/*options*/);

var cn = {
    host: 'ec2-54-227-255-240.compute-1.amazonaws.com',
    port: 5432,
    database: 'd9798pd02ordli',
    user: 'voksiwgkmieraq',
    password: 'uqpa5tBRBYQkoZZaCodIe7oq81'
};

var full = 'postgres://voksiwgkmieraq:uqpa5tBRBYQkoZZaCodIe7oq81@ec2-54-227-255-240.compute-1.amazonaws.com:5432/d9798pd02ordli?ssl=true';

module.exports = pgp(full);