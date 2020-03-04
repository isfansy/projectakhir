const { mysqldb } = require("../connection");
const fs = require("fs");
const { uploader } = require("../helper/uploader");

module.exports = {
  addProduct: (req, res) => {
    try {
      //multer
      const path = "/kopi/images";
      const upload = uploader(path, "KOPI").fields([{ name: "image" }]);
      upload(req, res, err => {
        const { image } = req.files;
        console.log(image);
        // const imagePath = image ? path + "/" + image[0].filename : null;
        //get data from frontend
        // const data = JSON.parse(req.body.data);
        // console.log(data);
        // data.foto = imagePath;
        // if (err) {
        //   fs.unlinkSync("./public" + imagePath);
        //   return res
        //     .status(500)
        //     .json({ message: "upload gagal", error: err.message });
        // }
        //sql
        // var sql = "insert into product set?";
        // mysqldb.query(sql, data, (err, res2) => {
        //   if (err) {
        //     return res.status(500).json({
        //       message: "there is an error on the server",
        //       error: err.message
        //     });
        //   }
        //   //sql='select '
        //   sql = "select * from product";
        //   mysqldb.query(sql, (err1, result1) => {
        //     if (err1) res.status(500).send(err1);
        //     res.status(200).send({ dataKopi: result1 });
        //   });
        // });
      });
    } catch (error) {
      console.log("tes");
      res.status(200).send({
        status: error,
        message: "there is a problem with the uploader"
      });
    }
  },
  getProductCategory: (req, res) => {
    try {
      var sql = "select * from productCategory";
      mysqldb.query(sql, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send({ dataCategory: result });
      });
    } catch (error) {
      console.log("tes");
      res.status(200).send({
        status: error
      });
    }
  }
};
