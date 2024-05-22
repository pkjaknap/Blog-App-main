const db = require('../config/db');

class Post {
    static async createPost(userId, title, content) {
        const [result] = await db.execute('INSERT INTO blog_posts (user_id, title, content) VALUES (?, ?, ?)', [userId, title, content]);
        return result;
    }

    static async getPosts() {
        const [rows] = await db.execute('SELECT * FROM blog_posts');
        return rows;
    }

    static async getPostById(id) {
        const [rows] = await db.execute('SELECT * FROM blog_posts WHERE id = ?', [id]);
        return rows[0];
    }

    static async updatePost(id, title, content) {
        const [result] = await db.execute('UPDATE blog_posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
        return result;
    }

    static async deletePost(id) {
        const [result] = await db.execute('DELETE FROM blog_posts WHERE id = ?', [id]);
        return result;
    }
}

module.exports = Post;
