import { fonts } from "../../../styles/global";
import React from "react";
import { Box, styled } from "secptrum-ui";
import ComponentsBadge from "../ComponentsBadge";

const ApiReference = ({ reference }: ReferenceType) => {
  return (
    <StyledTable direction="column" fullWidth>
      <RefRow direction="column" spacing="md">
        {reference?.map((ref, index) => (
          <RefCard key={index} direction="column">
            <RefCell>
              <ComponentsBadge>{ref.prop}</ComponentsBadge>
            </RefCell>
            <RefCell spacing="md">
              <p className="default">Type:</p>
              <RefBadge>{ref.type}</RefBadge>
            </RefCell>
            <RefCell>
              <RefDescription>{ref.description}</RefDescription>
            </RefCell>
            <RefCell spacing="md">
              <p className="default">Default:</p>
              <RefBadge>{ref.default}</RefBadge>
            </RefCell>
          </RefCard>
        ))}
      </RefRow>
    </StyledTable>
  );
};

export default ApiReference;

const StyledTable = styled(Box)`
  border: 1px solid ${(props) => props.theme.colors?.divider};
  border-radius: 8px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors?.ref_shadow};
  overflow: hidden;
  margin-top: 5px;
`;

const RefCard = styled(Box)`
  display: flex;
  transition: background 0.3s;
  border-bottom: 1px solid ${(props) => props.theme.colors?.divider};

  &:hover {
    background: ${(props) => props.theme.colors?.hoverBackground};
  }
`;

const RefDescription = styled("p")`
  font-size: 14px;
  font-weight: 400;
  font-family: ${fonts.poppins};
  color: ${(props) => props.theme.colors?.text};
  text-align: left;
  width: 150px;
  flex: 1;
  flex-shrink: 0;
  display: flex;
`;

const RefCell = styled(Box)`
  flex: 1;
  padding: 9px 12px;
  text-align: left;

  .default {
    font-family: ${fonts.poppins};
    font-weight: 400;
    font-size: 13px;
    color: ${(props) => props.theme.colors?.body};
  }
`;

const RefBadge = styled("span")`
  font-size: 13px;
  color: blue;
  font-family: ${fonts.poppins};
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.02em;
`;

const RefRow = styled(Box)`
  overflow-x: auto;
`;
