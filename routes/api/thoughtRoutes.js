const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts
router.route('/').post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
// TODO: configure add/delete reaction routes