// routes the api's within pages
// need to create one for every fetch in api.js
const router  = require("express").Router();
const Workout = require("../models/workoutModel.js")


// getLastWorkout()
router.get("/api/workouts", (req, res) => {
    console.log("getLastWorkout");
    Workout.find({}).sort({date: -1})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// getWorkoutsInRange() get all works
router.get("/api/workouts/range", (req, res) => {
    console.log("getWorkoutsInRange");
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// addExercise() is a put
router.put("/api/workouts/:id", (req, res) => {
    console.log("addExercise: ",req.body);
    Workout.update(
        { _id: req.params.id },
        { $push: { exercises: req.body } 
    }).then(function (Workout) {
        res.json(Workout)
    })
})


// createWorkout() is a post
router.post("/api/workouts", ({body}, res) => {    
    console.log("createWorkout: ",req.body);
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  
module.exports = router;

