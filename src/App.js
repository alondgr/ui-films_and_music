import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './Login/Login';
import Register from './Register/Register';
import { createContext, useState, useEffect } from 'react';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import { me } from './services/user.service';
import { useNavigate } from 'react-router-dom';
import PostCreate from './PostCreate/PostCreate';
import PostList from './PostCreate/PostList';
import Form from './Form/Form';

export const UserContext = createContext();


function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    me()
      .then(loggedUser => {
        if (!isLoggedIn(loggedUser)) {
          navigate('/login');
          return;
        }
        setUser(loggedUser)
      })
      .catch(err => console.log(err));
  }, [navigate])

  function isLoggedIn(user) {
    return user.hasOwnProperty('_id');
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {isLoggedIn(user) && <Header />}
        {/* <Routes>
          <Route path="/post" element={<PostList />} />
        </Routes> */}
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
