const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full Name is required.'
    },
    module: {
        type: String
    },
    grade: {
        type: Number
    },
    score: {
        type: Number
    },
    mobile:{
        type: String
    },
    email:{
        type:String
    }
});

// Custom validation for email
studentSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Student', studentSchema);