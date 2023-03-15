import { useNavigate } from 'react-router-dom';
import { localStorageSave } from '../utils/helpers';
import Users from '../utils/users';

export default function Singup() {
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const data = await Users.signup({ name, password, email });
    localStorageSave('token', data);
    nav('/links');
  };
  return (
    <div className="container p-4">
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
