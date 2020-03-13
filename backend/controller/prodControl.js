const { mysqldb } = require("../connection");
const fs = require("fs");
const { uploader } = require("../helper/uploader");

module.exports = {
  addProduct: (req, res) => {
    try {
      // console.log(req);
      //multer
      const path = "/kopi/images";
      const upload = uploader(path, "KOPI").fields([{ name: "image" }]);

      upload(req, res, err => {
        if (err) {
          console.log("errorupload");
          console.log(err);
          return res.status(500).send(err);
        }
        console.log("masuk");
        const { image } = req.files;
        console.log(req.files);
        const imagePath = image ? path + "/" + image[0].filename : null;
        // get data from frontend
        const data = JSON.parse(req.body.data);
        console.log(data);
        data.gambarproduct = imagePath;
        if (err) {
          fs.unlinkSync("./public" + imagePath);
          return res
            .status(500)
            .json({ message: "upload gagal", error: err.message });
        }

        var sql = "insert into product set ?";
        mysqldb.query(sql, data, (err, res2) => {
          if (err) {
            return res.status(500).json({
              message: "there is an error on the server",
              error: err.message
            });
          }
          //sql='select '
          sql = "SELECT * FROM product ";
          mysqldb.query(sql, (err1, result1) => {
            if (err1) res.status(500).send(err1);
            res.status(200).send({ dataKopi: result1 });
          });
        });
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
  },
  getProduct: (req, res) => {
    var sql = "SELECT * FROM product ";
    mysqldb.query(sql, (err, res1) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(res1);
    });
  },
  deleteProduct: (req, res) => {
    var selectedId = req.params.selectedId;
    console.log("id delete", selectedId);
    var sql = `SELECT * FROM product WHERE idproduct=${selectedId}`;
    mysqldb.query(sql, (err, result1) => {
      if (err) {
        console.log("delete problem", err);
        return res.status(500).send(err);
      }
      console.log(result1);
      console.log("alamat", result1[0].gambarproduct);
      var imagePath = result1[0].gambarproduct;
      sql = `DELETE FROM product WHERE idproduct=${selectedId}`;
      mysqldb.query(sql, (err, result) => {
        if (err) {
          console.log(err.message);
          return res.status.json({
            message: `there's error on the server`,
            err: err.message
          });
        }
        if (imagePath) {
          fs.unlinkSync(`./public` + imagePath);
        }
        console.log(result);
        sql = `SELECT * FROM product`;
        mysqldb.query(sql, (err, result2) => {
          if (err) res.status(500).send(err);
          res.status(200).send({ dataProduct: result2 });
        });
      });
    });
  },
  editProduct: (req, res) => {
    var { selectedIdEdit } = req.params;
    console.log("id", selectedIdEdit);
    var sql = `SELECT * FROM product WHERE idproduct=${selectedIdEdit}`;
    mysqldb.query(sql, (err, result3) => {
      if (err) return res.status(500).send(err);
      if (result3.length) {
        const path = "/kopi/images";
        const upload = uploader(path, "KOPI").fields([{ name: "image" }]);

        upload(req, res, err => {
          if (err) return res.status(500).json({ message: "server error" });
          const { image } = req.files;
          const imagePath = image ? path + "/" + image[0].filename : null;
          console.log("req body", req.body.data);
          const data = JSON.parse(req.body.data);

          try {
            if (imagePath) {
              data.gambarproduct = imagePath;
            }
            sql = `UPDATE product SET ? WHERE idproduct=${selectedIdEdit}`;
            mysqldb.query(sql, data, (err, results) => {
              if (err) {
                if (imagePath) {
                  fs.unlinkSync(`./public${imagePath}`);
                }
                console.log("masuk");
                return res.status(500).json({ message: "server error" });
              }
              if (imagePath) {
                if (res1[0].gambarproduct) {
                  fs.unlinkSync(`./public${res1[0].gambarproduct}`);
                }
              }
              sql = `SELECT * FROM product `;
              mysqldb.query(sql, (err, res2) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(res2);
              });
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    });
  }
};
