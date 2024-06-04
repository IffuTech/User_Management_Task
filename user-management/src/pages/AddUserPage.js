import React, { useState } from 'react';
import { Container, Snackbar } from '@mui/material';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

const AddUserPage = ({ addUser }) => {
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddUser = (user) => {
    addUser(user);
    setShowSuccessMessage(true); 
    setTimeout(() => setShowSuccessMessage(false), 3000);
    navigate('/');
  };

  return (
    <Container>
      <h1>Add User</h1>
      <UserForm onSubmit={handleAddUser} />

      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={() => setShowSuccessMessage(false)}
        message="User added successfully"
      />
    </Container>
  );
};

export default AddUserPage;

