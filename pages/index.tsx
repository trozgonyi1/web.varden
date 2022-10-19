import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from './carousel';
import ResponsiveAppBar from './navBar';
import Card from './card';

const Home: NextPage = () => {
  return (
        <div style={{ height:"100%"}}>
          <ResponsiveAppBar />
          <Carousel />
          <div style={{ paddingBottom:"80px" }}></div>
          <div style={{}}>
            <Card/>
          </div> 
          <div style={{ paddingBottom:"80px" }}></div>

        </div>
  )
}

export default Home
