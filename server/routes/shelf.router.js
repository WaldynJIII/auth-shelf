const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    queryText = `SELECT "description", "image_url", "user"."username", "item"."id" FROM "item" JOIN "user" ON "item"."user_id"="user"."id";`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        }).catch((err) => {
            console.log('error with get request:', err);
            res.sendStaus(500);
        });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
        const newUser = req.body;
        const queryText = `INSERT INTO "item" ( "description", "image_url",  "user_id")
                    VALUES ($1, $2, $3)`;
        const queryValues = [
            newUser.description,
            newUser.image,
            newUser.user_id,
        ];
        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((err) => {
                console.log('Error completing POST user query', err);
                res.sendStatus(500);
            });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "item" WHERE "id" = $1`
    pool.query(queryText, [Number(req.params.id)]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in DELETE', error);
        res.sendStatus(500);
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;