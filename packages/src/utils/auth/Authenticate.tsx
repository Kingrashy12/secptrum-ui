import React, { useEffect } from 'react';
import useRouter from 'src/hooks/useRouter';

type AuthenticateSessionProps = {
  children: React.ReactNode;
  /**
   * The URL to redirect to if the user is not authenticated.
   * This takes precedence over the `SUI_AUTH_REDIRECT_URL` environment variable.
   * If neither this prop nor the environment variable is set, an error will be thrown.
   */
  RedirectUrl: string;
  isAuthenticated: boolean;
};

/**
 * AuthenticateSession component for ensuring user authentication before accessing certain routes.
 *
 * This component checks if the user is authenticated and redirects to the specified redirect URL if not.
 * It uses the useAuth hook to get the authentication state and the useNavigation hook to navigate.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the AuthenticateSession.
 */
const AuthenticateSession = ({
  children,
  RedirectUrl,
  isAuthenticated,
}: AuthenticateSessionProps) => {
  const { router } = useRouter();

  /**
   * Function to get the redirect URL from the environment variables.
   *
   * @returns {string} The redirect URL.
   * @throws {Error} If the redirect URL is not set.
   */
  function getRedirectUrl() {
    const redirectUrl = process.env.SUI_AUTH_REDIRECT_URL as string;
    if (redirectUrl) {
      return redirectUrl;
    } else if (RedirectUrl) {
      return RedirectUrl;
    } else {
      throw new Error(
        'No redirect URL is set, please set SUI_AUTH_REDIRECT_URL or pass RedirectUrl prop'
      );
    }
  }

  const redirectUrl = getRedirectUrl();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectUrl);
    }
  }, [isAuthenticated, redirectUrl]);

  return <>{children}</>;
};

export default AuthenticateSession;
