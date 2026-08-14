import { redirect } from "react-router-dom";
import fetchwithAuth from "../auth/fetchwithAuth.jsx";
const API_URL = import.meta.env.VITE_API_URL;

export async function registerAction({ request }) {
  const formData = await request.formData();

  const fullName = formData.get("fullName")?.trim();
  const username = formData.get("username")?.trim();
  const email = formData.get("email")?.trim();
  const password = formData.get("password");

  // -------------------------
  // Client-side validation
  // -------------------------

  if (!fullName || !username || !email || !password) {
    return {
      error: "Please fill in all fields.",
    };
  }

  if (username.length < 3) {
    return {
      error: "Username must be at least 3 characters.",
    };
  }

  if (password.length < 6) {
    return {
      error: "Password must be at least 6 characters.",
    };
  }

  try {
    const response = await fetchwithAuth(
      `${API_URL}/api/auth/register`,
      {
        method: "POST",

        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
        }),
      }
    );

    let data;

    try {
      data = await response.json();
    } catch {
      return {
        error: "Invalid response from server.",
      };
    }

    // -------------------------
    // Backend error
    // -------------------------

    if (!response.ok) {
      return {
        error:
          data?.message ||
          "Registration failed. Please try again.",
      };
    }

    // -------------------------
    // Save JWT
    // -------------------------

    if (!data.accessToken) {
      return {
        error: "Authentication token was not received.",
      };
    }

    localStorage.setItem(
      "accessToken",
      data.accessToken
    );

    // Store user if you want instant access
    if (data.user) {
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
    }

    // -------------------------
    // Successful registration
    // -------------------------

    return redirect("/");

  } catch (error) {
    console.error("Register action error:", error);

    return {
      error:
        "Unable to connect to the server. Please try again later.",
    };
  }
}