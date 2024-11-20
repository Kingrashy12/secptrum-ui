import { Box, styled } from 'secptrum-ui';

const NormalInfo = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <StyledNormalInfo style={style}>{children}</StyledNormalInfo>;
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
