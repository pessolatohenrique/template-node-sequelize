const model = require("../models").User;
const tokens = require("../auth/tokens");
const { Email } = require("../utils/Email");

/**
 * Represents Controller to User Requests
 */
class UserController {
  /**
   * creates token and refresh token
   * @param {object} req request from express
   * @param {object} res response from express
   * @return {object} response with access token and refresh token
   */
  static async login(req, res) {
    try {
      const { user } = req;
      const token = tokens.access.create(user.id);
      const refreshToken = await tokens.refresh.create(user.id);
      res.set({ Authorization: token });
      return res.status(200).json({ accessToken: token, refreshToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async testEmail(req, res) {
    const emailObj = new Email();
    emailObj.send();
    return res.status(200).json("alo");
  }
}

module.exports = UserController;
