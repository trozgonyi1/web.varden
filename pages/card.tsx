import React, { Suspense, useEffect, useState } from 'react';
import FormOne from './formOne';
import FormTwo from './formTwo';

type Props = {
    title: string,
    body: string,
}

const Card = () => {
    // const [ title,setTitle ] = useState<string>("");
    // const [ body,setBody ] = useState<string>("");

    const [ buttonStateOne, setButtonStateOne ] = useState<boolean>(false);
    const [ buttonStateTwo, setButtonStateTwo ] = useState<boolean>(false);

    const handleButtonOne = () => {
        setButtonStateOne(!buttonStateOne);
        setButtonStateTwo(false);
    }

    const handleButtonTwo = () => {
        setButtonStateTwo(!buttonStateTwo);
        setButtonStateOne(false);
    } 

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <div className="card" style={{width: "22rem"}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontFamily:"helvetica", fontSize:"24px"}}><b>Investment Property</b></h5> 
                        {/* Vacation Property */}
                        <p className="card-text" style={{fontFamily:"helvetica", fontSize:"16px"}}>Diversify your financial assets by investing in real estate. Here you have the opportunity to invest in an income generating real estate asset at a fraction of the cost through a shared-based model.</p>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <a style={{ marginTop:"40px", backgroundColor:"#EC8D4D", borderColor:"#00476A" }} onClick={handleButtonOne} className="btn btn-primary">View Form</a>
                        </div>
                        {buttonStateOne && <FormOne />}
                    </div>
                </div>
            </div>
            <div>
                <div className="card" style={{width: "22rem"}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontFamily:"helvetica", fontSize:"24px"}}><b>Vacation Property</b></h5>
                        <p className="card-text" style={{fontFamily:"helvetica", fontSize:"16px"}}>Own a high end vacation property at a fraction of the cost. Varden takes luxury vacation houses, otherwise inaccessible to the everyday buyer, and facilitates a structure where multiple people can split the cost of ownership through a share-based model.</p>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <a style={{ backgroundColor:"#EC8D4D", borderColor:"#00476A" }} onClick={handleButtonTwo} className="btn btn-primary">View Form</a>
                        </div>
                        {buttonStateTwo && <FormTwo />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;