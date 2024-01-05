import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { TbBorderRadius } from 'react-icons/tb';


const BackButton = () => {
  const navigate = useNavigate();
  const TbBorderRadius = {
    borderRadius: '10px'
  };

  const handleGoBack = () => {
    navigate(-1); // Geri gitmek için kullanılır
  };

  return (
    <button type="button" class="btn btn-primary-purple" style={TbBorderRadius} onClick={handleGoBack}> <IoArrowBackSharp /> </button>
  );
};

export default BackButton;
