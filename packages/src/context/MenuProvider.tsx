import React, { useRef, useState } from "react";
import Menu from "../components/Menu/Menu";
import MenuTrigger from "../components/Menu/MenuTrigger";
import { MenuProps } from "../types/sui";
import MenuItem from "../components/Menu/MenuItem";
import Box from "../components/Box/Box";
import { MenuContext } from "./menu";

/**
 * MenuProvider component is a context provider for the Menu component.
 * It manages the state of the menu, and provides functions to open and close the menu.
 * @param {MenuProps} props - The props for the MenuProvider component.
 * @returns {React.ReactNode} - The MenuProvider component.
 */

const MenuProvider = ({ children, ...props }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const Trigger = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === MenuTrigger
  );
  const menuItems = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== MenuTrigger
  );

  const renderChildren = (elements: React.ReactNode[], isTrigger?: boolean) => {
    return elements.map((element, index) => {
      if (!React.isValidElement(element)) {
        // Skip invalid elements
        return null;
      }

      if (isTrigger) {
        return (
          <MenuTrigger key={index} ref={triggerRef}>
            {element.props.children}
          </MenuTrigger>
        );
      }

      return (
        <MenuItem
          key={index}
          onClick={element.props.onClick}
          className={element.props.className}
          id={element.props.id}
          color={element.props.color}
          style={element.props.style}
          space={element.props.space}
          mode={element.props.mode}
          disabled={element.props.disabled}
        >
          {element.props.children}
        </MenuItem>
      );
    });
  };

  return (
    <MenuContext.Provider value={{ isOpen, onClose, onOpen }}>
      <Box direction="column">
        {renderChildren(Trigger, true)}
        <Menu {...props}>{renderChildren(menuItems)}</Menu>
      </Box>
    </MenuContext.Provider>
  );
};

export default MenuProvider;
MenuProvider.displayName = "Sui.MenuProvider";
