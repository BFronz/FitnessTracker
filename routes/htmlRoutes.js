// routes the navagation links between pages
var path = require("path");
const router = require("express").Router();

// html paths
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
    console.log("stats");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});  


module.exports = router;



