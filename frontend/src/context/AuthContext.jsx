import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const [token, setToken] = useState(
    () => localStorage.getItem("accessToken")
  );

  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token;

  // Restore user after refresh
  useEffect(() => {
    const restoreUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Invalid token");
        }

        const data = await response.json();

        setCurrentUser(data.user);
      } catch (error) {
        console.error(error);

        localStorage.removeItem("accessToken");
        setToken(null);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, [token]);

  // REGISTER
  const register = async (formData) => {
    const response = await fetch(
      `${API_URL}/api/auth/register`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    localStorage.setItem(
      "accessToken",
      data.accessToken
    );

    setToken(data.accessToken);
    setCurrentUser(data.user);

    return data;
  };

  // LOGIN
  const login = async (credentials) => {
    const response = await fetch(
      `${API_URL}/api/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(credentials),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem(
      "accessToken",
      data.accessToken
    );

    setToken(data.accessToken);
    setCurrentUser(data.user);

    return data;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("accessToken");

    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        loading,
        isAuthenticated,

        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}