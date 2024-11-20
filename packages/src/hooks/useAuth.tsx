import { createContext, useContext, useEffect, useState } from "react";
import AuthenticateSession from "../utils/auth/Authenticate";
import { jwtDecode } from "jwt-decode";
import useRouter from "./useRouter";
import { storageActions } from "./useStorage";

// TODO: Add generic type to user object

type AuthContextType<TUser> = {
  isAuthenticated: boolean;
  loginUser: (token: string) => void;
  logout: () => void;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  user: TUser | null;
};

type AuthProviderProps = {
  children: React.ReactNode;
  /**
   * The URL to redirect to if the user is not authenticated.
   * This takes precedence over the `SUI_AUTH_REDIRECT_URL` environment variable.
   * If neither this prop nor the environment variable is set, an error will be thrown.
   */
  RedirectUrl?: string;
};

const AuthContext = createContext<AuthContextType<any> | undefined>(undefined);

// AuthContext is created with AuthContextType or undefined
// This context will be used to manage authentication state throughout the app
/**
 * AuthProvider component for managing user authentication state.
 *
 * This component provides a context for managing user authentication state,
 * including login, logout, and user information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the AuthProvider.
 */
const AuthProvider = <TUser,>({ children, RedirectUrl }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  /* eslint-disable */
  const [user, setUser] = useState<TUser | null>(null);
  const { router } = useRouter();

  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      const savedToken = storageActions.get("sui-session-token");
      return savedToken ? JSON.parse(savedToken) : "";
    }
    return "";
  });

  useEffect(() => {
    if (token) {
      authenticateUser(token);
    }
  }, [token]);

  const authenticateUser = (token: string) => {
    const user = jwtDecode<TUser>(token);
    if (user) {
      setIsAuthenticated(true);
      setUser(user);
    }
  };

  useEffect(() => {
    if (isAuthenticated && typeof window !== "undefined") {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  /**
   * Function to logout the user and clear the authentication state.
   */
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("sui-session-token");
      setToken("");
    }
  };

  /**
   * Function to login a user with a given token.
   *
   * @param {string} token - The JWT token for user authentication.
   */
  const loginUser = (token: string) => {
    if (token && typeof window !== "undefined") {
      setToken(() => {
        storageActions.set("sui-session-token", token);
        return token;
      });
      const decodedUser = jwtDecode<TUser>(token);
      setIsAuthenticated(true);
      setUser(decodedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logout, user }}>
      <AuthenticateSession
        RedirectUrl={RedirectUrl}
        isAuthenticated={isAuthenticated}
      >
        {children}
      </AuthenticateSession>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.displayName = "Sui.AuthProvider";

/**
 * Custom hook to access the authentication context.
 *
 * This hook provides access to the authentication state and actions
 * managed by the AuthProvider.
 *
 * @returns {AuthContextType} The authentication context values.
 */
export const useAuth = <TUser,>() => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context as AuthContextType<TUser>;
};
