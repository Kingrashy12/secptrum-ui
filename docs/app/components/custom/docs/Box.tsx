import { Box, BoxType } from "secptrum-ui";

const DocsBox = ({ children, ...props }: BoxType) => {
  return (
    <Box direction="column" spacing={props.spacing || "md"}>
      {children}
    </Box>
  );
};

export default DocsBox;
