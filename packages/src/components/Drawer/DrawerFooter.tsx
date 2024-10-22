import { DivProps } from 'styled-chroma';
import { ModalFooterSui } from '../../styles/feedback/styled';
import { useDrawer } from '../../context/useDrawer';

interface DrawerFooterProps extends DivProps {
  /**
   * Specifies the space between elements in the footer.
   * @type {number}
   */
  space?: number;
  /**
   * Specifies the alignment of the footer content.
   * @type {"right" | "left"}
   *
   * @default `right`
   */
  position?: 'right' | 'left';
  /**
   * Add a border-top to the component.
   * @type {boolean}
   * @default true
   */
  showBorder?: boolean;
}

/**
 * A footer component for the Drawer, providing customizable content and styling.
 *
 * @param {Object} props - Component properties.
 * @param {number} [props.space] - Space between footer elements.
 * @param {'right' | 'left'} [props.position] - Alignment of the footer content.
 * @param {boolean} [props.showBorder=true] - Indicates if a border should be displayed.
 * @param {ReactNode} props.children - Content rendered inside the footer.
 */

const DrawerFooter = ({
  children,
  showBorder = true,
  ...props
}: DrawerFooterProps) => {
  const { mode } = useDrawer();
  return (
    <ModalFooterSui showBorder={showBorder} mode={mode} {...props}>
      {children}
    </ModalFooterSui>
  );
};

export default DrawerFooter;
DrawerFooter.displayName = 'DrawerFooter';
