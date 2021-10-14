const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      // For the schema of this attribute, define type and default
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a Type of Excersize"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an Excersize "
        },
        duration: {
          type: Number,
          trim: true,
          required: "Please Enter the Duration of Excersize"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        },
      },
    ],
  },

);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
