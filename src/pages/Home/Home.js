
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/1TM5yWP/team-landing-0ac60c2.png"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/3C3jGXk/257586041-391640829208646-8457660866633196151-n.jpg"
      alt="second slide"
    />
   
  </Carousel.Item>
  
  
</Carousel>
        </div>
    );
};

export default Home;