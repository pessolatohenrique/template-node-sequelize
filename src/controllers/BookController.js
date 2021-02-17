const sequelize = require("sequelize");
const model = require("../models").Book;
const { Op } = require("sequelize");

class BookController {
  static async index(req, res) {
    try {
      const { search } = req.query;
      const result = await model.findAll({
        where: {
          name: {
            [Op.like]: "%" + search + "%",
          },
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async sumPagesByAuthor(req, res) {
    try {
      const result = await model.findAll({
        attributes: [
          "Author.name",
          [sequelize.fn("SUM", sequelize.col("pages")), "Pages"],
        ],
        include: ["Author"],
        group: ["Author.name"],
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async countByAuthor(req, res) {
    try {
      const result = await model.findAll({
        attributes: [
          "Author.name",
          [sequelize.fn("COUNT", sequelize.col("Author.id")), "AuthorCount"],
        ],
        include: ["Author"],
        group: ["Author.name"],
        raw: true,
      });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = BookController;
