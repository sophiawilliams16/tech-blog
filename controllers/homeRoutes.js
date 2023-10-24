const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts
router.get("/", async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET single post by id and its related comments
router.get("/post/:id", async (req, res) => {
    try {
        const postId = req.params.id;

        const postData = await Post.findByPk(postId, {
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
                // {
                //     model: Comment,
                //     include: {
                //         model: User, 
                //         attributes: ["name"],
                //     }
                // }
            ],
        });

        if (!postData) {
            return res.status(404).json({ message: "Post not found" });
        }
        
        const post = postData.get({ plain: true });

        // // Find all comments related to the post
        // const commentData = await Comment.findAll({
        //     where: {
        //         post_id: postId,
        //     },
        //     include: [
        //         {
        //             model: User,
        //             attributes: ["name"],
        //         }
        //     ]

        // });
        // const comment = commentData.get({ plain: true });

        // renders "singlepost.handlebars"
        res.render("singlepost", {
            ...post, 
            // ...comment, // pass an array of comments
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// // GET comment by id 
// router.get("/comment/:id", async (req, res) => {
//     try {
//         const commentData = await Comment.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ["name"],
//                 },
//             ],
//         });

//         // 

//         // renders "singlepost.handlebars"
//         res.render("singlepost", {
//             ...comment,
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login page
router.get("/login", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect("/profile");
        return;
    }
    // render "login.handlebars"
    res.render("login");
});




module.exports = router;
