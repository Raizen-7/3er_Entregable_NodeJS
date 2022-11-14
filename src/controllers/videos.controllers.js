const VideosServices = require('../services/videos.services');

const createVideos = async (req, res, next) => {
    try {
      const { video, courses } = req.body;
      const result = await VideosServices.create(video, courses);
      res.status(201).json({ message: "new Video created" });
    } catch (error) {
      next({
        message: "something went wrong when creating the video",
        status: 400,
        errorContent: error,
      });
    }
  };
  const deleteVideo = async (req, res, next) => {
    try {
      const { video_id } = req.params;
      const result = await VideosServices.update(video_id, {status: "Deleted"});
      res.status(200).json( {
        status: 'success',
      });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    createVideos,
    deleteVideo
  };