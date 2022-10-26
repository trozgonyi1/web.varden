import { textAlign } from "@mui/system";
import React from "react";

const main = () => {
    return (
        <div style={{display:"flex", height:"300px", scrollSnapType:"y proximity", padding:"20px", margin:"20px",paddingBottom:"0px",  backgroundColor:"#3D3D3D", color:"white", border:"3px solid white", borderColor:"#475c61", borderRadius:"20px", outline:"none", boxShadow:"0 0 20px #475c61"}}>
            <div style={{width:"50%",backgroundColor:"blue", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"left",}}>
                <h2 style={{ backgroundColor:"black",paddingLeft:"35px", width:"60%", fontFamily:"garamond", textAlign:"center"}}>header</h2>
                <p style={{ backgroundColor:"red",paddingLeft:"25px",width:"60%", fontFamily:"garamond", textAlign:"center"}}>body</p>
            </div>
            <div style={{width:"50%",display:"flex", justifyContent:"center", backgroundColor:"purple"}}>
                <a style={{ backgroundColor:"#EC8D4D", borderColor:"#00476A", height:"50px", width:"100px" }} className="btn btn-primary">View Form</a>
            </div>
      </div>
    )
}

export default main;