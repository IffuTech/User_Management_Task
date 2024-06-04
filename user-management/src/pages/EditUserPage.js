import React from 'react';
import { Container } from '@mui/material';
import UserForm from '../components/UserForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditUserPage = ({ users, updateUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingUser = users.find(user => user.id === parseInt(id));

  const handleEditUser = (updatedUser) => {
    updateUser(updatedUser);
    navigate('/');
  };

  return (
    <Container>
      <h1>Edit User</h1>
      {existingUser && <UserForm initialValues={existingUser} onSubmit={handleEditUser} />}
    </Container>
  );
};

export default EditUserPage;

