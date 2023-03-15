import { useEffect, useState } from 'react';
import Card from '../comps/Card';
import LinksUtils from '../utils/links';

export default function Links() {
  const [list, setList] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (id) => async () => {
    const res = await LinksUtils.delete(id);
    if (res.ok) {
      const newList = [...list];
      newList.splice(
        newList.findIndex((obj) => obj.id === id),
        1
      );
      setDeleted(true);
      setList(newList);
    }
  };

  const getLinks = async () => {
    const data = await LinksUtils.getLinks();
    setList(data);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="container p-4">
      {deleted && (
        <div className="col-md-4 mx-auto">
          <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between">
            <span>Link Removed successfully</span>
            <span
              type="button"
              className="close"
              onClick={() => setDeleted(false)}
            >
              &times;
            </span>
          </div>
        </div>
      )}
      <div className="row">
        {!list[0] ? (
          <div className="col-md-4 mx-auto">
            <div className="card card-body text-center">
              <p>There are not links saved yet.</p>
              <a href="/form">Create One</a>
            </div>
          </div>
        ) : (
          list.map(({ title, description, url, create_at, id }) => (
            <Card
              key={id}
              title={title}
              description={description}
              url={url}
              timestamp={create_at}
              onDelete={handleDelete(id)}
              id={id}
            />
          ))
        )}
      </div>
    </div>
  );
}
