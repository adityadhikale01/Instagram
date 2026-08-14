import { useState } from "react";
import { Link, useNavigation ,Form,useActionData} from "react-router-dom";

import { useAuth } from "../../auth/useAuth.jsx";

import "./RegisterPage.css";

export default function RegisterPage() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const error = actionData?.error || null;
  const isSubmitting = navigation.state === "submitting";


  return (
    <main className="register-page">
      <section className="register-page-container">

        <div className="register-page-card">

          <h1 className="register-page-logo">
            Conexa
          </h1>

          <p className="register-page-subtitle">
            Sign up to see photos and videos from your friends.
          </p>
        {actionData?.error && (
          <div className="form-error">
            {actionData.error}
          </div>
        )}
          <Form
          method="post"
            className="register-page-form"
          >
            <input
              className="register-page-input"
              name="fullName"
              placeholder="Full name"
              autoComplete="name"
            />

            <input
              className="register-page-input"
              name="username"
              placeholder="Username"
             
              autoComplete="username"
            />

            <input
              className="register-page-input"
              name="email"
              type="email"
              placeholder="Email"
              
              autoComplete="email"
            />

            <input
              className="register-page-input"
              name="password"
              type="password"
              placeholder="Password"
           
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
            {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </Form>

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