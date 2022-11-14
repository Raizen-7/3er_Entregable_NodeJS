const { Router } = require("express");

//Controllers
const { 
    createVideos,
    deleteVideo
} = require("../controllers/videos.controllers");

const router = Router();

router.post("/videos", createVideos);

router.put("/videos", deleteVideo);

module.exports = router;