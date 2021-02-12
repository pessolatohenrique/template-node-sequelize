const model = require("../models").Author;

class AuthorController {
  static async index(req, res) {
    try {
      const result = await model.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;
      const result = await model.findOne({ where: { id } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const result = await model.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

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

  static async restore(req, res) {
    try {
      const { id } = req.params;
      const restored = await model.restore({ where: { id } });

      console.log("restored", id);

      if (restored) {
        return res.status(200).json({ message: `author ${id} was restored` });
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = AuthorController;
