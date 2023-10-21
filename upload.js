const express = require("express");
const multer = require("multer");
const path = require("path");
const pool = require("./config");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/upload"));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + unique);
  },
});

const upload = multer({ storage: storage });

router.use("/upload", express.static(path.join(__dirname, "/upload")));

router.post("/upload/:id/image", upload.single("image"), (req, res, next) => {
  const file = req.file.path;
  if (!file) {
    next(Error);
  } else {
    const { id } = req.params;
    const fileName = `http://localhost:5000/upload/${req.file.filename}`;

    const uploadQuery = `UPDATE movies
                              SET photo=$1
                              WHERE id=$2
                              RETURNING *;`;

    pool.query(uploadQuery, [fileName, id], (err, result) => {
      if (err) {
        next(err);
      } else {
        res
          .status(201)
          .json({ message: "Image uploaded", data: result.rows[0] });
      }
    });
  }
});

module.exports = router;
