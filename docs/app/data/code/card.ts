export const cardCodes = {
  ex: `
   import { Button, toast, Card } from 'secptrum-ui';
   import { Typography } from '@/components'
   
   export const App = () => {
     return (
         <CardWrap >
          <Typography as="h2">Welcome to Spectrum UI</Typography>
          <Typography>
            This card uses the default theme and supports shadowing for a raised
            effect.
          </Typography>
          <Button
            onClick={() =>
              toast.success("Welcome! I hope you'll stick around 🙂")
            }
          >
            Click me
          </Button>
        </CardWrap>
     );
   };

  const CardWrap = styled(Card)'
  width: 350px;
  align-self: center;
  '
      `,
  products: `
import { Stack, Card } from 'secptrum-ui';
import { products } from "@/data/products";
import { Media } from "@/data/components";
   
   export const App = () => {
     return (
         <Stack align="horizontal" wrap>
          {products.map((product, index) => (
            <StyledCard key={index}>
              <ImageContainer>
                <Media src={product.image} alt={product.title} />
              </ImageContainer>
              <ProductInfo theme={theme}>
                <Price theme={theme}>$ {product.price?.toLocaleString()}</Price>
                <p>{product.title}</p>
              </ProductInfo>
            </StyledCard>
          ))}
        </Stack>
     );
   };

 '
 const StyledCard = styled(Card)'
  width: 250px;
  align-self: center;
  height: 330px;
';

const ImageContainer = styled(Box)'
  width: 100%;
  justify-content: center;
  img {
    width: 60%;
    height: auto;
  }
';

const ProductInfo = styled(Box)'
  flex-direction: column;
  gap: 9px;

  p {
    font-family: "Poppins-Normal", sans-serif;
  }
';

const Price = styled.h1'
  font-size: 1.35rem;
  font-family: "Poppins-Semibold", sans-serif;
';
      `,
};
