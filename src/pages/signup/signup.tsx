import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (firstName && lastName && email && password && contact) {
      localStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      setContact("");
      navigate("/auth/login");
      alert("Sign Up Successful");
    } else {
      alert("Please fill in all the fields");
    }
    console.log(firstName, lastName, email, password, contact);
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
            SIGN UP FORM
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
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: "16px" }}
            type="text"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            sx={{ marginBottom: "16px" }}
            type="email"
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
          <TextField
            fullWidth
            sx={{ marginBottom: "16px" }}
            type="text"
            label="Contact"
            variant="outlined"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ marginTop: "16px", width: "100%" }}
            type="submit"
          >
            Submit
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: "16px", textAlign: "center" }}
          >
            Already have an account?
            <Button
              onClick={() => navigate("/auth/login")}
              sx={{ textTransform: "none", padding: 0 }}
            >
              Login
            </Button>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}
