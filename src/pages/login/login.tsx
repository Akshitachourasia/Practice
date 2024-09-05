import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email && password) {
      localStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
      alert("Login Successful");
    } else {
      alert("Please fill in all the fields");
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/online-school-platform-abstract-concept-vector-illustration-homeschooling-covid2019-qarantine-online-education-platform-digital-classes-virtual-courses-lms-school-abstract-metaphor_335657-5850.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.6,
          zIndex: -1,
        }}
      />

      <AppBar
        position="static"
        sx={{
          width: "100%",
          maxWidth: "400px",
          marginBottom: "16px",
          borderRadius: "8px",
          zIndex: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            LOGIN FORM
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        }}
      >
        <form>
          <TextField
            fullWidth
            sx={{ marginBottom: "16px" }}
            type="text"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: "16px" }}
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ marginTop: "16px", width: "100%" }}
          >
            Submit
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: "16px", textAlign: "center" }}
          >
            Don’t have an account?
            <Button
              onClick={() => navigate("/auth/signup")}
              sx={{ textTransform: "none", padding: 0 }}
            >
              Sign Up
            </Button>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}
