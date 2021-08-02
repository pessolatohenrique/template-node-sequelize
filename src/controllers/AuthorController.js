const model = require("../models").Author;

/**
 * Represents Controller to Author Requests
 */
class AuthorController {
  /**
   * list all authors
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {array} result list of authors
   */
  static async index(req, res) {
    try {
      const result = await model.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * show specific author and respective books
   * @param {object} req request from express
   * @param {object} res response from express
   * @result {object} response for specific author
   */
  static async show(req, res) {
    try {
      const { id } = req.params;
      const result = await model.findOne({ where: { id } });
      const books = await result.getBooks();

      const response = {
        result,
        books: [...books],
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * insert author into the database
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {object} result with inserted author
   */
  static async store(req, res) {
    try {
      const result = await model.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * update specific user
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {object} result with updated author
   */
  static async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await model.update(req.body, {
        where: { id },
      });

      if (updated) {
        const result = await model.findOne({ where: { id } });
        return res.status(200).json(result);
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * delete specific author
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {object} message with success or error after delete
   */
  static async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await model.destroy({ where: { id } });

      if (deleted) {
        return res.status(200).json({ message: `author ${id} was deleted` });
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * restore destroyed author
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {object} message with success or error after restore
   */
  static async restore(req, res) {
    try {
      const { id } = req.params;
      const restored = await model.restore({ where: { id } });

      if (restored) {
        return res.status(200).json({ message: `author ${id} was restored` });
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  /**
   * get books from specific author
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {array} list of books
   */
  static async getBooks(req, res) {
    try {
      const { id } = req.params;
      const author = await model.findOne({ where: { id } });
      const books = await author.getBooks();
      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = AuthorController;
