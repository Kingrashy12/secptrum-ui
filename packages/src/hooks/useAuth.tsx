import { createContext, useContext, useEffect, useState } from 'react';
import AuthenticateSession from '../utils/auth/Authenticate';
import { jwtDecode } from 'jwt-decode';
import useRouter from './useRouter';

type AuthContextType = {
  isAuthenticated: boolean;
  loginUser: (token: string) => void;
  logout: () => void;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  user: any;
};

type AuthProviderProps = {
  children: React.ReactNode;
  /**
   * The URL to redirect to if the user is not authenticated.
   * This takes precedence over the `SUI_AUTH_REDIRECT_URL` environment variable.
   * If neither this prop nor the environment variable is set, an error will be thrown.
   */
  RedirectUrl: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
const AuthProvider = ({ children, RedirectUrl }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  /* eslint-disable */
  const [user, setUser] = useState<any>(null);
  const { router } = useRouter();

  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('sui-session-token')
      : null;

  useEffect(() => {
    if (token) {
      authenticateUser(token);
    }
  }, [token]);

  function authenticateUser(token: string) {
    const user = jwtDecode(token);
    if (user) {
      setIsAuthenticated(true);
      setUser(user);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);

  /**
   * Function to logout the user and clear the authentication state.
   */
  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sui-session-token');
    }
  }

  /**
   * Function to login a user with a given token.
   *
   * @param {string} token - The JWT token for user authentication.
   */
  function loginUser(token: string) {
    if (token && typeof window !== 'undefined') {
      localStorage.setItem('sui-session-token', token);
      setIsAuthenticated(true);
      setUser(user);
    }
  }

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

// Custom hook to access the AuthContext
// This hook can be used to access the authentication state and actions
/**
 * Custom hook to access the authentication context.
 *
 * This hook provides access to the authentication state and actions
 * managed by the AuthProvider.
 *
 * @returns {AuthContextType} The authentication context values.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
