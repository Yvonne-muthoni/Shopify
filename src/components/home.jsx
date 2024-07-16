import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
        <h2>FEATURED PRODUCTS</h2>
        <ProductGrid>
          <ProductCard>
            <ProductImage src="https://www.watchgecko.com/cdn/shop/articles/Breguet-Classique-Extra-Plate-5157-6-2_1100x.jpg?v=1654779382" alt="Product 1" />
            <ProductDetails>
              <h3>Product 1</h3>
              <p>200.00 Ksh</p>
              <Description>
                A high-quality product that meets all your needs and exceeds expectations.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1" name="star-radio" value="star-1" />
                <label htmlFor="star-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2" name="star-radio" value="star-1" />
                <label htmlFor="star-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3" name="star-radio" value="star-1" />
                <label htmlFor="star-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4" name="star-radio" value="star-1" />
                <label htmlFor="star-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5" name="star-radio" value="star-1" />
                <label htmlFor="star-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://via.placeholder.com/200" alt="Product 2" />
            <ProductDetails>
              <h3>Product 2</h3>
              <p>300.00 Ksh</p>
              <Description>
                Enjoy the best performance and style with this amazing product.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-1-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-2-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-3-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-4-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-5-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://via.placeholder.com/200" alt="Product 2" />
            <ProductDetails>
              <h3>Product 2</h3>
              <p>300.00 Ksh</p>
              <Description>
                Enjoy the best performance and style with this amazing product.
                <CartIcon><FaShoppingCart /></CartIcon>
              </Description>
              <Rating>
                <input type="radio" id="star-1-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-1-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-2-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-2-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-3-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-3-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-4-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-4-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input type="radio" id="star-5-2" name="star-radio-2" value="star-1" />
                <label htmlFor="star-5-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
              </Rating>
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
    font-weight :bold;
  }

  #unique{
    font-weight :bold;
    font-family:'Dancing Script',Playwrite CU;
    font-size: 3rem;
  }
    #unique2{
    font-weight :bold;
    color:red;
    font-size:3rem;
`;


// const ShopButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 18px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;
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

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    svg {
      fill: #ccc;
      width: 24px;
      height: 24px;
    }
  }

  input:checked ~ label svg,
  input:hover ~ label svg {
    fill: #ff9800;
  }
`;

const LocationSection = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export default Home;