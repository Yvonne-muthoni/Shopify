import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from '../Images/Image1.jpg';
import img4 from '../Images/Image4.jpg';
import img5 from '../Images/Image5.jpeg';
import img8 from '../Images/Images8.jpeg';

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Shopify</h1>
          <p>~~~~</p>
          <p id='unique'>#1 <span id="unique2">Trending</span> in 🇰🇪</p>
          <StyledShopButton>
            <FaShoppingCart /> Shop Now
          </StyledShopButton>
        </HeroText>
        <HeroImage src="https://plus.unsplash.com/premium_photo-1683121246270-0bdc3a34b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
      </HeroSection>

      <ProductShowcase>
        <h2 className='text-3xl text-center mt-20 mb-10'>FEATURED PRODUCTS</h2>
        <ProductGrid>
          <ProductCard>
            <ProductImage src={img1} alt="Apple Laptop" />
            <ProductDetails>
              <h3>Apple Laptop</h3>
              <p>$2099</p>
              <Description>
                Best of All Apple Laptops in the Market.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src={img4} alt="Apple Watch" />
            <ProductDetails>
              <h3>Apple Watch</h3>
              <p>$599</p>
              <Description>
                Best of All Apple Watches in the Market.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src={img5} alt="Samsung Laptop" />
            <ProductDetails>
              <h3>Samsung Laptop</h3>
              <p>$3099</p>
              <Description>
                Best of All Samsung Laptop in the Market.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src={img8} alt="Samsung Watch" />
            <ProductDetails>
              <h3>Samsung Watch</h3>
              <p>$1299</p>
              <Description>
                Best of All Samsung Watches in the Market.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
            </ProductDetails>
          </ProductCard>
        </ProductGrid>
      </ProductShowcase>

      <LocationSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991998495!2d-74.25986769193145!3d40.69767006374427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMTAuOSJX!5e0!3m2!1sen!2sus!4v1627645312273!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="Store Location"
        ></iframe>
      </LocationSection>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: center;
  color: white;
  height: 90vh;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-family: 'Playwrite CU', sans-serif;
  h1 {
    font-size: 5rem; 
    font-weight: bold;
  }

  #unique {
    font-weight: bold;
    font-family: 'Dancing Script', Playwrite CU;
    font-size: 3rem;
  }

  #unique2 {
    font-weight: bold;
    color: red;
    font-size: 3rem;
  }
`;

const StyledShopButton = styled.button`
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  background: linear-gradient(45deg, #ffcccb, #ff1493);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    transform: scale(0);
    z-index: -1;
    background-color: rgb(193, 163, 98);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover::before {
    transform: scale(3);
  }

  &:hover {
    color: #ffd1dc;
    transform: scale(1.1);
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  &:active {
    transform: scale(1);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

const ProductShowcase = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  text-align: left;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: #007bff;
`;

const LocationSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export default Home;
