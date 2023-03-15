import { useNavigate } from 'react-router-dom';
import Formulario from '../comps/Formulario';

export default function Form() {
  const nav = useNavigate();

  const handleSuccess = () => {
    nav('/links');
  };

  return <Formulario onSuccess={handleSuccess} />;
}
