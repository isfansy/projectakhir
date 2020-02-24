const encryptpassword = require("../helper/encrypt");
const { mysqldb } = require("../connection");
const transporter = require("../helper/mailer");

module.exports = {
  userregister: (req, res) => {
    var { username, password, email } = req.body; //destructuring . params itu dipakai untuk yg lebih mendetail tapi kalo pake body semua juga gpp.
    // console.log(req.body);

    var sql = `select username from users where username='${username}' and email='${email}'`;
    //arti function dibackend
    //select = get

    mysqldb.query(sql, (err, result) => {
      //setiap ***.query(database action) harus ada sqlnya
      if (err) {
        return res.status(500).send({ status: "error", err });
      }
      if (result.length > 0) {
        return res
          .status(200)
          .send({ status: "error", message: "username/email has been taken" });
      } else {
        var hashpassword = encryptpassword(password);
        data = {
          username,
          password: hashpassword,
          email,
          role: 2,
          status: 0
        };

        sql = `insert into users set?`;
        mysqldb.query(sql, data, (err1, res1) => {
          if (err1) {
            return res
              .status(500)
              .send({ status: "error", message: "error server", err: err1 });
          }
          var LinkVerification = `http://localhost:3000/verified=${username}&password=${password}`;
          var mailoptions = {
            from: "IsfanlyCoffee <isfansyahreza@gmail.com>",
            to: email,
            subject: `verifikasi email IsfanlyCoffee`,
            html: `tolong klik link ini untuk verifikasi :
                          <a href=${LinkVerification}>Join app ini</a>`
          };
          transporter.sendMail(mailoptions, (err2, res2) => {
            //untuk ngirim email verifikasi
            if (err2) {
              console.log(err2);
              return res.status(500).send({ status: "error", err: err2 });
            }
            console.log(`success`);
            return res
              .status(200)
              .send({ username, email, status: "unverified" });
          });
          return res.status(200).send({ status: "success" });
        });
      }
    });
  },
  emailverifikasi: (req, res) => {
    var { username, password } = req.body;
    var hashpassword = encryptpassword(password);

    var sql = `select * from users where username='${username}'`;
    mysqldb.query(sql, (err, result) => {
      if (err) return res.status(500).send({ status: "error", err });

      if (result.length === 0) {
        return res
          .status(500)
          .send({ status: "error", err1: "user not found" });
      }
      sql = `update users status=1 where username='${username}' and password='${hashpassword}'`;
      mysqldb.query(sql, (err, results2) => {
        if (err) {
          return res.status(500).send({ status: "error", err });
        }
        return res.status(200).send({
          username: results[0].username,
          email: results[0].email,
          status: 1
        });
      });
    });
  },
  resendEmailVer: (req, res) => {
    var { username, email } = req.body;
    var sql = `select username,password,email from users where username='${username}' and email='${email}'`;
    mysqldb.query(sql, (err, results) => {
      if (err) return res.status(500).send({ status: "error", err });
      if (results.length === 0) {
        return res.status(500).send({ status: "error", err: "user not found" });
      }
      var LinkVerification = `http://localhost:3000/verified?username=${results[0].username}&password=${results[0].hashpassword}`;
      var mailoptions = {
        from: "IsfanlyCoffee <isfansyahreza@gmail.com>",
        to: results[0].email,
        subject: `re-send verifikasi Email IsfanlyCoffee`,
        html: `tolong klik link ini untuk verifikasi :
                      <a href=${LinkVerification}>Join IsfanlyCoffee</a>`
      };
      transporter.sendMail(mailoptions, (err2, res2) => {
        if (err2) {
          console.log(err2);
          return res.status(500).send({ status: "error", err: err2 });
        }
        console.log(`succcess`);
        return res.status(500).send({ username, email, status: "unverified" });
      });
    });
  },
  login: (req, res) => {
    var { username, password } = req.query;
    var { id } = req.params;

    if (id) {
      var sql = `select * from users where id=${id}`;
      mysqldb.query(sql, (err, result) => {
        if (err) {
          res.send({ message: err });
        }
        if (result.length > 0) {
          console.log(result[0], "masuk if id");
          return res.status(200).send({
            id: result[0].id,
            username: result[0].username,
            password: result[0].password,
            role: result[0].role,
            status: "login berhasil"
          });
        } else {
          return res
            .status(500)
            .send({ status: "error", message: "username atau password salah" });
        }
      });
    } else {
      var hashpassword = encryptpassword(password);
      var sql = `select * from users where username='${username}' and password='${hashpassword}'`;
      mysqldb.query(sql, (err, result) => {
        if (err) {
          res.send({ message: err });
        }
        if (result.length > 0) {
          return res.status(200).send({
            id: result[0].id,
            username: result[0].username,
            password: result[0].password,
            role: result[0].role,
            status: "login berhasil"
          });
        } else {
          return res.status(500).send({
            status: "error",
            message: "username atau password salah",
            err
          });
        }
      });
    }
  }
};
