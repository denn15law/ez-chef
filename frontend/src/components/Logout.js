import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    await axios
      .post("/logout")
      .then((res) => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button
      type="submit"
      onClick={onClick}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}>
      Log Out
    </Button>
  );
};

export default Logout;
