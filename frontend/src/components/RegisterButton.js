import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterButton = () => {
  const navigate = useNavigate();

  const onClick = async (e) => {
    navigate("/register");
  };

  return (
    <Button
      type="submit"
      size="small"
      onClick={onClick}
      fullWidth
      variant="contained"
      color="secondary"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
