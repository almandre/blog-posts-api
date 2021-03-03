/**
 * Prevent the endpoint from be run if the HTTP Method is for deleting or updating
 *
 * @param {import('Express').Request} req 
 * @param {import('Express').Response} res 
 * @param {import('Express').NextFunction} next 
 */
async function blockUpdates(req, res, next) {
    const { method } = req;

    if (method === 'PUT' || method === 'DELETE' || method === 'PATCH') {
        res.sendStatus(405);
    }

    next();
}

module.exports = {
    blockUpdates,
};
