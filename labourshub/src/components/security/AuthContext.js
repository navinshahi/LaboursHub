import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// 1. Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components
export default function AuthProvider({ children }) {
  // 3. Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  const [token,setToken] =useState(null);

  async function login(username, password,role) {

    try {

      const post = {"email":username,
        "password":password
      };
      const response = await executeJwtAuthenticationService(post);

      if (response.status === 200 && role===response.data.role) {
        const jwtToken = 'Bearer ' + response.data.jwtToken;
        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);
        apiClient.interceptors.request.use(
          (config) => {
            config.headers['Authorization'] = jwtToken;
            return config;
          }
        );
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null); 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username,token }}>
      {children}
    </AuthContext.Provider>
  );
}
