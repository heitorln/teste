'use strict';
const allUsers = {
  method: 'GET',
  path: '/users',
  config: {
    handler: () => {
      // return 'hello';
      // transformar depois em =>
      try {

        const mysql = require('mysql');
        const connection = require('../connection.json');
        const client = mysql.createConnection(connection);
        
        client.connect(function(err) {
          if (err) {
            throw err;
          }        
          console.log('connected to db');
        });

        client.query('SELECET * FROM users', function(errors, results, fields) {
          return results;
        });
      } catch(err) {
        return err;
      }
    },
  },
};

module.exports = {
  allUsers,
};
