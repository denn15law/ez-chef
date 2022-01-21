import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const LoginButton = () => {
  const navigate = useNavigate();

  const onClick = async (e) => {
    navigate("/login");
  };

  return (
    <Button
      type="submit"
      size="small"
      onClick={onClick}
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
