import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Successfully registered!");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "❌ Registration failed.";
      setMessage(errorMsg);
    }
  };

  return (
    <div style={wrapperStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Register</button>
        {message && (
          <p style={{ textAlign: "center", marginTop: "10px", color: message.includes("❌") ? "red" : "green" }}>
            {message}
          </p>
        )}
        <p style={toggleText}>
          Already have an account?{" "}
          <Link to="/login" style={linkStyle}>Login</Link>
        </p>
      </form>
    </div>
  );
}


const wrapperStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  width: "100%",
  maxWidth: "400px",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#e8f0fe",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const toggleText = {
  marginTop: "15px",
  textAlign: "center",
  fontSize: "14px",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "underline",
};

export default Register;