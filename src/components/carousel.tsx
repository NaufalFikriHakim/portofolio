import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel() {
  return (
    <div style={{ width: '500px'}}>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img src='/lontar1.png' alt="" style={{ width: '500px', border: "1px solid gray", borderRadius:"5px"}} />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src='/lontar2.png' alt="" style={{ width: '500px', border: "1px solid gray", borderRadius:"5px"}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src='/lontar3.png' alt="" style={{ width: '500px', border: "1px solid gray", borderRadius:"5px"}}/>

      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CustomCarousel;