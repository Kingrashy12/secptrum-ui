import { Box } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const NormalInfo = ({ children }: { children: React.ReactNode }) => {
  return <StyledNormalInfo>{children}</StyledNormalInfo>;
};

export default NormalInfo;

const StyledNormalInfo = styled(Box)`
  border-left: 3px solid #999;
  border-radius: 4px;
  padding: 16px;
  /* margin-bottom: 20px; */
  height: auto;
  color: #333;
  font-size: 14px;

  p {
    margin: 0;
  }
`;
