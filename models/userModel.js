const db = require('../config/db');

class User {
    static async createUser(username, email, password) {
        const [result] = await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        return result;
    }

    static async getUserByUsername(username) {
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    }
    
    static async getAllUsers() {
        const [rows] = await db.execute('SELECT id, username, email, created_at FROM users');
        return rows;
    }
}

module.exports = User;
