import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from './carousel';
import ResponsiveAppBar from './navBar';
import FormOne from './formOne';
import { Divider } from '@mui/material';
import AppFooter from './AppFooter';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import FormPopup from "./popup"
import FormTwo from './formTwo';

type props = {
  header: String,
  body: String,
  alignment: "row" | "row-reverse"
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Box = ({ header, body, alignment } : props) => {
  const [ propType, setPropType ] = useState<string>("InvestmentProperty");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const control = useAnimation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = async () => {
    let response = await fetch('https://varden.vercel.app/api/data', {  // Enter your IP address here
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    })
  }

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  return (
    <section>
      <div className="inflate" ref={ref}>
        <div style={{ flexDirection:alignment, display:"flex", alignContent:"center", height:"300px", padding:"20px", margin:"20px",paddingBottom:"0px",  backgroundColor:"#3D3D3D", color:"white", border:"3px solid white", borderColor:"#475c61", borderRadius:"20px", outline:"none", boxShadow:"0 0 20px #475c61"}}>
          <div style={{width:"60%", display:"flex", justifyContent:"center", flexDirection:"column", }}>
            <h2 style={{paddingLeft:"35px", width:"100%", fontFamily:"garamond"}}>{header}</h2>
            <p style={{paddingLeft:"25px",width:"100%", fontFamily:"garamond"}}>{body}</p>
          </div>
          <div style={{width:"40%", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Button className="btn-modal" style={{backgroundColor:"#00476A", borderColor:"#000000"}} onClick={handleShow}>
                Open Form
            </Button>
          <Modal show={show} onHide={handleClose} style={{paddingTop:"70px"}}>

              <Modal.Header closeButton>
                  <Modal.Title>{header.split(":")[0]}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  {header.split(":")[0]!=="Investment Package 3" && <FormOne />}
                  {header.split(":")[0]==="Investment Package 3" && <FormTwo />}
              </Modal.Body>

              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Submit
                  </Button>
              </Modal.Footer>

            </Modal>
          </div>
        </div>
      </div>
      <motion.h2 style={{ y }}></motion.h2>
    </section>
  );
};

const Home: NextPage = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const header1 = "Investment Package 1: High-end Commercial Real Estate Assets (office, industrial, retail, multifamily, hotel, developments)"
  const body1 = "Luxury real estate assets located in central business districts. Assets in this investment category will be above the 20 million dollar mark and have an “allure” factor that makes it a staple in its marketplace. Varden can structure investment groups around office, industrial, retail, multifamily, hotel, developments, and redevelopment ventures."

  const header2 = "Investment Package 2: Middle-sized Commercial Assets (less robust and more affordable than assets in the first package)"
  const body2 = "The same commercial assets as investment package 1 at a more affordable cost. Assets in this category will be under the 20 million dollar mark and less robust than brand name developments in metropolitan cities. This investment package is perfect for investors looking to enter the commercial real estate market at a lower cost than class A and Trophy assets demand."

  const header3 = "Investment Package 3: Short-term Airbnb rentals"
  const body3 = "This investment package solely focuses on short-term residential rental properties. In other words, Airbnb or vrbo properties. These assets generate income from short leases often driven by a popular vacation destination or heavy tourist destination."

  type displayType = {
    display: "row" | "row-reverse"
  }

  type text = {
    header: String,
    body: String,
    display: displayType
  }

  var row: displayType = {display: "row"} as displayType
  var rowReverse: displayType = {display: "row-reverse"} as displayType

  const textHolder: text[] = [{header: header1, body: body1, display: row}, {header: header2, body: body2, display: rowReverse}, {header: header3, body: body3, display: row}];

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
        <div style={{backgroundColor:"#3D3D3D", height:"100%"}}>
          <ResponsiveAppBar />
          <Carousel />
          <div style={{display:"flex", justifyContent:"center",paddingBottom:"40px",paddingTop:"40px"}}>
            <img width="500px" src='/Vardenhorizontal.png'></img>
          </div>
          <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", backgroundColor:"#3D3D3D", color:"white", paddingTop:"40px", paddingBottom:"40px", borderBottom:"3px solid white",borderTop:"3px solid white",borderColor:"white"}}>
            <h2 style={{paddingLeft:"35px", width:"60%", fontFamily:"garamond",textAlign:"center"}}>A New Era of Investing</h2>
            <p style={{paddingLeft:"25px",display:"flex", justifyContent:"left",textAlign:"center", width:"60%", fontFamily:"garamond"}}>Investing in real estate just became easier and more profitable. Varden matches like-minded investors together and connects them with high-performing properties that fit with their investing goals, preferences, and conveniences. Properties will be structured as a multi-member LLC, and each member will purchase a share of ownership or equity (the group of members own 100% of the LLC). The LLC will be governed under an operating agreement that will allow the shareholders to make business decisions together, accrue a steady influx of revenue, and more. </p>
          </div>
          <div>
         </div>
         <div className='mandatory'>
         {textHolder.map((item) => (
          <>
            <Box header={item.header} body={item.body} alignment={item.display.display}></Box>
            <motion.div className="progress" style={{ scaleX, position:"fixed", left:"0px", right:"0px", height:"5px", background:"var(--accent)", bottom:"100px" }} />
          </>
         ))}
         </div>
          <div>
            <Divider sx={{ marginTop: "60px", marginBottom: "3px" }} />
            <AppFooter currentDate={2022} AppVersion={"1.0.0"} />
          </div>
        </div>
  )
}

export default Home