import { localStorageSave } from '../utils/helpers';
import Users from '../utils/users';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signin() {
  const nav = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const { token, message } = await Users.signin({ password, email });
    if (token) {
      localStorageSave('token', token);
      nav('/links');
    } else if (message) {
      setMessage(message);
    } else {
      setMessage('An error ocurred, please try again later');
    }
  };
  return (
    <div className="container p-4">
      {message && (
        <div className="col-md-4 mx-auto">
          <div className="alert alert-warning alert-dismissible fade show d-flex justify-content-between">
            <span>{message}</span>
            <span
              type="button"
              className="close"
              onClick={() => setMessage('')}
            >
              &times;
            </span>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <img
              src={logo}
              alt="logo"
              className="card-img-top mx-auto m-2 rounded-circle w-50"
            />
            <div className="card-header">
              <h3>SignIn</h3>
            </div>
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="d-grid row-gap-3">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <button className="btn btn-success w-100">SignIn</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
