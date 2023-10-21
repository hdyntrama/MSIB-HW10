const pool = require("../config");

class Users {
  static getUsers = async (next) => {
    try {
      const findQuery = `SELECT * FROM users;`;
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (error) {
      next(error);
    }
  };

  static getUserById = async (id, next) => {
    try {
      const findById = `SELECT * FROM users WHERE id=$1;`;

      const data = await pool.query(findById, [id]);

      if (data.rows.length === 0) {
        next({ status: 404, message: "Data not found" });
      } else {
        return { data: data.rows[0] };
      }
    } catch (error) {
      next(error);
    }
  };

  static createUser = async (body, next) => {
    try {
      const { id, email, gender, password, role } = body;
      const insertQuery = `INSERT INTO users(id, email, gender, password, role)
                                VALUES($1, $2, $3, $4, $5)
                                RETURNING *;
        `;

      const data = await pool.query(insertQuery, [
        id,
        email,
        gender,
        password,
        role,
      ]);

      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (body, params, next) => {
    try {
      const { email, gender, password, role } = body;
      const { id } = params;

      const updateQuery = `UPDATE users
                                SET email=$1, gender=$2, password=$3, role=$4
                                WHERE id=$5
                                RETURNING *;
        `;

      const data = await pool.query(updateQuery, [
        email,
        gender,
        password,
        role,
        id,
      ]);
      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      const deleteQuery = `DELETE FROM users 
                            WHERE id=$1
                            RETURNING *;
        `;

      const data = await pool.query(deleteQuery, [id]);
      return data.rows[0];
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Users;
