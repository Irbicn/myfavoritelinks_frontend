import NavComponent from '../comps/NavComponent';

export default function Layout({ children }) {
  return (
    <div>
      <NavComponent />
      {children}
    </div>
  );
}
