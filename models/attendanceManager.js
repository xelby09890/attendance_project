const mongoose = require('mongoose');

// Defining the schema for the attendance manager
const attendanceManagerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['Attendance Manager', 'Admin'],
        default: 'Attendance Manager',
    },
    
    // timestamps: true,
});

const AttendanceManager = mongoose.model('AttendanceManager', attendanceManagerSchema);
module.exports = AttendanceManager;