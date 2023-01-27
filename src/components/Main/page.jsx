import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import "./styles.css";

export const Page = ({ state, handleChange, handleSubmit, showAlert }) => (
  <div className="MainPage">
    <div className="MainPage__container">
      <div className="MainPage__container__header">
        <div>
          <span>Product Page: DIR-601</span>
        </div>
        <div className="MainPage__container__header--right">
          <span>Hardware Version: A1</span>
          <span>Firmware Version : 1.01NA</span>
        </div>
      </div>

      <div className="MainPage__container__logo">
        <img src={logo} alt="D-Link" title="D-Link" />
      </div>

      <div className="MainPage__container__login">
        <div className="MainPage__container__login__box">
          <div className="MainPage__container__login__box--title">
            <span>LOGIN</span>
          </div>

          <div className="MainPage__container__login__box--subtitle">
            <span>Log in to the router :</span>
          </div>

          <div className="MainPage__container__login__box__form">
            <form onSubmit={handleSubmit}>
              <div className="MainPage__container__login__box__form--username">
                <label htmlFor="username">User Name : </label>
                <select
                  name="username"
                  id="username"
                  value={state.username}
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="MainPage__container__login__box__form--password">
                <label htmlFor="password">Password : </label>
                <input
                  error={true}
                  id="password"
                  name="password"
                  type="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>

              {showAlert && (
                <div className="MainPage__container__login__box__form--alert">
                  <strong>Incorrect password.</strong>
                </div>
              )}

              <div className="MainPage__container__login__box__form--submit">
                <button type="submit" disabled={showAlert}>
                  Update Firmware
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="MainPage__container__login__footer">
        <span>WIRELESS</span>
      </div>
    </div>

    <div className="MainPage__copyright">
      <span>Copyrigh © 2004-2009 D-Link Corporation, Inc.</span>
    </div>
  </div>
);

Page.propTypes = {
  state: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showAlert: PropTypes.bool,
};
