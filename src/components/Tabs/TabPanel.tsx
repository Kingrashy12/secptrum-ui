import { ComponentProps, forwardRef } from "react";

type PanelProps = ComponentProps<"div">;

const TabPanel = forwardRef<HTMLDivElement, PanelProps>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

export default TabPanel;
