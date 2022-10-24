import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from './carousel';
import ResponsiveAppBar from './navBar';
import Card from './card';
import { Divider } from '@mui/material';
import AppFooter from './AppFooter';

const Home: NextPage = () => {
  return (
        <div style={{ height:"100%"}}>
          <ResponsiveAppBar />
          <Carousel />
          <div style={{display:"flex", justifyContent:"center",paddingBottom:"40px",paddingTop:"40px"}}>
            <img width="500px" src='/Vardenhorizontal.png'></img>
          </div>
          <div style={{}}>
            <Card/>
          </div> 
          <div>
            <Divider sx={{ marginTop: "20px", marginBottom: "3px" }} />
            <AppFooter currentDate={2022} AppVersion={"1.0.0"} />
          </div>
        </div>
  )
}

export default Home
