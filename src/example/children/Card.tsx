import React from "react";
import Card from "../../components/Card/Card";
import Box from "../../components/Box/Box";
import styled from "styled-components";
import { nunitoSans, systemUi } from "../../styles/font";
import { FaCartPlus } from "react-icons/fa6";
import { toast } from "../../components/Toast/Toast";
import Toaster from "../../components/Toast/Toaster";

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  display: flex;
  margin: auto;
`;

const ProductName = styled.span`
  font-family: ${nunitoSans};
  font-weight: 500;
  font-size: 16px;
`;

const Price = styled.span`
  font-family: ${systemUi};
  font-weight: 700;
  font-size: 26px;
`;

const Container = styled(Box)`
  flex-direction: column;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;

function add() {
  toast.info(
    "Product:  Apple iPhone 15 6.1' 6GB RAM/128GB ROM iOS 17 - Blue. has been added to cart"
  );
}
const Products = () => {
  return (
    <Container>
      <Toaster />
      <StyledImage
        src="https://res.cloudinary.com/dv4mozbaz/image/upload/v1724369862/ocdajdv3jhvrijauxnby.jpg"
        alt="Iphone 14 pro max"
      />
      <Box
        direction="row"
        style={{
          alignItems: "center",
          padding: 0,
          justifyContent: "space-between",
        }}
      >
        <Price>$899</Price>
        <FaCartPlus size={25} onClick={add} />
      </Box>
      <div style={{ width: 250 }}>
        <ProductName>
          Apple iPhone 15 6.1" 6GB RAM/128GB ROM iOS 17 - Blue
        </ProductName>
      </div>
    </Container>
  );
};

export default Products;
