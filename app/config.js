var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/networking.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('attendees').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('attendees', function (attendee) {    //creates 'urls' table
      attendee.increments('id').primary();
      attendee.string('title', 10);
      attendee.string('firstname', 255);
      attendee.string('lastname', 255);
      attendee.integer('seniority');
      // attendee.integer('categoryId').references('categories.id');
      // attendee.integer('organizationId').references('organizations.id');
      attendee.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
