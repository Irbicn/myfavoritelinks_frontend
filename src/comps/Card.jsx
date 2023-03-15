import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default function Card({
  title,
  url,
  description,
  timestamp,
  onDelete = () => {},
  id,
}) {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-body">
          <a href={url} target="_blank">
            <h3 className="card-title text-uppercase">{title}</h3>
          </a>
          <p className="m-2">{description}</p>
          <p>{format(timestamp)}</p>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete Link
          </button>
          <Link to={`/edit/${id}`}>
            <button className="btn btn-secondary">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
