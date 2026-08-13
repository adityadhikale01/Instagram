import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./RegisterPage.css";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      await register(formData);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="register-page">
      <section className="register-page-container">

        <div className="register-page-card">

          <h1 className="register-page-logo">
            Instagram
          </h1>

          <p className="register-page-subtitle">
            Sign up to see photos and videos from your friends.
          </p>

          <form
            className="register-page-form"
            onSubmit={handleSubmit}
          >
            <input
              className="register-page-input"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
            />

            <input
              className="register-page-input"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />

            <input
              className="register-page-input"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <input
              className="register-page-input"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />

            {error && (
              <p className="register-page-error">
                {error}
              </p>
            )}

            <button
              className="register-page-button"
              type="submit"
            >
              Sign up
            </button>
          </form>

          <div className="register-page-divider">
            <span className="register-page-divider-line"></span>
            <p className="register-page-divider-text">OR</p>
            <span className="register-page-divider-line"></span>
          </div>

          <button
            className="register-page-google"
            type="button"
          >
            Continue with Google
          </button>

          <p className="register-page-terms">
            By signing up, you agree to our Terms, Privacy
            Policy and Cookies Policy.
          </p>
        </div>

        <div className="register-page-switch">
          <span>Have an account?</span>

          <Link
            className="register-page-switch-link"
            to="/login"
          >
            Log in
          </Link>
        </div>

      </section>
    </main>
  );
}