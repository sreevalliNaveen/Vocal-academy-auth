import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        // If token has expired, clear storage
        if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
          localStorage.removeItem("auth");
        } else {
          setUser(parsed.user || null);
          setAccessToken(parsed.accessToken || null);
        }
      } catch (e) {
        localStorage.removeItem("auth");
      }
    }

    setLoading(false);
  }, []);

  const saveAuth = ({ user: userData, accessToken, expiresIn }) => {
    const expiresAt = expiresIn
      ? Date.now() + expiresIn * 1000
      : Date.now() + 60 * 60 * 1000; // default 1 hour

    const payload = { user: userData, accessToken, expiresAt };

    localStorage.setItem("auth", JSON.stringify(payload));
    setUser(userData);
    setAccessToken(accessToken);
  };

  const login = ({ user: userData, accessToken, expiresIn }) => {
    saveAuth({ user: userData, accessToken, expiresIn });
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setAccessToken(null);
  };

  // Placeholder refresh - no real refresh endpoint in fakeApi
  const refreshToken = async () => {
    // In a real app: call refresh endpoint and update tokens
    // Here we simply return false to indicate no refresh happened
    return false;
  };

  const isAuthenticated = Boolean(user && accessToken);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, loading, login, logout, refreshToken, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
