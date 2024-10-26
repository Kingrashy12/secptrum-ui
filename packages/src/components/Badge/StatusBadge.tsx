import React from "react";
import { colors } from "../../styles/colors";
import { styled } from "styled-chroma";

const statusBadgeColorScheme = {
  online: colors.green[500],
  offline: colors.gray[500],
  away: colors.yellow[500],
  busy: colors.red[500],
};

const statusBadgeSize = {
  sm: 8,
  md: 12,
  lg: 16,
};

const getStatusBadgeColorScheme = (status: StatusBadgeProps["status"]) => {
  return statusBadgeColorScheme[status as keyof typeof statusBadgeColorScheme];
};

const getStatusBadgeSize = (size: StatusBadgeProps["size"]) => {
  return statusBadgeSize[size as keyof typeof statusBadgeSize];
};

type StatusBadgeProps = {
  /**
   * The status of the badge, one of 'online', 'offline', 'away', or 'busy'.
   * @default 'online'
   */
  status?: "online" | "offline" | "away" | "busy";
  /**
   * The size of the badge, one of 'sm', 'md', or 'lg'.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional className to be applied to the badge container.
   */
  className?: string;
  /**
   * Optional children to be rendered inside the badge.
   */
  children: React.ReactNode;
  /**
   * Optional custom class to be applied to the badge.
   */
  badgeClassName?: string;
};

/**
 * A badge component that displays a status icon.
 */
const StatusBadge = ({
  status = "online",
  size = "md",
  className,
  children,
  badgeClassName,
}: StatusBadgeProps) => {
  return (
    <StatusBadgeSui className={className}>
      <StatusBadgeIcon className={badgeClassName} status={status} size={size} />
      <>{children}</>
    </StatusBadgeSui>
  );
};

export default StatusBadge;
StatusBadge.displayName = "StatusBadge";

const StatusBadgeSui = styled("div")`
  display: flex;
  position: relative;
  flex-shrink: 0;
  width: auto;
`;
StatusBadgeSui.displayName = "StatusBadgeSui";

type IStyleStatusBadgeIcon = {
  status: StatusBadgeProps["status"];
  size: StatusBadgeProps["size"];
};

const StatusBadgeIcon = styled<IStyleStatusBadgeIcon>("div")`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 9999px;
  width: ${({ size }) => getStatusBadgeSize(size)}px;
  height: ${({ size }) => getStatusBadgeSize(size)}px;
  background: ${({ status }) => getStatusBadgeColorScheme(status)};
  border: 1.5px solid white;
  display: block;
`;
