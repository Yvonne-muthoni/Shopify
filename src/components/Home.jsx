import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <Container>
      <Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <CarouselIndicators className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </CarouselIndicators>
        <CarouselInner className="carousel-inner">
          <CarouselItem className="carousel-item active">
            <img src="https://www.theplunge.com/wp-content/uploads/2019/10/Vacheron-Constantin-1024x683.jpg" className="d-block w-100" alt="Slide 1" />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img src="https://www.hamiltonwatch.com/media/wysiwyg/picture-2.jpg" className="d-block w-100" alt="Slide 2" />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img src="https://elitetraveler.com/wp-content/uploads/sites/8/2023/07/CreditAlainCostam126506-0001_2301ac_002_cmjn1-min1.jpg" className="d-block w-100" alt="Slide 3" />
          </CarouselItem>
        </CarouselInner>
        <CarouselControlPrev className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </CarouselControlPrev>
        <CarouselControlNext className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </CarouselControlNext>
      </Carousel>
      
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
        <h2>Featured Products</h2>
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
        </ProductGrid>
      </ProductShowcase>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Carousel = styled.div`
  height: 400px; /* Set the desired height */
  position: relative;
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const CarouselInner = styled.div`
  height: 100%;
`;

const CarouselItem = styled.div`
  height: 100%;
`;

const CarouselControlPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const CarouselControlNext = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const HeroSection = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroText = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for better readability */
  border-radius: 10px;
`;

const ShopButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #e64a19;
  }

  svg {
    margin-right: 5px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductShowcase = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
`;

const ProductDetails = styled.div`
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-bottom: 10px;
    font-size: 16px;
    color: #666;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartIcon = styled.span`
  margin-left: 10px;
  color: #ff5722;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  input[type="radio"] {
    display: none;
  }

  label {
    cursor: pointer;
    color: #ddd;
    transition: color 0.3s ease;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  input[type="radio"]:checked ~ label,
  input[type="radio"]:checked ~ label ~ label {
    color: #ff5722;
  }

  label:hover,
  label:hover ~ label {
    color: #ffcc00;
  }
`;

export default Home;
