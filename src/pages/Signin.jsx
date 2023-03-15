import { localStorageSave } from '../utils/helpers';
import Users from '../utils/users';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const data = await Users.signin({ password, email });
    localStorageSave('token', data);
    nav('/links');
  };
  return (
    <div className="container p-4">
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
