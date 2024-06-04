import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const addUser = (user) => {
    const newUser = { ...user, id: users.length ? users[users.length - 1].id + 1 : 1 };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserListPage users={users} />} />
          <Route path="/add-user" element={<AddUserPage addUser={addUser} />} />
          <Route path="/edit-user/:id" element={<EditUserPage users={users} updateUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
