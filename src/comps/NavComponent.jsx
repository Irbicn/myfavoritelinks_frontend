import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, useNavigate } from 'react-router-dom';
import { localStorageDelete, localStorageRead } from '../utils/helpers';

export default function NavComponent() {
  const token = localStorageRead('token');
  const nav = useNavigate();

  const handleLogout = () => {
    localStorageDelete('token');
    nav('/signin');
  };

  return (
    <Navbar>
      <Container>
        <Nav>
          <Link to="/" className="navbar-brand">
            Favorite links
          </Link>
          {token && (
            <>
              <NavDropdown title="Links">
                <NavDropdown.Item>
                  <Link to="/links" className="nav-link">
                    All links
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/form" className="nav-link">
                    Add links
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <button
                to="/profile"
                className="nav-link btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
          {!token && (
            <>
              <Nav.Item>
                <Link to="/signin" className="nav-link">
                  Signin
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="signup" className="nav-link">
                  Signup
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
