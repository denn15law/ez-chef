import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

const Logout = () => {
  const onClick = (e) => {
    e.preventDefault();
    axios
      .post("/logout")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
