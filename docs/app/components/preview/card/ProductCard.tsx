import CodeBlock from '@/components/custom/code/CodeBlock';
import Media from '@/components/custom/Media';
import { products } from '@/data/products';
import { fonts } from '@/styles/global';
import React from 'react';
import { Stack, Tabs, TabsHandle, TabPanel, Card, Box } from 'secptrum-ui';
import { styled } from 'styled-chroma';

const ProductCard = ({ code }: { code: string }) => {
  return (
    <Container>
      <Tabs variant="solid">
        <TabsHandle value="preview">Preview</TabsHandle>
        <TabsHandle value="code">Code</TabsHandle>

        <TabPanel>
          <ProductContainer align="horizontal" style={{ flexWrap: 'wrap' }}>
            {products.map((product, index) => (
              <StyledCard key={index}>
                <ImageContainer>
                  <Media src={product.image} alt={product.title} />
                </ImageContainer>
                <ProductInfo>
                  <Price>$ {product.price?.toLocaleString()}</Price>
                  <p>{product.title}</p>
                </ProductInfo>
              </StyledCard>
            ))}
          </ProductContainer>
        </TabPanel>

        <TabPanel>
          <CodeBlock code={code} />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ProductCard;

const Container = styled(Box)`
  flex-direction: column;
  gap: 20px;
`;
const ProductContainer = styled(Stack)`
  flex-wrap: wrap;

  @media screen and (max-width: 550px) {
    padding: 4px;
  }
`;
const StyledCard = styled(Card)`
  width: 250px;
  height: 330px;

  @media screen and (max-width: 550px) {
    width: 190px;
  }
  @media screen and (max-width: 360px) {
    width: 90%;
    height: auto;
  }
`;

const ImageContainer = styled(Box)`
  width: 100%;
  justify-content: center;
  img {
    width: 60%;
    height: auto;
  }
`;

const ProductInfo = styled(Box)`
  flex-direction: column;
  gap: 9px;

  p {
    font-family: 'Poppins-Normal', sans-serif;
    color: ${(props) => props.theme.colors?.body};
  }
`;

const Price = styled('h1')`
  font-size: 1.35rem;
  font-family: ${fonts.poppins};
  font-weight: 600;
  color: ${(props) => props.theme.colors?.text};
`;
