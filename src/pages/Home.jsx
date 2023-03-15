import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="index">
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">Favorite links</h1>
          <h3 className="mb-5">
            <em>Store your favorite links</em>
          </h3>
          <Link className="btn btn-primary" to="/links">
            Let´s get started
          </Link>
        </div>
      </header>
    </div>
  );
}
