import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";
import "./LoginPage.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
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

      await login(formData);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="login-page">
      <section className="login-page-container">

        {/* Login Card */}
        <div className="login-page-card">

          <h1 className="login-page-logo">
            Conexa
          </h1>

          <p className="login-page-subtitle">
            Log in to see photos and videos from your friends.
          </p>

          <form
            className="login-page-form"
            onSubmit={handleSubmit}
          >
            <input
              className="login-page-input"
              name="identifier"
              type="text"
              placeholder="Username or email"
              value={formData.identifier}
              onChange={handleChange}
              autoComplete="username"
            />

            <input
              className="login-page-input"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            {error && (
              <p className="login-page-error">
                {error}
              </p>
            )}

            <button
              className="login-page-button"
              type="submit"
            >
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="login-page-divider">
            <span className="login-page-divider-line"></span>

            <p className="login-page-divider-text">
              OR
            </p>

            <span className="login-page-divider-line"></span>
          </div>

          {/* Google Login */}
          <button
            className="login-page-google"
            type="button"
          >
            Continue with Google
          </button>

          {/* Forgot Password */}
          <Link
            className="login-page-forgot"
            to="/forgot-password"
          >
            Forgot password?
          </Link>

        </div>

        {/* Register Switch */}
        <div className="login-page-switch">
          <span>Don't have an account?</span>

          <Link
            className="login-page-switch-link"
            to="/register"
          >
            Sign up
          </Link>
        </div>

      </section>
    </main>
  );
}