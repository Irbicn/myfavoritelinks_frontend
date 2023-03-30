import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageSave } from '../utils/helpers';
import Users from '../utils/users';

export default function Singup() {
  const nav = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const { token, message } = await Users.signup({ name, password, email });
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
            <div className="card-header">
              <h3>SignUp</h3>
            </div>
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="d-grid row-gap-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      autoFocus
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
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
                  <button className="btn btn-success w-100">SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
