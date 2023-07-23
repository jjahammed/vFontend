import React from "react";
import Head from "next/head";
import Link from "next/link";
import Registration from "../component/inner/Registration";
import NewsLetter from "../component/inner/NewsLetter";
import Client from "../component/inner/Client";
import Project from "../component/inner/project_contact";
import Section_Service from "../component/inner/Section_Service";
import ChainUp from "../component/inner/ChainUp";
import Custiomize_Price from "../component/inner/Custiomize_Price";
import Mentioned from "../component/inner/Mentioned.js";
import HowItWork from "../component/inner/HowItWork";
import Whyus from "../component/inner/Whyus";
import Services from "../component/inner/Services";
import Faqshow from "../component/inner/Faqshow";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Vegas Web – One Step Solution for Web Tech, Design and Marketing
          Services.
        </title>
        <meta property="og:site_name" content="VEGAS WEB"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://vegasweb.com/" />
        <link rel="canonical" href="https://vegasweb.com/" />
        <meta
          name="description"
          content="Vegas Web is an innovative strategic design and marketing agency, leveraging data analytics, market research, and digital technology for impactful solutions in branding, design, and product development.  "
        ></meta>
        <meta
          name="og:description"
          content="Vegas Web is an innovative strategic design and marketing agency, leveraging data analytics, market research, and digital technology for impactful solutions in branding, design, and product development.  "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Vegas Web – One Step Solution for Web Tech, Design and Marketing Services."
        />
        <meta property="og:image" content="Images/meta-img/home.jpg" />
        <meta property="image" content="Images/meta-img/home.jpg" />
        <meta name="keywords" content=""></meta>
        <link rel="icon" type="image" href="../Images/favicon.png"></link>
      </Head>
      <section>
        <div className="home" >
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="home_box_left">
                  <div className="home_title">
                    <h1 className="section_title1">
                      Your One-step E-Commerce Branding And Digital Marketing
                      Solution
                    </h1>
                    <p>
                      Rated by 63,582 people on{" "}
                      <span>
                        <img
                          src="../Images/Hero_section/trustpilot.png"
                          alt=""
                        />
                      </span>{" "}
                    </p>
                  </div>
                  <div className="home_btn">
                    <div className="video_editing_right_btn d-flex gap-3">
                    <Link href='#service'> Get Started</Link>
                    {/* <Link href='#service' className="learn-more-btn">Learn More</Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="home_box_right">
                  <div className="home_bg">
                    <img
                      src="https://res.cloudinary.com/dne6hxmao/image/upload/v1684838737/Vegas%20Web/Home-Page-_kiqrcp.gif"
                      alt="vages Web"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="serice-cards">
        <Section_Service />
      </div>
      {/* Disc section start */}
      <Whyus items={items} />
      {/* disc sectiion end */}
      {/* Service Section Start */}
    <div id="service">
    <Services />
    </div>
      {/* Service Section END */}
      {/* Price Section Start */}
      <Custiomize_Price />
      {/* Price section end */}
      {/* Mentioned section start */}
      <Mentioned />
      {/* Mentioned section END */}
      {/* ChainUp Section Start */}
      <ChainUp />
      {/* ChainUp Section END */}
      {/* NewsLetter Section Start */}
      <NewsLetter />
      {/* NewsLetter Section END */}
      {/*  ======== How It Work start ========= */}
      <HowItWork />
      {/*  ======== How It Work end========= */}
      <Client />
      <Project />
      {/* ================ FAQ start ========== */}
      <Faqshow />
      {/* ================ FAQ end ========== */}
      <Registration />
    </>
  );
};

export default index;

const items = [
  `Our services include solutions to fit any budget starting at a moderate cost. Projects typically begin getting results within a few hours.`,
   `A experienced and dynamic team is always available to create the  most ideal strategy  for your brand. `, 
   `You can request as many adjustments and changes as you like till you're pleased.`,
   `Money back guarantee if our work doesn’t meet your standards and you don't receive the best one for your company.`
  ];