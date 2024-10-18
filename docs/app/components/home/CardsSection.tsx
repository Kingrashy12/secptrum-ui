import React from 'react';
import { Box, Card, Icon, Stack } from 'secptrum-ui';
import { cardsDetails } from '@/data/home';
import { styled } from 'styled-chroma';

const CardsSection = () => {
  return (
    <StackCards align="horizontal">
      {cardsDetails.map((detail, index) => (
        <DetailsCard key={index}>
          <Header>
            <IconContainer>
              <StyledIcon icon={detail.icon} />
            </IconContainer>
            <HeaderText>{detail.header}</HeaderText>
          </Header>
          <DetailsText>{detail.desc}</DetailsText>
        </DetailsCard>
      ))}
    </StackCards>
  );
};

export default CardsSection;

const StackCards = styled(Stack)`
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 20px;
`;

const Header = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const IconContainer = styled('div')`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border-radius: 50%;
  padding: 15px;
`;

const StyledIcon = styled(Icon)`
  color: white;
  size: 40px;
`;

const HeaderText = styled('h2')`
  font-size: 22px;
  font-family: 'Poppins-Medium', sans-serif;
  color: ${({ theme }) => theme.colors?.text};
  text-align: center;
`;

const DetailsText = styled('p')`
  font-family: 'Poppins-Normal', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.body};
  text-align: center;
  padding: 0 10px;
`;

const DetailsCard = styled(Card)`
  width: 350px;
  height: 250px;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;
