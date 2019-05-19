var express = require('express');

var router = express.Router();

/**
 * To connect Express with Mongo DB we are using here Mongoose.
 * Mongoose is an Object Related Mapping(ORM), a technique that programmers use to convert data among incompatible types. 
 * More specifically, ORMs mimic the actual database so a developer can operate within a programming language (e.g. JavaScript) 
 * without using a database query language (e.g. SQL) to interact with the database
 */
var mongoose = require('mongoose');

/**
 * opening a connection to Mongo DB.
 */
mongoose.connect('mongodb://maverick:Apple447@ds129143.mlab.com:29143/maverick');

/**
 * Defining Schema.
 * A schema is used to define all the proprties in the document.
 * (or) Represents the structure of a particular document.
 */

var structureSchema = new mongoose.Schema({
    header: {
        navbar: [
            {
                tabname: String
            }
        ]
    }
});

/**
 * Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
 */
var structures = mongoose.model('structures', structureSchema);

router.get('/', function(req, res) {
    /**
     * Mongoose gives us few basic methods to get stuff from a database.
     * .find(), .findOne(), .findById(), .where() 
     * syntax: .find([query], [callback]);
     */

    //If no query passed in means find everything from that collection 
    structures.find(function(err, data) {
        res.send(data);
    });
}); 

module.exports = router;