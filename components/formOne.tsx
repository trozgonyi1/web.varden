import React, { Suspense, useEffect, useState } from 'react';

type Props = {
  geo: string,
  asset: string,
  radio: string
}

const FormOne = ( ) => {
    const [ radioState, setRadioState ] = useState<string>("");
    const [ prefMarket, setPrefMarket ] = useState<string>("");
    const [ geoPref, setGeoPref ] = useState<string>("");

    const [ numInvestors, setNumInvestors ] = useState<string>("");
    const [ assetPref, setAssetPref ] = useState<string>("");

    const [ propType, setPropType ] = useState<string>("InvestmentProperty");

    const handleGeoPref = (e: React.ChangeEvent<HTMLInputElement>) => {
      setGeoPref(e.target.value);
    }

    const handleBool = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRadioState(e.target.value);
    }

    const handleAssetPref = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAssetPref(e.target.value);
    }

    const handleFormSubmit = async () => {
      let response = await fetch('https://varden.vercel.app/api/data', {  // Enter your IP address here
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({PropertyType: propType, PreferedMarket: prefMarket, GroupInvestment: radioState, NumInvestors: numInvestors}) //JSON.stringify(jsonData) // body data type must match "Content-Type" header
      })
    }

    return (
        <div>
          <form>
            <div style={{ paddingBottom:"30px" }}></div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Investment Property Form
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Geographic Preference</label>
                    <input onChange={(e) => handleGeoPref(e)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="New York City" />
                  </div>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Asset Preference</label>
                  <select className="form-control" placeholder='Asset Preference' onChange={(e) => handleAssetPref(e)}>
                    <option>No Preference</option>
                    <option>Office</option>
                    <option>Retail</option>
                    <option>Multifamily</option>
                    <option>Industrial</option>
                    <option>Hotel</option>
                  </select>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Do you have an investment group already?</label>
                  <select className="form-control" placeholder='Asset Preference' onChange={e => handleBool(e)}>
                    <option>Yes</option>
                    <option>I would like to be matched with like-minded investors</option>
                  </select>
                  </div>
              </div>
            </div>
          </div>
          <div style={{padding:"15px"}}></div>
          </form>
        </div>
    );
}

export default FormOne;