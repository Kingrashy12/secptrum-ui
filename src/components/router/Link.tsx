import React from "react";
import useNavigation from "../../hooks/useNavigation";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A custom Link component for navigation within the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.to - The destination path for the link.
 * @param {React.ReactNode} props.children - The content to be rendered inside the link.
 * @param {string} [props.className] - Optional CSS class name for styling the link.
 * @param {...React.AnchorHTMLAttributes<HTMLAnchorElement>} props - Any additional anchor element attributes.
 * @returns {React.ReactElement} A React element representing the link.
 */

const Link: React.FC<LinkProps> = ({ to, children, className, ...props }) => {
  const navigate = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;
