import { borderColor, maxWidth } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "../../components/navBar";
import AppFooter from "../../components/AppFooter";
import Image from "next/image";
import Money from "../../public/money.svg";
import Handshake from "../../public/handshake.svg";
import Chart from "../../public/chart.svg";
import JoeImage from "../../public/joeimage.jpg";
import AboutUsImage from "../../public/aboutus.png";
import NotFound from "../../components/notFound";

const page = () => {
  return (
    // <NotFound />
    <div style={{ backgroundColor: "White", color: "black" }}>
      <ResponsiveAppBar />
      {/* <NotFound /> */}
      <div
        style={{
          paddingTop: "80px",
          fontFamily: "arkhip",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontFamily: "arkhip" }}>
          Fractional investing democratizing the real estate industry
        </h1>
      </div>
      <div>
        <hr style={{ width: "50%" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "900px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>
              Real estate is one of the most proven wealth-creation methods in
              the history of mankind. One of America’s first multi-millionaires,
              Jacob John Astor, sought to find the American dream after his poor
              immigrant father came to the new world pursuing new wealth and
              opportunity. Astor grew up in New England and grew his fur trading
              business. As his business started to see exceptional growth, Astor
              began investing his profits in real estate located in present-day
              New York City. Astor quickly became a real estate mogul and proved
              that real estate made for a profitable financial asset.
            </p>
          </div>
          <div
            style={{
              width: "900px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>
              Real estate has been a laggard in the electronic
              trading/investment boom. Applications like robinhhood, webull,
              coinbase, and many more have opened up the world of financial
              assets to a much wider reach of retail investors. However retail
              investors looking to diversify their portfolio in real estate are
              stuck with limited and sub-optimal options. Crowdfunding and REITs
              are two of the most popular ways that retail investors can own
              real estate assets. Although these investments break down the
              barrier of extremely high asset prices through a fractional model,
              investors still experience a disconnect in what it is like to own
              a real estate asset in the nature that institutional investors do.
              Through crowdfunding and REITs investors can be one of thousands.
              These investment models give you no feeling that you are a land
              owner. Private placements of small investment groups through real
              estate investment shops do exist mostly for accredited investors
              only, but{" "}
              <b>
                fail to meet the need to offering the land ownership experience
                at an affordable price.
              </b>
            </p>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          fontFamily: "arkhip",
          color: "black",
        }}
      >
        <p style={{ fontSize: "20px", paddingLeft: "20px" }}>
          <b>Varden can be your resource for:</b>
        </p>
      </div> */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "left",
          color: "black",
          border: "2px",
          borderColor: "#00476A",
          borderRadius: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ul>
            <li>
              Sourcing unique and under-valued properties suited to your
              interests and investment strategies
            </li>
            <li>Finding like-minded investment partners</li>
            <li>
              Set up of multi-member LLC formation and operating agreement
            </li>
            <li>Set up of tax ID number/business bank account</li>
            <li>Securing contracts with property managers</li>
          </ul>
        </div>
        <div
          style={{
            paddingLeft: "50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={Money} width="75px" height="80px" />
            <p style={{ margin: "10px", textAlign: "center" }}>
              Investing through affordable and easy acquisition and sale of{" "}
              <b>LLC membership shares</b>
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={Handshake} width="75px" height="80px" />
            <p style={{ margin: "10px", textAlign: "center" }}>
              Matched with a knowledgeable agent that will help guide your
              portfolio based on <b>your interests</b>
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={Chart} width="75px" height="80px" />
            <p style={{ margin: "10px", textAlign: "center" }}>
              Standardization of legal documents and{" "}
              <b>investor friendly portfolio page</b> for seamless investment
              experience
            </p>
          </div>
        </div> */}
      {/* <Image src={AboutUsImage} style={{height:"200px"}}/> */}
      {/* </div> */}
      <div>
        <hr style={{ width: "50%" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "50px",
        }}
      >
        <div style={{}}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <h2 style={{ color: "black", fontFamily: "arkhip" }}>About Us</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "600px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                color: "black",
              }}
            >
              <p>
                My name is Joe Rozgonyi. I am a Junior at the University of
                Notre Dame studying finance and real estate. I am an avid
                traveler, fly fisherman, boxer, and real estate enthusiast. I am
                from Westchester, New York which is just about an hour north of
                NYC.
              </p>
            </div>
            <div
              style={{
                width: "600px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                color: "black",
              }}
            >
              <p>
                As a young entrepreneur I was determined to find a way to invest
                my savings in real estate assets. While researching the most
                effective methods to break into real estate markets, I
                discovered that the current investment vehicles take away the
                feeling of ownership by diluting your share of equity and
                putting operating activities in the hands of institutional
                operators.
              </p>
            </div>
            <div
              style={{
                width: "600px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                color: "black",
              }}
            >
              <p>
                I grew Varden with a vision that the real estate industry being
                as democratized and accessible to all investors as the stock
                market now is from electric trading. Real estate is a dinosaur
                in the sense that the industry is dominated by big institution
                landlords. Quality real estate assets are completely out of
                reach for the everyday investor. Through match-based fractional
                real estate investing, Varden is here to change that.
              </p>
            </div>
            <div
              style={{
                width: "600px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                color: "black",
              }}
            >
              <p style={{ textAlign: "left" }}></p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "300px",
          }}
        >
          <Image src={JoeImage} />
        </div>
      </div>
      <AppFooter currentDate={2022} AppVersion={"1.0.0"} />
    </div>
  );
};

export default page;
