import react from 'react';
import { Button } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Image1 from '../public/image1.png';
import Image2 from '../public/image2.png';
import Image3 from '../public/image3.png';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Box from '@mui/material/Box';

const CarouselWrapper = styled.div`
  max-width: 900px;
  .carousel-control.left,
  .carousel-control.right {
    background: none;
  }
`;

const CoustomCarousel = () => {
    return (
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showIndicators={false}>
        <div>
          <Image src={Image1}/>
          <p className="legend">Democratized match-based real estate investing. Your passions drive your portfolio.</p>
        </div>
        <div>
          <Image src={Image2}/>
          <p className="legend">Democratized match-based real estate investing. Your passions drive your portfolio.</p>
        </div>
        <div>
          <Image src={Image3}/>
          <p className="legend">Democratized match-based real estate investing. Your passions drive your portfolio.</p>
        </div>
      </Carousel>
    //   <MDBCarousel showControls showIndicators>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={1}
    //     src='...'
    //     alt='...'
    //   ><Image src={Image1}></Image>
    //     <p><span style={{marginLeft:"0px", color:"white", backgroundColor:'#22222280',fontSize:"24px",fontFamily:"garamond"}}>Democratized match-based real estate investing. Your passions drive your portfolio.</span></p>
    //   </MDBCarouselItem>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={2}
    //     src={Image1}
    //     alt='...'
    //   >
    //     <p style={{fontSize:"24px", fontFamily:"garamond"}}>Democratized match-based real estate investing. Your passions drive your portfolio.</p>
    //   </MDBCarouselItem>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={3}
    //     src='./image3.png'
    //     alt='...'
    //   >
    //     <p style={{fontSize:"24px", fontFamily:"garamond"}}>Democratized match-based real estate investing. Your passions drive your portfolio.</p>
    //   </MDBCarouselItem>
    // </MDBCarousel>
      // <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      //   <div className="carousel-indicators">
      //       <Button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
      //       <Button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
      //       <Button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
      //     </div>
      //     <div className="carousel-inner">
      //       <div className="carousel-item active">
      //         <img src="/image2.png" className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
      //           <p>Democratized match-based real estate investing. Your passions drive your portfolio.</p>
      //         </div>
      //       </div>
      //       <div className="carousel-item">
      //         <img src="/image2.png" className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
      //           <p>Democratized match-based real estate investing. Your passions drive your portfolio.</p>
      //         </div>
      //       </div>
      //       <div className="carousel-item">
      //         <img src="/image3.png" className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
      //           <p>Democratized match-based real estate investing. Your passions drive your portfolio.</p>
      //         </div>
      //       </div>
      //     </div>
      //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //       <span className="visually-hidden">Previous</span>
      //     </button>
      //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //       <span className="visually-hidden">Next</span>
      //     </button>
      //   </div>
    );
}

export default CoustomCarousel;