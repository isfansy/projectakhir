import React, { useState } from "react";
import "./login.css";
import imglogo from "../img/logoqiu.png";
import Headernofix from "../component/headernofix";
import { loginAction } from "../redux/actions/AuthAction";
import { useDispatch } from "react-redux";

const Logincomp = props => {
  //state
  const [datalogin, setdatalogin] = useState({});

  //inisialisasi dispatch . ngegantiin maps.state.props dan connect pada class component dlu
  const dispatch = useDispatch();

  //handleinputlogin
  const handleLogin = e => {
    const { name, value } = e.target;
    setdatalogin({ ...datalogin, [name]: value });
  };

  //login action
  const onClickLogin = () => {
    console.log(datalogin);
    const { username, password } = datalogin;
    dispatch(loginAction(username, password));
  };

  return (
    <div>
      <Headernofix />
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 ads">
            <h3 style={{ paddingTop: "130px" }}>
              <span id="fl">We Serve The Best Coffee</span>
              <br />
              <span id="sl">Login to fullfill your caffeine needed </span>
            </h3>
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
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={handleLogin}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleLogin}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onClickLogin}
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
  );
};

export default Logincomp;
