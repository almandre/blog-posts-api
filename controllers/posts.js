const Posts = require('../models/posts');
const { isBoolean, parseBoolean } = require('../helper');

/**
 * Create a new Blog Post
 *
 * @param {import('Express').Request} req 
 * @param {import('Express').Response} res 
 * @param {import('Express').NextFunction} next 
 */
async function create(req, res, next) {
    const { body: post } = req;

    if (post.isPublished) {
        post.publishedDate = new Date().valueOf();
    }

    const created = await Posts.create(post);

    res.status(201).send(created);
}

/**
 * Find the collection of all posts
 *
 * @param {import('Express').Request} req 
 * @param {import('Express').Response} res 
 * @param {import('Express').NextFunction} next 
 */
async function find(req, res, next) {
    const { author, isPublished } = req.query;
    const query = {};

    if (author) {
        query.author = author;
    }

    if (isBoolean(isPublished)) {
        query.isPublished = parseBoolean(isPublished);
    }

    const posts = await Posts.findAll({ where: query });

    res.send(posts);
}

/**
 * Find the post with the given id
 *
 * @param {import('Express').Request} req 
 * @param {import('Express').Response} res 
 * @param {import('Express').NextFunction} next 
 */
async function findById(req, res, next) {
    const { id } = req.params;

    const post = await Posts.findByPk(id);

    if (!post) {
        res.status(404).send('ID not found');
        return true;
    }

    res.send(post);
}

module.exports = {
    create,
    find,
    findById,
};
