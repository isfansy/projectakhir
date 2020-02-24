import React, { useState } from "react";
import "./login.css";
import imglogo from "../img/logoqiu.png";
import Headernofix from "../component/headernofix";
import { useDispatch } from "react-redux";
import { UserRegister } from "../redux/actions/AuthAction";

const Registercomp = props => {
  const [dataregis, setdataregis] = useState({});

  const dispatch = useDispatch();

  const onClickRegister = () => {
    console.log(dataregis);
    const { username, password, email, repassword } = dataregis;
    console.log(username, password, email, repassword);
    if (password === repassword) {
      dispatch(UserRegister({ username, password, email }));
    }
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setdataregis({ ...dataregis, [name]: value }); //spread berfungsi untuk membuka objek agar bisa diedit
  };

  return (
    <div>
      <Headernofix />
      <div>
        <div className="container login-container paddown">
          <div className="row">
            <div className="col-md-6 ads">
              <h1>
                <span id="fl">Company</span>
                <span id="sl">Name</span>
              </h1>
            </div>
            <div className="col-md-6 login-form">
              <div className="profile-img">
                <img
                  src={imglogo}
                  alt="profile_img"
                  height="140px"
                  width="140px;"
                />
              </div>
              <h3>Register</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="repassword"
                    placeholder="Re-Enter Password"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={onClickRegister}
                  >
                    Sign In
                  </button>
                </div>
                <div className="form-group forget-password">
                  <a href="#">Forget Password</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registercomp;
