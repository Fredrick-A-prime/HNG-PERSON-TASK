const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    Name: {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            minlength: [3, 'First name must be at least 3 characters'],
            maxlength: [20, 'First name must be less than 20 characters']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            minlength: [3, 'Last name must be at least 3 characters'],
            maxlength: [20, 'Last name must be less than 20 characters']
        }
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    }
},
        {
            timestamps: true
        }
);

const Person = mongoose.model('person', PersonSchema);
module.exports = Person;