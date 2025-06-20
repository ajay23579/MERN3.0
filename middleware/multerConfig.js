const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage"); //cb(error,sucess)
  },
  filename: function (req, file, cb) {
    cb(null, "" + file.originalname);
  },
});

module.exports = {
  multer,
  storage,
};
