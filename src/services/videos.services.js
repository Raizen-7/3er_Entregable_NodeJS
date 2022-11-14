const Courses = require("../models/courses.models");

const Videos = require("../models/videos.models");

class VideosServices {
    static async create(video, courses) {
        try {
          const videoResult = await Videos.create(video);
         
          const { id } = videoResult;
          courses.forEach(
            async (course) =>
              await Courses.create({ courseId: course, videoId: id })
          );
          return curseResult;
        } catch (error) {
          throw error;
        }
    }
    static async updateCourse(video_id) {
        try {
          const result = await Videos.update(
            { status: "Deleted" },
            {
              where: { video_id },
            }
          );
          return result;
        } catch (error) {
          throw error;
        }
      }
};

module.exports = VideosServices;