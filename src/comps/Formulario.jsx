import Links from '../utils/links';

export default function Formulario({
  title = '',
  url = '',
  description = '',
  id,
  onSuccess = () => {},
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const url = e.target[1].value;
    const description = e.target[2].value;
    let data;
    if (id) {
      data = await Links.edit({ title, url, description, id });
      if (data.ok) {
        onSuccess();
      }
      return;
    }
    data = await Links.add({ title, url, description });
    if (data.ok) {
      onSuccess();
    }
  };
  return (
    <div className="container p-4">
      <div className="col-md-4 mx-auto">
        <div className="card ">
          <div className="card-body">
            <form
              action=""
              className="row-gap-3 d-grid"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="title"
                  defaultValue={title}
                />
              </div>
              <div className="form-group">
                <input
                  type="url"
                  name="url"
                  className="form-control"
                  placeholder="URL"
                  defaultValue={url}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows={2}
                  name="description"
                  className="form-control"
                  placeholder="description"
                  defaultValue={description}
                />
              </div>
              <div className="form-group ">
                <button className="btn btn-success w-100">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
