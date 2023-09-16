const mongoose = require('mongoose');
// const validator = require('validator');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    Name: {
        type: String,
        required: [true,  'name is required'],
        minlength: [3, 'name must be at least 3 characters'],
        maxlength: [20, 'name must be less than 20 characters']
    }
},
    {
            timestamps: true
    }
);

const Person = mongoose.model('person', PersonSchema);
module.exports = Person;