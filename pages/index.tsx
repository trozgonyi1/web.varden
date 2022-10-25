import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from './carousel';
import ResponsiveAppBar from './navBar';
import Card from './card';
import { Divider } from '@mui/material';
import AppFooter from './AppFooter';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

type props = {
  header: string,
  body: string,
  alignment: string
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Box = ({ header, body, alignment } : props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const control = useAnimation();
  // const [ref, inView] = useInView();
  let alignment2 = "left"
  let alignment1 = "";

  if(alignment === "end"){
    alignment2 = "right";
    alignment1 = "end";
  }

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

  return (
    <section>
      <div ref={ref}>
        <div style={{height:"300px", scrollSnapType:"y proximity", padding:"20px", margin:"20px",paddingBottom:"10px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:alignment, backgroundColor:"#3D3D3D", color:"white", border:"3px solid white", borderColor:"#475c61", borderRadius:"20px", outline:"none", boxShadow:"0 0 20px #475c61"}}>
          <h2 style={{paddingLeft:"35px", width:"60%", fontFamily:"garamond"}}>{header}</h2>
          <p style={{paddingLeft:"25px",width:"60%", fontFamily:"garamond"}}>{body}</p>
        </div>
      </div>
      <motion.h2 style={{ y }}></motion.h2>
    </section>

    // <motion.div
    //   className="box"
    //   ref={ref}
    //   variants={boxVariant}
    //   initial="hidden"
    //   animate={control}
    //   style={{paddingTop:"40px"}}
    // >
    //   <div style={{height:"300px", scrollSnapType:"y proximity", padding:"40px", margin:"40px",paddingBottom:"40px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:alignment, backgroundColor:"#3D3D3D", color:"white", border:"3px solid white", borderColor:"#475c61", borderRadius:"20px", outline:"none", boxShadow:"0 0 20px #475c61"}}>
    //     <h2 style={{paddingLeft:"35px", width:"60%", fontFamily:"garamond"}}>{header}</h2>
    //     <p style={{paddingLeft:"25px",width:"60%", fontFamily:"garamond"}}>{body}</p>
    //   </div>
    // </motion.div>
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

  const textHolder = [[header1, body1, "left"], [header2, body2, "end"], [header3,body3,"left"]];

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
         {textHolder.map((text) => (
          <>
            <Box header={text[0]} body={text[1]} alignment={text[2]}></Box>
            <motion.div className="progress" style={{ scaleX, position:"fixed", left:"0px", right:"0px", height:"5px", background:"var(--accent)", bottom:"100px" }} />
          </>
         ))}
         </div>
          {/* <div style={{scrollSnapType:"y proximity"}}> */}
            {/* <div>
              <Box header={header1} body={body1} alignment="left"></Box>
            </div>
            <div>
              <Box header={header2} body={body2} alignment="end"></Box>
            </div>
            <div>
              <Box header={header3} body={body3} alignment="left"></Box>
            </div> */}
            {/* <Card/> */}
          {/* </div>   */}
          <div>
            <Divider sx={{ marginTop: "60px", marginBottom: "3px" }} />
            <AppFooter currentDate={2022} AppVersion={"1.0.0"} />
          </div>
        </div>
  )
}

export default Home