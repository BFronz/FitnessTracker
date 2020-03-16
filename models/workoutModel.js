var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter Exercise Type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter Exercise Name"
        },
        duration: {
          type: Number,
          required: "Enter Exercise Duration"
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
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
