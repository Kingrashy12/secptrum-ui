import React, { useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  ContentWrap,
  StyledToast,
  ToastContent,
} from "../../styles/styled";
import Icon from "../Icon/Icon";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle, IoIosInformationCircle } from "react-icons/io";
import { colors } from "../../styles/colors";
import { BiSolidError } from "react-icons/bi";
import { generateId } from "../../lib/helper";
// import "../../types/fun";

let toast: ToastType;

type ToastNotification = {
  id: string;
  message: string;
  position?: ToastPositionType;
  className?: string;
  type: ToastVariant;
};

const Toast = () => {
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<ToastPositionType>("top-right");
  const [className, setClassName] = useState("");
  const [toastType, setToastType] = useState<ToastVariant>();
  const [showToast, setShowToast] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const toastTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({}); // Ref to store timeouts

  const show = (newToast: ToastNotification) => {
    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Set a timeout to remove the toast after 4 seconds
    const timeoutId = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== newToast.id));
      delete toastTimeouts.current[newToast.id]; // Clean up the timeout ref
    }, 4000);

    // Store the timeout ID in the ref
    toastTimeouts.current[newToast.id] = timeoutId;
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      // Clear all timeouts
      Object.values(toastTimeouts.current).forEach(clearTimeout);
    };
  }, []);

  function removeToast(toast: ToastNotification) {
    setToasts((prev) => {
      const updatedToast = prev.filter((t) => t.id !== toast.id);
      return updatedToast;
    });
  }

  toast = {
    info: (msg: string, options?: ToastOptionsType) => {
      setMessage(msg);
      setPosition(options?.position || "top-right");
      setClassName(options?.className || "");
      setToastType("info");
      const newToast = {
        id: generateId(),
        message: msg,
        position: options?.position || "top-right",
        className: options?.className || "",
        type: toastType || "info",
      };
      show(newToast);
    },
    error: (msg: string, options?: ToastOptionsType) => {
      setMessage(msg);
      setPosition(options?.position || "top-right");
      setClassName(options?.className || "");
      setToastType("error");
      const newToast = {
        id: generateId(),
        message: msg,
        position: options?.position || "top-right",
        className: options?.className || "",
        type: toastType || "error",
      };
      show(newToast);
    },
    success: (msg: string, options?: ToastOptionsType) => {
      setMessage(msg);
      setPosition(options?.position || "top-right");
      setClassName(options?.className || "");
      setToastType("success");
      const newToast = {
        id: generateId(),
        message: msg,
        position: options?.position || "top-right",
        className: options?.className || "",
        type: toastType || "success",
      };
      show(newToast);
    },
  };

  const getLabel = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return "Information";
      case "error":
        return "Error";
      case "success":
        return "Success";
    }
  };

  const getIconColor = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return colors.blue500;
      case "error":
        return colors.red500;
      case "success":
        return colors.green500;
    }
  };

  const getIcon = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return IoIosInformationCircle;
      case "error":
        return BiSolidError;
      case "success":
        return IoIosCheckmarkCircle;
    }
  };

  return (
    <>
      {toasts.map((toast) => (
        <StyledToast
          key={toast.id}
          position={toast.position || "top-right"}
          className={toast.className}
          showtoast={true}
        >
          <ContentWrap>
            <Icon
              icon={getIcon(toast.type)}
              color={getIconColor(toast.type)}
              size={20}
            />
            <ToastContent direction="column">
              <div className="header">{getLabel(toast.type)}</div>
              <span>{toast.message}</span>
            </ToastContent>
          </ContentWrap>
          <CloseIcon type={toast.type} onClick={() => removeToast(toast)}>
            <IoCloseCircleOutline size={25} />
          </CloseIcon>
        </StyledToast>
      ))}
    </>
  );
};

export default Toast;

export { toast };
