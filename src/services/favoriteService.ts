import { Favorite } from "../models";

export const favoriteService = {
  findByUserId: async (userId: number) => {
    const favorite = await Favorite.findAll({
      attributes: [["user_id", "userId"]],
      where: { userId: userId },
      include: {
        association: "Course",
        attributes: [
          "id",
          "name",
          "synopsis",
          ["thumbnail_url", "thumbnailUrl"],
        ],
      },
    });

    return {
      userId,
      courses: favorite.map(favorite => favorite.courseId)
    }
  },

  create: async (userId: number, courseId: number) => {
    const favorite = await Favorite.create({
      userId,
      courseId,
    });

    return favorite;
  },
};
