
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
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  
  
</Carousel>
        </div>
    );
};

export default Home;