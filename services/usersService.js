const UsersRepository = require("../repositories/usersRepository");

class UsersService {
  static getUsers = (next) => {
    try {
      return UsersRepository.getUsers(next);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = (id, next) => {
    try {
      return UsersRepository.getUserById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static createUser = (body, next) => {
    try {
      return UsersRepository.createUser(body, next);
    } catch (error) {
      next(error);
    }
  };

  static updateUser = (body, params, next) => {
    try {
      return UsersRepository.updateUser(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = (id, next) => {
    try {
      return UsersRepository.deleteUser(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersService;
