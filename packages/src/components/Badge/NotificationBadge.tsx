import React from "react";
import { colors } from "../../styles/colors";
import { css, styled } from "styled-chroma";

const notificationBadgeSize = {
  sm: 16,
  md: 20,
  lg: 24,
};

const notificationBadgeColorScheme = {
  success: colors.green[500],
  danger: colors.red[500],
  warning: colors.yellow[500],
  info: colors.blue[500],
};

type NotificationBadgeProps = {
  /**
   * The count to be displayed on the badge.
   */
  count: number;
  /**
   * Optional className to be applied to the badge container.
   */
  className?: string;
  /**
   * Optional children to be rendered inside the badge.
   */
  children?: React.ReactNode;
  /**
   * The variant of the badge, either 'body' or 'icon'.
   * @default 'icon'
   */
  variant?: "body" | "icon";
  /**
   * The color scheme of the badge, one of 'success', 'danger', 'warning', or 'info'.
   * @default 'danger'
   */
  colorScheme?: "success" | "danger" | "warning" | "info";
  /**
   * The size of the badge, one of 'sm', 'md', or 'lg'.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional custom class to be applied to the badge.
   */
  badgeClass?: string;
  /**
   * Boolean indicating whether to use a border around the badge.
   * @default true
   */
  useBorder?: boolean;
};

const getNotificationBadgeSize = (size: NotificationBadgeProps["size"]) => {
  return notificationBadgeSize[size as keyof typeof notificationBadgeSize];
};

const getNotificationBadgeColorScheme = (
  colorSchema: NotificationBadgeProps["colorScheme"]
) => {
  return notificationBadgeColorScheme[
    colorSchema as keyof typeof notificationBadgeColorScheme
  ];
};

/**
 * A badge component that displays a count of notifications or messages.
 */
const NotificationBadge = ({
  count,
  className,
  children,
  variant = "icon",
  colorScheme = "danger",
  size = "md",
  badgeClass,
  useBorder = true,
}: NotificationBadgeProps) => {
  if (count === 0) return null;
  return (
    <>
      {variant === "body" ? (
        <NotificationBadgeIcon
          variant={variant}
          colorScheme={colorScheme}
          size={size}
          useBorder={useBorder}
          className={badgeClass}
        >
          {count}
        </NotificationBadgeIcon>
      ) : (
        <NotificationBadgeSui className={className}>
          <NotificationBadgeIcon
            variant={variant}
            colorScheme={colorScheme}
            size={size}
            useBorder={useBorder}
            className={badgeClass}
          >
            {count}
          </NotificationBadgeIcon>
          {children}
        </NotificationBadgeSui>
      )}
    </>
  );
};

export default NotificationBadge;
NotificationBadge.displayName = "NotificationBadge";

const NotificationBadgeSui = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  width: auto;
`;
NotificationBadgeSui.displayName = "NotificationBadgeSui";

type IStyledNotificationBadgeIcon = {
  size: NotificationBadgeProps["size"];
  colorScheme: NotificationBadgeProps["colorScheme"];
  variant: NotificationBadgeProps["variant"];
  useBorder: NotificationBadgeProps["useBorder"];
};

const NotificationBadgeIcon = styled<IStyledNotificationBadgeIcon>("div")`
  padding: ${({ size }) => getNotificationBadgeSize(size) * 0.2}px;
  background: ${({ colorScheme }) =>
    getNotificationBadgeColorScheme(colorScheme)};
  border-radius: 9999px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: inherit;
  font-size: ${({ size }) => getNotificationBadgeSize(size) - 8}px;
  border: ${({ useBorder }) => (useBorder ? "1px solid white" : "none")};
  flex-shrink: 0;
  width: auto;
  ${(props) =>
    props.variant === "icon"
      ? css`
          top: -2px;
        `
      : css`
          flex-shrink: 0;
          position: relative;
        `}
`;
