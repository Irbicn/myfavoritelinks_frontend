import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Links from './pages/Links';
import Edit from './pages/Edit';
import Form from './pages/Form';
import UserSecurity from './pages/UserSecurity';
import Singup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<UserSecurity />}>
      <Route index element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/links" element={<Links />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/signin" element={<Signin />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
