import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const getUser = async () => {};

  useEffect(() => {}, []);
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <h3>Welcome</h3>
              <Link to="/links" className="btn btn-primary m-4">
                Save your links
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
