import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../api';

const DeleteConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function deleteProd() {
      await deleteProduct(id);
      navigate("/products");
    }
    deleteProd();
  }, [id,navigate]);

  return <div>Deleting product...</div>;
};

export default DeleteConfirmation;
