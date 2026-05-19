// const express =
//   require("express");

// const router =
//   express.Router();

// const upload =
//   require(
//     "../middleware/uploadMiddleware"
//   );

// router.post(
//   "/",
//   upload.single("image"),

//   (req, res) => {

//     res.json({
//       imageUrl:
//         req.file.path,
//     });
//   }
// );

// module.exports = router;

const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/",

  (req, res, next) => {
    console.log("UPLOAD API HIT");

    next();
  },

  upload.single("image"),

  (req, res) => {
    console.log(req.file);

    res.json({
      imageUrl: req.file.path,
    });
  },
);

module.exports = router;
