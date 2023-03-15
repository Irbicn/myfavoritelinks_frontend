import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Formulario from '../comps/Formulario';
import Links from '../utils/links';

export default function Edit() {
  const [link, setLink] = useState();
  const { id } = useParams();
  const nav = useNavigate();

  const getLink = async () => {
    const data = await Links.getLink(id);
    setLink(data);
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div>
      {link ? (
        <Formulario
          title={link.title}
          url={link.url}
          description={link.description}
          id={id}
          onSuccess={() => nav('/links')}
        />
      ) : (
        <Formulario />
      )}
    </div>
  );
}
