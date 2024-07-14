import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Our Store</h1>
          <p>Find the best products at unbeatable prices.</p>
          <ShopButton>
            <FaShoppingCart /> Shop Now
          </ShopButton>
        </HeroText>
        <HeroImage src="https://cdn.prod.website-files.com/635a76dc72a1554a18e33d3d/63f62f2d63501a20978b56de_63c525d81c217825ecd91b15_60-best-fashion-e-commerce-sites.jpeg" alt="Hero" />
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
`;

const ShopButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
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