import { borderColor, maxWidth } from "@mui/system";
import React from "react";
import ResponsiveAppBar from '../navBar';
import AppFooter from "../AppFooter";
import Image from 'next/image';
import Money from "../../public/money.svg";
import Handshake from "../../public/handshake.svg";
import Chart from "../../public/chart.svg";
import AboutUsImage from "../../public/aboutus.png";
import NotFound from "../notFound";

const page = () => {
    return (
        // <NotFound />
        <div style={{backgroundColor:"White", color:"black"}}>
            <ResponsiveAppBar />
            {/* <NotFound /> */}
            <div style={{paddingTop:"80px", fontFamily:"arkhip",color:"black",display:"flex", justifyContent:"center"}}>
                <h1>About Us</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{width:"900px", display:"flex", justifyContent:"center"}}>
                    <p style={{textAlign:"center",display:"flex", justifyContent:"center"}}>Real estate investing today remains inaccesable to the majority of retail investors. The largest asset class in the world has many barriers to entry, such as high prices and illiquid market places. Varden is aiming to break down the barriers of entry that make real estate investing closed off to eager investors.</p>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column",color:"black"}}>
                <p style={{display:"flex", justifyContent:"center", marginBottom:"0px"}}>Varden takes luxury properties, otherwise inaccessible to the everyday investor,</p>
                <p style={{display:"flex", justifyContent:"center", marginBottom:"0px", marginTop:"0px"}}>and facilitates a structure where multiple people can split the cost of ownership through a share-based model.</p>
                <p style={{display:"flex", justifyContent:"center", marginTop:"0px"}}>Varden can facilitate real estate transactions structured around any real estate asset class.</p>
            </div>
            <div style={{display:"flex", flexDirection:"column-reverse", fontFamily:"arkhip",color:"black"}}>
                <p style={{fontSize:"20px", paddingLeft:"20px"}}><b>Varden can be your resource for:</b></p>
            </div>
            <div style={{display:"flex", justifyContent:"left", color:"black", border:"2px", borderColor:"#00476A", borderRadius:"3px"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <ul>
                        <li>Sourcing unique and under-valued properties suited to your interests and investment strategies</li>
                        <li>Finding like-minded investment partners</li>
                        <li>Set up of multi-member LLC formation and operating agreement</li>
                        <li>Set up of tax ID number/business bank account</li>
                        <li>Securing contracts with property managers</li>
                    </ul>
                </div>
                <div style={{paddingLeft:"50px", display:"flex", justifyContent:"center",flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Image src={Money} width="75px" height="80px"/>
                        <p style={{margin:"10px", textAlign:"center"}}>Investing through affordable and easy acquisition and sale of <b>LLC membership shares</b></p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Image src={Handshake} width="75px" height="80px"/>
                        <p style={{margin:"10px", textAlign:"center"}}>Matched with a knowledgeable agent that will help guide your portfolio based on <b>your interests</b></p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Image src={Chart} width="75px" height="80px"/>
                        <p style={{margin:"10px", textAlign:"center"}}>Standardization of legal documents and <b>investor friendly portfolio page</b> for seamless investment experience</p>
                    </div>
                </div>
                {/* <Image src={AboutUsImage} style={{height:"200px"}}/> */}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h2 style={{color:"black", fontFamily:"arkhip"}}>Our Mission</h2>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{width:"600px",display:"flex", justifyContent:"center", flexDirection:"column",color:"black"}}>
                    <p style={{textAlign:"center"}}>{"Varden matches like-minded investors together and connects them with high performing properties that fit with their investing goals, preferences, and conveniences. Properties will be structured as a multi-member LLC and each member will purchase a share of ownership or equity (the group of members own 100% of the LLC).The LLC will be governed under an operating agreement that will allow the shareholders to make business decisions together, accrue a steady influx of revenue, and more."}</p>
                </div>
            </div>
            <AppFooter currentDate={2022} AppVersion={"1.0.0"}/>
        </div>
    )
}

export default page;