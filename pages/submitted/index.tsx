import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Divider } from '@mui/material';
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

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Card() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
  
    return (
      <section>
        <div ref={ref}>
          <h1>"A London skyscraper"</h1>
        </div>
        <motion.h2 style={{ y }}></motion.h2>
      </section>
    );
  }
  
const Main = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <>
        {[1, 2, 3, 4, 5].map((image) => (
          <Card/>
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </>
    );
  }

export default Main;