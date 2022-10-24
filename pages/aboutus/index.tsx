import { borderColor, maxWidth } from "@mui/system";
import React from "react";
import ResponsiveAppBar from '../navBar';
import AppFooter from "../AppFooter";

const page = () => {
    return (
        <div style={{backgroundColor:"White", color:"black"}}>
            <ResponsiveAppBar />
            <div style={{paddingTop:"80px", fontFamily:"arkhip",color:"black",display:"flex", justifyContent:"center"}}>
                <h1>About Us</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column",color:"black"}}>
                <p style={{display:"flex", justifyContent:"center"}}>Varden takes luxury properties, otherwise inaccessible to the everyday investor, </p>
                <p style={{display:"flex", justifyContent:"center"}}>and facilitates a structure where multiple people can split the cost of ownership through a share-based model.</p>
                <p style={{display:"flex", justifyContent:"center"}}><i>This is not a timeshare.</i></p>
            </div>
            <div style={{paddingTop:"20px", fontFamily:"arkhip",color:"black",display:"flex", justifyContent:"center"}}>
                <p style={{fontSize:"20px"}}><b>Varden can be your resource for:</b></p>
            </div>
            <div style={{display:"flex", justifyContent:"center", color:"black", border:"2px", borderColor:"#00476A", borderRadius:"3px"}}>
                <div style={{width:"400px"}}>
                    <ul>
                        <li>Sourcing unique and under-valued properties suited to your interests and investment strategies</li>
                        <li>Finding like-minded investment partners</li>
                    </ul>
                </div>
                <div style={{width:"400px"}}>
                    <ul>
                        <li>Set up of multi-member LLC formation and operating agreement</li>
                        <li>Set up of tax ID number/business bank account</li>
                        <li>Securing contracts with property managers</li>
                    </ul>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h2 style={{color:"black", fontFamily:"arkhip"}}>Our Mission</h2>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{width:"600px",display:"flex", justifyContent:"center", flexDirection:"column",color:"black"}}>
                    <p style={{textAlign:"center"}}>{"Varden matches like-minded investors together and connects them with high performing properties that fit with their investing goals, preferences, and conveniences. Properties will be structured as a multi-member LLC and each member will purchase a share of ownership or equity (the group of members own 100% of the LLC).The LLC will be governed under an operating agreement that will allow the shareholders to make business decisions together, accrue a steady influx of revenue, and more."}</p>
                </div>
            </div>
            <AppFooter currentDate={new Date()} AppVersion={"1.0.0"}/>
        </div>
    )
}

export default page;