const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const newComment = await Comment.create({
            // spread operator -- grabs all input from the body
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
        console.error(err);
    }
});

module.exports = router;
