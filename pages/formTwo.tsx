import React, { Suspense, useEffect, useState } from 'react';

const FormTwo = () => {
    const [ radioState, setRadioState ] = useState<boolean>(false);
    const [ prefMarket, setPrefMarket ] = useState<string>("");
    const [ numInvestors, setNumInvestors ] = useState<string>("");
    const [ propType, setPropType ] = useState<string>("VacationProperty");

    const handleRadioClick = (value: boolean) => {
      setRadioState(value);
    }

    const handlePrefMarket = async (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setPrefMarket(event.target.value);
    }

    const handleNumChange = async (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setNumInvestors(event.target.value);
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
                    Vacation Property Form
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Prefered Market</label>
                    <input onChange={(e) => handlePrefMarket(e)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Placeholder" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Group Investment</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => handleRadioClick(true)}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => handleRadioClick(false)}/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                  {radioState && 
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping"># of Investors</span>
                        <input onChange={(e) => handleNumChange(e)} type="text" className="form-control" placeholder="(Ex: 6)" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div style={{padding:"15px"}}></div>
            <div className="submit" style={{display:"flex", justifyContent:"flex-start"}}>
                  <button onClick={handleFormSubmit} type="button" className="btn btn-primary" style={{backgroundColor:"#00476A"}}>Submit</button>
            </div>
          </form>
        </div>
    );
}

export default FormTwo;