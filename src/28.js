// Student model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define student schema
var StudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

// Generate a unique identifier for the student
StudentSchema.virtual('student_id').get(function() {
  return this.id;
});

// Export the student model
module.exports = mongoose.model('Student', StudentSchema);
