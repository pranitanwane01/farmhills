// const multer = require("multer");

// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const cloudinary = require("../config/cloudinary");

// const storage = new CloudinaryStorage({
//   cloudinary,

//   params: {
//     folder: "farmhills",

//     allowed_formats: ["jpg", "png", "jpeg", "webp"],
//   },
// });

// const upload = multer({
//   storage,
// });

// module.exports = upload;

const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => ({
    folder: "farmhills",

    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  }),
});

const upload = multer({
  storage,
});

module.exports = upload;
