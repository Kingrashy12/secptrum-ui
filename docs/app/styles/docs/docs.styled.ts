import { Card, styled } from 'secptrum-ui';
import { fonts } from '../global';

export const InstallPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 3rem;
  overflow: hidden;
  padding: 2rem 35px;
  display: flex;
  max-width: 100%;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 550px) {
    padding: 0.9rem 1rem;
  }
`;

export const LargeTextHeader = styled('p')`
  color: ${(props) => props.theme.colors?.text};
  font-size: 2.25rem;
  line-height: 1.2222222222222223;
  letter-spacing: -0.2px;
  font-weight: 600;
  font-family: 'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const MediumTextHeader = styled('h2')`
  color: ${(props) => props.theme.colors?.text};
  font-size: 1.45rem;
  line-height: 1.5;
  letter-spacing: 0.1px;
  font-family: ${fonts.inter};
  font-weight: 600;
  margin: 40px 0 4px;
`;

export const SmallTextHeader = styled('h3')`
  color: ${(props) => props.theme.colors?.text};
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0.1px;
  font-family: ${fonts.inter};
  font-weight: 600;
  margin: 40px 0 4px;
`;

export const DocText = styled<{ onHeader?: boolean }>('p')`
  font-family: ${fonts.jakarta};
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors?.body};
  font-weight: ${(props) => (props.onHeader ? 400 : 500)};
`;

export const FrameWorkContent = styled(Card)`
  background: ${(props) => props.theme.colors?.card};
  cursor: pointer;
  width: 260px;
  max-width: 100%;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.colors?.text};
  }
  p {
    color: ${(props) => props.theme.colors?.body};
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 870px) {
    width: 220px;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
