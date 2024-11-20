import { fonts } from "../../../../styles/global";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Fab, styled, Card } from "secptrum-ui";

const BasicFab = () => {
  return (
    <Container>
      <Fab size="lg" variant="light" moveOnScroll position="top-left">
        <IoMenu />
      </Fab>
      <Fab size="lg" moveOnScroll>
        <LuLogOut size={20} />
        <Text>Log out</Text>
      </Fab>
    </Container>
  );
};

export default BasicFab;

const Container = styled(Card)`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
`;

const Text = styled("p")`
  font-size: 13px;
  font-family: ${fonts.poppins};
  font-weight: 500;
`;
