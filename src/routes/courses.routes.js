const { Router } = require('express');

//Controllers
const {
    getAllCurses,
    getCursesCategoriesAndVideos,
    createCourse,
    updateCourse
} = require('../controllers/courses.controllers');

const router = Router();

/***************routes by get***************************/
router.get("/curses", getAllCurses);

router.get("/curses", getCursesCategoriesAndVideos);
/***************routes by get***************************/
router.post("/curses", createCourse);

router.put("/curses/:id", updateCourse);

module.exports = router;