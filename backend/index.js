const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require("cors");

const PORT = 2000;

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());

const {
  usersRouters,
  AuthenticationRouters,
  prodRouter
} = require("./routers");

// app.use("/users", usersRouters);
app.use("/auth", AuthenticationRouters);
app.use("/product", prodRouter);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to API</h1>");
});

app.listen(PORT, () => console.log(`aktif di port ${PORT}`));
