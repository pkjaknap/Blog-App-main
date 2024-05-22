const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    const { userId, title, content } = req.body;
    try {
        await Post.createPost(userId, title, content);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.getPosts();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.getPostById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const result = await Post.updatePost(id, title, content);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Post.deletePost(id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


